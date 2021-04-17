import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { DAOService } from '../../../dao/dao.service';
import { Participant } from '../../../models/participant.model';
import { Program } from '../../../models/program.model';
import { ProgramsAddService } from '../programsadd.service';

@Component({
  selector: 'esm-step3',
  templateUrl: './step3.component.html',
})
export class Step3Component implements OnInit {
  participants: Participant[]; // These are the general participants
  programParticipants: Participant[]; // These are the participants of this program

  hasChanged = false; // True if some change was applied

  addParticipantForm: FormGroup = this.formBuilder.group({
    email: ['', Validators.required],
    name: ['', Validators.required],
    nickname: [''],
  });

  @ViewChild('alphabet1') alphabet1: ElementRef;
  @ViewChild('alphabet2') alphabet2: ElementRef;
  @ViewChild('alphabetAll') alphabetAll: ElementRef;

  constructor(private dao: DAOService, private programAddService: ProgramsAddService, private formBuilder: FormBuilder) {}

  /**
   * Checks if @participant is also in programParticipant
   * @param participant
   */
  isChecked(participant: Participant) {
    // return !!(this.programParticipants ? this.programParticipants.find((value) => value.id === participant.id)) : undefined);
  }

  ngOnInit() {
    this.participants = this.programAddService.getParticipants();
    this.programParticipants = this.programAddService.getParticipantsInstance();

    /**
     * Subscribes to changes in the program (whenever the program in programsadd.service.ts is changed, it reflects here too)
     */
    this.programAddService.getProgramObservable().subscribe((programInstance: Program) => {
      this.participants = this.programAddService.getParticipants();
      this.programParticipants = this.programAddService.getParticipantsInstance();
    });
  }

  /**
   * Adds an participant
   */
  addParticipant(): void {
    // this.dao.postObject(ESPIM_REST_Participants, new Participant(this.addParticipantForm.getRawValue())).subscribe(
    //   (data) => {
    //     const participant = new Participant(data);
    //     this.participants.push(participant);
    //     this.participants.sort((a: Participant, b: Participant) => a.user.name.localeCompare(b.user.name));
    //     this.addProgramParticipant(participant);
    //     new SwalComponent({
    //       title: 'Participante adicionado aos contatos!',
    //       type: 'success',
    //     }).show();
    //     this.addParticipantForm.reset();
    //   },
    //   (error) =>
    //     new SwalComponent({
    //       title: 'Falha ao adicionar o contato',
    //       type: 'error',
    //     }).show()
    // );
  }

  /**
   * Adds an participant to the programParticipants
   */
  addProgramParticipant(participant: Participant | number) {
    if (!(participant instanceof Participant)) participant = this.participants.find((value: Participant) => value.id === participant);

    this.programParticipants.push(participant);
    this.programParticipants.sort((a: Participant, b: Participant) => a.user.name.localeCompare(b.user.name));

    this.hasChanged = true;
  }

  /**
   * Removes an participant from the programParticipants
   */
  removeProgramObserver(participantId: number) {
    this.programParticipants.splice(
      this.programParticipants.findIndex((value: Participant) => value.id === participantId),
      1
    );

    this.hasChanged = true;
  }

  /**
   * Handles filtering observers by the alphabet
   * @param letter
   * @param event
   */
  filter_by(letter: string, event: any) {
    if (letter === '*') {
      this.participants = this.programAddService.getParticipants();
      event.target.classList.add('btn-default-active');
      for (const button of this.alphabet1.nativeElement.children) button.classList.remove('btn-default-active');
      for (const button of this.alphabet2.nativeElement.children) button.classList.remove('btn-default-active');
      return;
    } else if (this.alphabetAll.nativeElement.classList.contains('btn-default-active')) {
      this.alphabetAll.nativeElement.classList.remove('btn-default-active');
      this.participants = new Array<Participant>();
    }
    if (event.target.classList.contains('btn-default-active')) {
      event.target.classList.remove('btn-default-active');
      this.participants = this.participants.filter(
        (value: Participant) => !value.user.name.startsWith(letter.toLowerCase()) && !value.user.name.startsWith(letter.toUpperCase())
      );
    } else {
      event.target.classList.add('btn-default-active');
      this.participants = this.participants.concat(
        this.programAddService
          .getParticipants()
          .filter(
            (value: Participant) => value.user.name.startsWith(letter.toLowerCase()) || value.user.name.startsWith(letter.toUpperCase())
          )
      );
      this.participants.sort((first: Participant, second: Participant) => first.user.name.localeCompare(second.user.name));
    }
  }

  /**
   * Handles searching observers by the alphabet
   * @param event
   */
  search_by(event: any) {
    this.participants = this.programAddService
      .getParticipants()
      .filter((value: Participant) => value.user.name.includes(event.target.value));
  }

  submit(): void {
    if (this.hasChanged) this.programAddService.saveStep({ participants: this.programParticipants.map((value) => value.id) });
  }
}
