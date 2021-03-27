import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'esm-modal-confirm-delete',
  templateUrl: './modal-confirm-delete.component.html',
  styleUrls: ['./modal-confirm-delete.component.scss'],
})
export class ModalConfirmDeleteComponent {
  @Input() title: string;
  @Input() object: string;

  @Output() response: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(public bsModalRef: BsModalRef) {}

  cancel(): void {
    this.response.emit(false);
    this.bsModalRef.hide();
  }

  confirm(): void {
    this.response.emit(true);
    this.bsModalRef.hide();
  }
}
