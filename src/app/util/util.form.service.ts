import { FormGroup } from '@angular/forms';

export class FormUtil {
  static setErrorsBackend(form: FormGroup, response: any): void {
    let errors = response.errors;

    if (response.error && response.message) {
      errors = response.message;
    }

    if (errors) {
      for (const error in errors) {
        if (errors.hasOwnProperty(error)) {
          if (form.get(error)) {
            console.log('teste');
            form.get(error).setErrors({ server: errors[error][0] }, { emitEvent: false });
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
