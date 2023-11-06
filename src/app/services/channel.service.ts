import { Injectable } from '@angular/core';
import Echo from 'laravel-echo';
import pusher from 'pusher-js';
import { BASE_ESPIM_API, CHANNEL_KEY } from '../app.api';
import { LoginService } from '../security/login/login.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChannelService {
  echo: any;
  sala: string = '';

  constructor(private login: LoginService) {
    const Pusher = pusher;
    this.echo = new Echo({
      broadcaster: 'pusher',
      key: CHANNEL_KEY,
      wsHost: '127.0.0.1',
      wsPort: 6001,
      wssPort: 6001,
      cluster: 'mt1',
      forceTLS: false,
      encrypted: true,
      disableStats: true,
      enabledTransports: ['ws', 'wss'],
      authEndpoint: BASE_ESPIM_API + 'broadcasting/auth',
      auth: {
        headers: {
          Authorization: 'Bearer ' + this.login.accessToken,
        },
      },
    });
    //this.channelListen();
  }

  channelWrite() {
    /* eslint-disable */
    setTimeout(() => {
      this.echo.private('program.1').whisper('typing', {
        message: 'Mensagem Canal 1',
      });
    }, 1000);
    setTimeout(() => {
      this.echo.private('program.2').whisper('typing', {
        message: 'Mensagem Canal 2',
      });
    }, 2000);
  }

  channelListen() {
    this.echo.private('program.1').listenForWhisper('typing', (e: any) => {
      console.log('Canal 1');
      console.log(e);
    });

    this.echo.private('program.2').listenForWhisper('typing', (e: any) => {
      console.log('Canal 2');
      console.log(e);
    });
  }

  chanelSend(canal: number, evento: string, mensagem: any) {
    setTimeout(() => {
      this.echo.private('program.' + canal).whisper(evento, mensagem);
    }, 100);
  }
}
