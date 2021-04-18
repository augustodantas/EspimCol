import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Observer } from '../../../models/observer.model';
import { Participant } from '../../../models/participant.model';

// This component is used on step2 & step3

@Component({
  selector: 'esm-user-checkbox',
  templateUrl: './user-checkbox.component.html',
})
export class UserCheckBoxComponent implements OnInit {
  @Input() observer: Observer | Participant;
  @Input() checked: boolean;
  @Input() disabled: boolean;

  @Output() removeUser = new EventEmitter<Observer | Participant>();
  @Output() addUser = new EventEmitter<Observer | Participant>();

  constructor() {}

  ngOnInit() {}

  checkboxHandler(checked: boolean) {
    if (checked) this.addUser.emit(this.observer);
    else this.removeUser.emit(this.observer);
  }
}
