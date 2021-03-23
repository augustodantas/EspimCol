import { ErrorHandlerInterceptor } from './interceptors/error-handler.interceptor';
import { ComponentsModule } from './components/components.module';
import { LoaderService } from './services/loader.service';
import { JsonDateInterceptor } from './interceptors/json-date.interceptor';
import { SwallAlertService } from './util/util.swall.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler, InjectionToken, ModuleWithProviders } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TranslateLoader, TranslateModule, MissingTranslationHandler, MissingTranslationHandlerParams } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// local modules
import { IndexModule } from './index/index.module';
import { SecurityModule } from './security/security.module';
import { LoggedInGuard } from './security/loggedin.guard';
import { AuthInterceptor } from './security/auth.interceptor';
import { ApplicationErrorHandler } from './app.error-handler';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// tslint:disable-next-line:class-name
export class missingTranslationHandler implements MissingTranslationHandler {
  handle(params: MissingTranslationHandlerParams) {
    throw new Error(`No translation for ${params.key} available`);
  }
}

const providers = [
  LoaderService
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // imports modules
    BrowserModule,
    ComponentsModule,
    AppRoutingModule,
    IndexModule,
    SecurityModule,
    // configure the imports
    NgbModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: { provide: TranslateLoader, useFactory: HttpLoaderFactory, deps: [HttpClient] },
      missingTranslationHandler: { provide: MissingTranslationHandler, useClass: missingTranslationHandler }
    }),
    [SweetAlert2Module.forRoot()],
    BrowserAnimationsModule
  ],
  exports: [TranslateModule, ComponentsModule],
  providers: [
    // import services
    LoggedInGuard,
    SwallAlertService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JsonDateInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHandlerInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  static forRoot(): ModuleWithProviders<AppModule> {
    return {
      ngModule: AppModule,
      providers,
    };
  }
}


// required for AOT (ahead of time) compilation


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
