import { ModuleWithProviders, NgModule } from '@angular/core';

import { FocusInput } from './directives/focus-input';
import { FocusInvalidInputDirective } from './directives/focus-invalid-input';

const components = [FocusInvalidInputDirective, FocusInput];

@NgModule({
  declarations: [...components],
  imports: [],
  exports: [...components],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
    };
  }
}
