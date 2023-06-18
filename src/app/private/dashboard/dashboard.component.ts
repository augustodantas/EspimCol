import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ChannelService } from '../channel_socket/socket.service';

@Component({
  selector: 'esm-private-dashboard',
  templateUrl: './dashboard.component.html',
})

export class DashboardComponent implements OnInit {

  private _subscription$: Subscription;
  
  constructor(private canal : ChannelService) {}

  ngOnInit() {
    this._subscription$ = this.canal.getData$.subscribe((data : any) => {console.log(data)});
  }

}
