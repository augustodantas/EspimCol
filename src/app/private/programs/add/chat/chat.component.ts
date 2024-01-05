import { Component, OnInit } from '@angular/core';
import { ChatProgram } from 'src/app/private/models/chat.program.model';

@Component({
  selector: 'esm-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  messages: ChatProgram[] = [
    { id: 1, user: 'teste 1', date: '10/10/2023', time: '10:20', message: 'Olá mundo cruel e desumano' },
    { id: 2, user: 'teste 2', date: '10/10/2023', time: '10:20', message: 'Olá mundo cruel e desumano' },
    { id: 3, user: 'teste 3', date: '10/10/2023', time: '10:20', message: 'Olá mundo cruel e desumano' },
    { id: 4, user: 'teste 4', date: '10/10/2023', time: '10:20', message: 'Olá mundo cruel e desumano' },
    { id: 5, user: 'teste 5', date: '10/10/2023', time: '10:20', message: 'Olá mundo cruel e desumano' },
    { id: 6, user: 'teste 6', date: '10/10/2023', time: '10:20', message: 'Olá mundo cruel e desumano' },
  ];

  mensagem: string = '';

  constructor() {}

  ngOnInit(): void {}

  enviarChat() {
    this.mensagem = '';
  }
}
