import { FormGroup } from '@angular/forms';

export class FormUtil {
  static setErrorsBackend(form: FormGroup, response: any): void {
    if (response.data.errors) {
      for (const error in response.data.errors) {
        if (response.data.errors.hasOwnProperty(error)) {
          if (form.get(error)) {
            form.get(error).setErrors({ server: response.data.errors[error][0] }, { emitEvent: false });
          } else {
            // response.error_list[error].forEach((msg) =>
            //   toastr.error(msg, `Campo: ${error}`)
            // );
          }
        }
      }
    }
  }
}
