import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class SwalService {
  warning(
    message: string = 'Essa ação não poderá ser desfeita',
    title: string = 'Atenção!',
    confirmButton: string = 'success',
    showCancelButton: boolean = true
  ): Promise<any> {
    return Swal.fire({
      title: title,
      html: message,
      icon: 'warning',
      showCancelButton: showCancelButton,
      reverseButtons: true,
      cancelButtonText: 'NÃO',
      confirmButtonText: 'SIM',
      customClass: {
        confirmButton: `btn btn-lg btn-${confirmButton} btn-shadow`,
        cancelButton: 'btn btn-lg btn-secondary btn-shadow mr-4',
      },
      buttonsStyling: false,
    });
  }

  error(message: string = 'Ocorreu um erro ao realizar essa ação', title: string = 'Erro!'): Promise<any> {
    return Swal.fire({
      title: title,
      html: message,
      icon: 'error',
      confirmButtonText: 'OK',
      buttonsStyling: false,
      customClass: {
        confirmButton: `btn btn-lg btn-success btn-shadow`,
      },
    });
  }

  success(message: string = 'Ação realizada com sucesso', title: string = 'Sucesso!'): Promise<any> {
    return Swal.fire({
      title: title,
      text: message,
      icon: 'success',
      confirmButtonText: 'OK',
    });
  }

  confirmDelete(message: string = 'Essa ação não poderá ser desfeita', title: string = 'Atenção!'): Promise<any> {
    return this.warning(
      'Você tem certeza que deseja deletar <strong class="d-block mt-2">' + message + '</strong>',
      'Deletar ' + title,
      'danger'
    );
  }

  showFormErrors(title: string, errors: string[]) {
    let errorList = '<ul>';

    Object.keys(errors).forEach((key) => {
      errorList += `<li class="font-size-md">${errors[key]} </li>`;
    });

    errorList += '</ul>';
    return this.error(errorList, title);
  }

  showFieldErrors(title: string, errors: any[]) {
    let errorList = '<ul>';

    errors.forEach((error) => {
      errorList += `<li class="font-size-sm"><span class="font-weight-bold">${error.field}</span>: ${error.message} </li>`;
    });

    errorList += '</ul>';
    return this.error(errorList, title);
  }
}
