import { Component, ElementRef} from '@angular/core'
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
    selector: 'answer-input',
    template: `
    <div class="input-group p-3">
        <input type="text" class="form-control" name="answer" placeholder="Resposta do assistente">
        <div class="input-group-append">
            <button (click)="delete()" class="btn mx-2" type="button"><i class="fas fa-trash-alt"></i></button>
        </div>
    </div>`})

export class AnswerInput {

    constructor(private host: ElementRef<HTMLElement>) {}

    delete() {
        this.host.nativeElement.remove();
    }
}

@Component({
    selector: 'video-answer-input',
    template: `
    <div class="input-group p-3">
        <div class="input-group-prepend">
            <span class='btn mx-2'><i class="fas fa-video"></i></span>
        </div>
        <input type="text" class="form-control" name="answer" placeholder="URl do vídeo resposta">
        <div class="input-group-append">
            <button (click)="delete()" class="btn mx-2" type="button"><i class="fas fa-trash-alt"></i></button>
        </div>
    </div>`})

export class VideoAnswerInput {

    constructor(private host: ElementRef<HTMLElement>) {}

    delete() {
        this.host.nativeElement.remove();
    }
}

@Component({
    selector: 'image-answer-input',
    template: `
    <div class="input-group p-3">
        <input type="file" class="form-control" name="answer" placeholder="Selecione a imagem para a resposta do assistente">
        <div class="input-group-append">
            <button (click)="delete()" class="btn mx-2" type="button"><i class="fas fa-trash-alt"></i></button>
        </div>
    </div>`})

export class ImageAnswerInput {

    constructor(private host: ElementRef<HTMLElement>) {}

    delete() {
        this.host.nativeElement.remove();
    }
}