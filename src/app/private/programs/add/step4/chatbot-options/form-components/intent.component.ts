import { TemplateRef, Component, ComponentFactoryResolver, ComponentRef, ElementRef, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { CHATBOT_URL } from 'src/app/app.api';
import { DAOService } from 'src/app/private/dao/dao.service';
import { ActiveEvent } from 'src/app/private/models/event.model';
import { Intent } from 'src/app/private/models/intent.model';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { AnswerInput, ImageAnswerInput, VideoAnswerInput } from './answer.component';
import { MessageInput } from './message.component';

@Component({
  selector: 'intent',
  templateUrl: './intent.component.html',
}) export class IntentCard {

  isOpen: boolean = true;
  modalRef?: BsModalRef;

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

  constructor(private dao: DAOService,private resolver: ComponentFactoryResolver,private host: ElementRef<HTMLElement>,private modalService: BsModalService) { }

    openModal(template: TemplateRef<any>) {
      this.modalRef = this.modalService.show(template);
    }

    ngOnInit(): void {
      throw new Error('Method not implemented.');
    }

    delete() {
        this.host.nativeElement.remove();
    }

    addNewMessage(){
      let childComponent = this.resolver.resolveComponentFactory(MessageInput);
      this.componentRef = this.messages!.createComponent(childComponent);
    }
  
    addNewAnswer(type:string){
      let childComponent;
      
      if(type == 'video'){
        childComponent = this.resolver.resolveComponentFactory(VideoAnswerInput);
      }else if(type == 'img'){
        childComponent = this.resolver.resolveComponentFactory(ImageAnswerInput);
      }else{
        childComponent = this.resolver.resolveComponentFactory(AnswerInput);
      }  
      
      this.componentRef = this.answers!.createComponent(childComponent);
    }
  
    updateIntent() {
      this.dao.postObject(CHATBOT_URL + 'intent', { "name": this.intent.name }).subscribe()
      this.dao.postObject(CHATBOT_URL + 'addJson', this.intent).subscribe()
      this.dao.postObject(CHATBOT_URL + 'train', this.messages).subscribe()
    }
}