import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { InputValidationsComponent } from './input-validations/input-validations.component';
import { ModalConfirmDeleteComponent } from './modal-confirm-delete/modal-confirm-delete.component';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';

@NgModule({
  declarations: [InputValidationsComponent, SplashScreenComponent, ModalConfirmDeleteComponent],
  imports: [CommonModule],
  exports: [InputValidationsComponent, SplashScreenComponent, ModalConfirmDeleteComponent],
})
export class ComponentsModule {}
