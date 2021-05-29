import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { finalize } from 'rxjs/operators';
import { LoaderService } from 'src/app/services/loader.service';

import { ESPIM_REST_Media } from '../../../app.api';
import { DAOService } from '../../dao/dao.service';
import { Media } from '../../models/media';

@Component({
  selector: 'esm-modal-midia',
  templateUrl: './modal-midia.component.html',
  styleUrls: ['./modal-midia.component.scss'],
})
export class ModalMidiaComponent implements OnInit {
  @Output() response: EventEmitter<Media> = new EventEmitter<Media>();

  urlUpload: string = ESPIM_REST_Media;
  file: any = null;
  constructor(
    public bsModalRef: BsModalRef,
    private sanitizer: DomSanitizer,
    private readonly _daoService: DAOService,
    private _loaderService: LoaderService
  ) {}

  ngOnInit(): void {}

  selectFile(event) {
    if (event.target.files.length > 0) {
      let file = event.target.files[0];
      let type = file.type.split('/')[0];

      this.file = {
        type: type,
        file: file,
        url: this.sanitize(URL.createObjectURL(file)),
      };
    } else {
      this.file = null;
    }
  }

  sanitize(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  close() {
    this.bsModalRef.hide();
  }

  uploadFile() {
    const formData: FormData = new FormData();
    formData.append('file', this.file.file);
    this._loaderService.show();
    this._daoService
      .postObject(this.urlUpload, formData)
      .pipe(finalize(() => this._loaderService.hide()))
      .subscribe((resp) => {
        console.log(resp.data);
        this.response.emit(resp.data);
        this.bsModalRef.hide();
      });
  }
}
