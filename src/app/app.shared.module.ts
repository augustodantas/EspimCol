import { NgModule } from '@angular/core';
import { FormDirective } from './directives/focus-invalid-input';

const components = [
    FormDirective
];

@NgModule({
  declarations: [...components],
  imports: [
    
  ],
  exports: [...components],
})
export class SharedModule {}
