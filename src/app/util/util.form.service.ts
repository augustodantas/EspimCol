import { FormGroup } from '@angular/forms';

export class FormUtil {
  static setErrorsBackend(
    form: FormGroup,
    response: any
  ): void {
    if (response.errors) {
      for (const error in response.errors) {
        if (response.error_list.hasOwnProperty(error)) {
          if (form.get(error)) {
            form
              .get(error)
              .setErrors(
                { server: response.errors[error][0] },
                { emitEvent: false }
              );
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
