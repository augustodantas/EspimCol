import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { Observable, Subscription } from 'rxjs';

import { Program } from '../../../models/program.model';
import { ProgramsAddService } from '../programsadd.service';
import { ChannelService } from 'src/app/services/channel.service';

@Component({
  selector: 'esm-step1',
  templateUrl: './step1.component.html',
})
export class Step1Component implements OnDestroy {
  program: Observable<Program>;
  form: FormGroup;
  bsConfig: any = { dateInputFormat: 'DD/MM/YYYY' };
  private _subscription$: Subscription;
  //Canal
  needSet: boolean = true;
  locId: number = -1;
  auxDate: string = '';
  whatDate: string = '';
  auxHour: String = '';
  whatHour: string = '';

  constructor(
    private programAddService: ProgramsAddService,
    private formBuilder: FormBuilder,
    private router: Router,
    private _route: ActivatedRoute,
    private channel: ChannelService
  ) {
    this.form = this.formBuilder.group({
      title: ['', Validators.required],
      description: [''],
      isPublic: [false],
      beginDate: [''],
      beginTime: [''],
      endDate: [''],
      endTime: [''],
    });

    this.program = this.programAddService.program;

    this._subscription$ = this.programAddService.program.subscribe((programInstance: Program) => {
      this.setProgram(programInstance);
    });
  }

  ngOnDestroy(): void {
    this._subscription$.unsubscribe();
    this.programAddService.saveLocalStep(this.form.value);
  }

  setProgram(program: Program) {
    this.form.reset();

    //Mátodo que define o canal de entrada de dados do canal websocket
    if (this.needSet) {
      this.channel.echo.private('program.' + program.id).listenForWhisper('step1' + program.id, (e: any) => {
        console.log('evento 1', e);
        this.channelUpdate(e);
      });
      this.needSet = false;
      this.locId = program.id;
    }

    if (program['starts']) {
      program['beginDate'] = moment(program['starts']).format('DD/MM/YYYY');
      program['beginTime'] = program['starts'];
    }

    if (program['ends']) {
      program['endDate'] = moment(program['ends']).format('DD/MM/YYYY');
      program['endTime'] = program['ends'];
    }
    this.form.patchValue({ ...program });
  }

  toDate(date: Date, time?: Date): string {
    if (!date || !moment(date).isValid()) {
      return null;
    }

    let dateFormated = moment(date).format('YYYY-MM-DD');
    if (!time) {
      return dateFormated;
    }
    return `${dateFormated} ${moment(time).format('HH:mm:ss')}`;
  }

  submit(): void {
    this.form.markAllAsTouched();

    let dados = { ...this.form.value };

    dados['starts'] = this.toDate(dados['beginDate'], dados['beginTime']);
    dados['ends'] = this.toDate(dados['endDate'], dados['endTime']);

    if (this.form.valid) {
      this.programAddService.saveStep(dados).subscribe(() => {});
      this.programAddService.saveLocalStep(dados);

      this.router.navigate(['./second'], {
        relativeTo: this._route.parent,
      });
    }
  }

  // A partir deste ponto estão implmentadas os métodos para as rotinas de colaboração
  //

  channelUpdate(dado: any) {
    for (let campo in dado) {
      if (campo != 'id') {
        if (campo == 'beginDate' || campo == 'endDate') {
          this.form.get(campo).setValue(moment(dado[campo]).format('DD/MM/YYYY'));
        } else {
          if (campo == 'beginTime' || campo == 'endTime') {
            console.log('Mudou hora..');
            this.form.get(campo).setValue(dado[campo]);
            //this.form.get(campo).setValue(moment(dado[campo]).format('HH:mm:ss'));
          } else {
            this.form.get(campo).setValue(dado[campo]);
            this.form.get(campo).dirty;
          }
        }
        console.log(campo, dado[campo]);
        console.log(this.form);
        console.log(this.form.get(campo).value);
      }
      console.log(campo, dado[campo]);
    }
  }

  sendUpdate(campo: string) {
    console.log(campo);
    let dado: any = {};
    dado.id = this.locId;
    console.log(this.form.get(campo).value);

    dado[campo] = this.form.get(campo).value;
    console.log('Alterou');
    if (!this.needSet) {
      this.channel.chanelSend(this.locId, 'step1' + this.locId, dado);
    }
  }

  horaOn(data: string) {
    this.whatHour = data;
    this.auxHour = moment(this.form.get(data).value).format('HH:mm:ss');
  }

  horaOut(data: string) {
    let aux: string = moment(this.form.get(data).value).format('HH:mm:ss');
    console.log(data);
    console.log(this.whatHour);
    console.log(this.auxHour);
    console.log(aux);

    if (data == this.whatHour && this.auxHour != aux) {
      this.sendUpdate(data);
    } else {
      console.log('Não Mudou');
    }
    console.log('Saiu');
  }

  saveDate(data: string) {
    this.whatDate = data;
    this.auxDate = moment(this.form.get(data).value).format('DD/MM/YYYY');
  }

  sendDate(data: string) {
    setTimeout(() => {
      let aux: string = moment(this.form.get(data).value).format('DD/MM/YYYY');
      console.log(data);
      console.log(this.whatDate);
      console.log(this.auxDate);
      console.log(aux);

      if (data == this.whatDate && this.auxDate != aux) {
        this.sendUpdate(data);
      } else {
        console.log('Não Mudou');
      }
    }, 100);
  }
}
