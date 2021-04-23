import { Component, Input, OnInit } from '@angular/core';
import { Event } from 'src/app/private/models/event.model';

@Component({
  selector: 'esm-passive-event',
  templateUrl: './passive-event.component.html',
  styleUrls: ['./passive-event.component.scss', './../step4.component.scss'],
})
export class PassiveEventComponent implements OnInit {
  @Input() event: Event;
  isOpen: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  deleteEvent() {
    // if (this.isAddEvent) {
    //   this.isOpen = !this.isOpen;
    //   this.resetEvent();
    //   return;
    // }
    // new SwalComponent({
    //   title: 'Deletar evento?',
    //   text: `Você tem certeza que deseja deletar ${this.event.getTitle()}?`,
    //   type: 'question',
    //   showCancelButton: true,
    //   confirmButtonText: 'Sim',
    //   cancelButtonText: 'Não',
    // })
    //   .show()
    //   .then((result) => {
    //     if (result.value === true) this.programsAddService.delete_event(this.event.getId());
    //   });
  }

  loadDetail() {
    console.log('carregar');
  }
}
