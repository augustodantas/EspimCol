import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { DAOService } from '../dao/dao.service';
import Echo from 'laravel-echo';

@Injectable({
    providedIn: 'root'
  })
export class ChannelService { 
    //Para avisar quando chegar algum dado...
    getData$: Subject<any> = new Subject<any>();
    
    public echo : Echo;



    constructor(private dao : DAOService){ 

        this.echo = new Echo ({
            broadcaster: 'pusher',
            key: 'app-key',
            cluster: 'mt1',
            wsHost: 'ws://localhost/',
            wsPort: 6001,
            disableStats : true,
            enabledTransposts: ['ws']
        })
        console.log(this.echo);
        this.echo.channel('channel-message').listen('MessageEvent', (resp:any) =>{console.log(resp)});
    }
}

