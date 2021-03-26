import { Component, OnInit, Output } from '@angular/core';
import * as EventEmitter from 'events';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'esm-modal-confirm-delete',
  templateUrl: './modal-confirm-delete.component.html',
  styleUrls: ['./modal-confirm-delete.component.scss'],
})
export class ModalConfirmDeleteComponent implements OnInit {
  @Output() response: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(public bsModalRef: BsModalRef) {}

  ngOnInit(): void {}

  cancel(): void {
    this.response.emit(false);
    this.bsModalRef.hide();
  }

  confirm(): void {
    this.response.emit(true);
    this.bsModalRef.hide();
  }
}
