import { Component, ComponentFactoryResolver, ComponentRef, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { CHATBOT_URL } from 'src/app/app.api';
import { DAOService } from 'src/app/private/dao/dao.service';
import { ActiveEvent } from 'src/app/private/models/event.model';
import { Intent } from 'src/app/private/models/intent.model';

import { AnswerInput, ImageAnswerInput, VideoAnswerInput } from './form-components/answer.component';
import { MessageInput } from './form-components/message.component';

@Component({
  selector: 'chatbot',
  templateUrl: './chatbot.component.html'
})
export class ChatbotComponent implements OnInit {
  @Input() event: ActiveEvent = new ActiveEvent();

  isOpen: boolean = false;

  @ViewChild('messages',{static : false, read : ViewContainerRef}) messages: ViewContainerRef | undefined;
  @ViewChild('answers',{static : false, read : ViewContainerRef}) answers: ViewContainerRef | undefined;
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

  addNewMessage(){
    let childComponent = this.resolver.resolveComponentFactory(MessageInput);
    this.componentRef = this.messages!.createComponent(childComponent);
  }

  addNewAnswer(){
    let childComponent = this.resolver.resolveComponentFactory(VideoAnswerInput);
    //let childComponent = this.resolver.resolveComponentFactory(ImageAnswerInput);

    //let childComponent = this.resolver.resolveComponentFactory(AnswerInput);
    this.componentRef = this.answers!.createComponent(childComponent);
  }

  updateIntent() {
    this.dao.postObject(CHATBOT_URL + 'intent', { "name": this.intent.name }).subscribe()
    this.dao.postObject(CHATBOT_URL + 'addJson', this.intent).subscribe()
    this.dao.postObject(CHATBOT_URL + 'train', this.messages).subscribe()
  }
}