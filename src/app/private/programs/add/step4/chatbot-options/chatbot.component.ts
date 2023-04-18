import { Component, ComponentFactoryResolver, ComponentRef, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { DAOService } from 'src/app/private/dao/dao.service';
import { ActiveEvent } from 'src/app/private/models/event.model';
import { Intent } from 'src/app/private/models/intent.model';

import { AnswerInput, ImageAnswerInput, VideoAnswerInput } from './form-components/answer.component';
import { IntentCard } from './form-components/intent.component';

@Component({
  selector: 'chatbot',
  templateUrl: './chatbot.component.html'
})
export class ChatbotComponent implements OnInit {
  @Input() event: ActiveEvent = new ActiveEvent();

  isOpen: boolean = false;

  @ViewChild('intents',{static : false, read : ViewContainerRef}) intents: ViewContainerRef | undefined;
   private componentRef: ComponentRef<any> | undefined;

  answer = [AnswerInput]

  intent: Intent = {
    name: '',
    response: [{
      text: '',
      type: 'text'
    }]
  }

  messageList: any = [{
    "text": "",
    "intent": this.intent.name,
    "entities": [],
    "traits": []
  }]

  constructor(private dao: DAOService,private resolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  addIntent(){
    let childComponent = this.resolver.resolveComponentFactory(IntentCard);
    this.componentRef = this.intents!.createComponent(childComponent);
  }

  updateIntent() {
    alert('opa');
  }
}