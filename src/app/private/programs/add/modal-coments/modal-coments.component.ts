import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { ModalAddComentsComponent } from './modal-add-coments/modal-add-coments.component';

@Component({
  selector: 'esm-modal-coments',
  templateUrl: './modal-coments.component.html',
  styleUrls: ['./modal-coments.component.scss'],
})
export class ModalComentsComponent implements OnInit {
  private _modalRef: BsModalRef;

  constructor(private _modalService: BsModalService) {}

  ngOnInit(): void {}

  openModalComents(): void {
    const config: ModalOptions<ModalAddComentsComponent> = {
      ignoreBackdropClick: true,
      initialState: {},
    };

    this._modalRef = this._modalService.show(ModalAddComentsComponent, config);
  }
}
