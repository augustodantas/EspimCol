import { Component, OnInit } from '@angular/core';
import { ChannelService } from '../services/channel.service';

@Component({
  selector: 'esm-private',
  templateUrl: './private.component.html',
})
export class PrivateComponent implements OnInit {
  constructor(private channel: ChannelService) {
    console.log('Ouvindo');
    this.channel.channelListen();
  }

  ngOnInit() {}
}
