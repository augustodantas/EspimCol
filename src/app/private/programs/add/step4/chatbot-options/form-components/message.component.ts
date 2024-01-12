import { Component, ElementRef, EventEmitter, Output } from '@angular/core'

@Component({
    selector: 'message-input',
    template: `
    <div class="input-group p-3">
        <input type="text" class="form-control" name="message" placeholder="Exemplo de mensagem">
        <div class="input-group-append">
            <button (click)="delete()" class="btn mx-2" type="button"><i class="fas fa-trash-alt"></i></button>
        </div>
    </div>
    `

})export class MessageInput {

    constructor(private host: ElementRef<HTMLElement>) {}


    delete() {
        this.host.nativeElement.remove();
    }
}

