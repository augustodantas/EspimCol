import { Component, OnInit } from '@angular/core';
import { HistoricProgram } from 'src/app/private/models/historic.program.model';

@Component({
  selector: 'esm-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.scss'],
})
export class HistoricoComponent implements OnInit {
  historic: HistoricProgram[] = [
    { id: 1, order: 1, action: 'Criou alguma coisa', date: '10/10/2023', time: '10:10', user: 'Teste 1' },
    { id: 2, order: 2, action: 'Criou alguma coisa', date: '10/10/2023', time: '10:10', user: 'Teste 2' },
    { id: 3, order: 3, action: 'Criou alguma coisa', date: '10/10/2023', time: '10:10', user: 'Teste 3' },
    { id: 4, order: 4, action: 'Criou alguma coisa', date: '10/10/2023', time: '10:10', user: 'Teste 4' },
    { id: 5, order: 5, action: 'Criou alguma coisa', date: '10/10/2023', time: '10:10', user: 'Teste 5' },
    { id: 6, order: 6, action: 'Criou alguma coisa', date: '10/10/2023', time: '10:10', user: 'Teste 6' },
    { id: 7, order: 7, action: 'Criou alguma coisa', date: '10/10/2023', time: '10:10', user: 'Teste 7' },
    { id: 8, order: 8, action: 'Criou alguma coisa', date: '10/10/2023', time: '10:10', user: 'Teste 8' },
    { id: 9, order: 9, action: 'Criou alguma coisa', date: '10/10/2023', time: '10:10', user: 'Teste 9' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
