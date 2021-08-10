import { ModuleWithProviders, NgModule } from '@angular/core';
import { NgxPermissionsModule } from 'ngx-permissions';

import { FocusInput } from './directives/focus-input';
import { FocusInvalidInputDirective } from './directives/focus-invalid-input';

const components = [FocusInvalidInputDirective, FocusInput];

@NgModule({
  declarations: [...components],
  imports: [NgxPermissionsModule],
  exports: [...components],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
    };
  }
}
