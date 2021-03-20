import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import * as moment from 'moment';
import { NgbDate, NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
import { Injectable } from "@angular/core";

@Injectable()
export class SwallAlertService {
    success(titleInput: string, textInput: string): SwalComponent {
        return new SwalComponent({
            title: titleInput,
            text: textInput,
            type: 'success',
            focusCancel: true
          });
    }
}
