import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'esm-modal-confirm-delete',
  templateUrl: './modal-confirm-delete.component.html',
  providers: [NgbActiveModal],
  styleUrls: ['./modal-confirm-delete.component.scss'],
})
export class ModalConfirmDeleteComponent implements OnInit {
  constructor(public modal: NgbActiveModal) {}

  ngOnInit(): void {}

  cancel(): void {
    // this.response.emit(false);
    // this.bsModalRef.hide();
  }

  confirm(): void {
    // this.response.emit(true);
    // this.bsModalRef.hide();
  }
}
