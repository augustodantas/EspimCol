import { Component, OnInit } from '@angular/core';
import { ChannelService } from 'src/app/services/channel.service';

@Component({
  selector: 'esm-private-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  cont_event: number = 1;
  constructor(private channel: ChannelService) {
    this.channel.echo.private('program.' + 1).listenForWhisper('typing' + 1, (e: any) => {
      console.log('evento 1', e);
    });
    this.channel.echo.private('program.' + 3).listenForWhisper('typing' + 3, (e: any) => {
      console.log('evento 3', e);
    });
    this.channel.echo.private('program.' + 2).listenForWhisper('typing' + 2, (e: any) => {
      console.log('evento 2', e);
    });
  }

  enviar() {
    this.channel.chanelSend(this.cont_event, 'typing' + this.cont_event, 'Mensagem: ' + this.cont_event);
    this.cont_event++;
    if (this.cont_event > 3) {
      this.cont_event = 1;
    }
  }

  ngOnInit() {}
}
