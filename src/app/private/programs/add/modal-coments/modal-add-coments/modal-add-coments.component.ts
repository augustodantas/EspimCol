import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ChatProgram } from 'src/app/private/models/chat.program.model';

@Component({
  selector: 'esm-modal-add-coments',
  templateUrl: './modal-add-coments.component.html',
  styleUrls: ['./modal-add-coments.component.scss'],
})
export class ModalAddComentsComponent implements OnInit {
  mensagem: string = '';

  messages: ChatProgram[] = [
    { id: 1, user: 'teste 1', date: '10/10/2023', time: '10:20', message: 'Olá mundo cruel e desumano' },
    { id: 2, user: 'teste 2', date: '10/10/2023', time: '10:20', message: 'Olá mundo cruel e desumano' },
    { id: 3, user: 'teste 3', date: '10/10/2023', time: '10:20', message: 'Olá mundo cruel e desumano' },
    { id: 4, user: 'teste 4', date: '10/10/2023', time: '10:20', message: 'Olá mundo cruel e desumano' },
    { id: 5, user: 'teste 5', date: '10/10/2023', time: '10:20', message: 'Olá mundo cruel e desumano' },
    { id: 6, user: 'teste 6', date: '10/10/2023', time: '10:20', message: 'Olá mundo cruel e desumano' },
  ];

  constructor(public bsModalRef: BsModalRef) {}

  ngOnInit(): void {}

  close() {
    this.bsModalRef.hide();
  }

  adicionarComentario() {
    this.mensagem = '';
  }

  apagar(id: number) {
    console.log(id);
  }
}
