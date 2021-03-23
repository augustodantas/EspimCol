import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { InputValidationsComponent } from './input-validations/input-validations.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    InputValidationsComponent,
    SplashScreenComponent
  ],
  imports: [CommonModule],
  exports: [InputValidationsComponent, SplashScreenComponent],
})
export class ComponentsModule {}
