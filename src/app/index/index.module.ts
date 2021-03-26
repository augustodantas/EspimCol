import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule } from '@ngx-translate/core';
import { GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule } from 'angularx-social-login';

import { DAOService } from '../private/dao/dao.service';
import { ObserversService } from '../private/observers/observers.service';
import { SecurityModule } from '../security/security.module';
import { SharedModule } from './../app.shared.module';
import { ComponentsModule } from './../components/components.module';
import { DocumentationComponent } from './documentation/documentation.component';
import { DownloadComponent } from './download/download.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { IndexRoutingModule } from './index-routing.module';
import { IndexComponent } from './index.component';
import { SigninComponent } from './signin/signin.component';
import { TeamComponent } from './team/team.component';
import { TimelineComponent } from './timeline/timeline.component';
import { WorksComponent } from './works/works.component';

//local components
@NgModule({
  imports: [
    CommonModule,
    IndexRoutingModule,
    TranslateModule,
    SecurityModule,
    ComponentsModule,
    ReactiveFormsModule,
    SharedModule,
    BrowserAnimationsModule,
    SocialLoginModule,
  ],
  declarations: [
    IndexComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    WorksComponent,
    DownloadComponent,
    TimelineComponent,
    TeamComponent,
    DocumentationComponent,
    SigninComponent,
  ],
  providers: [
    DAOService,
    ObserversService,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider('465781881543-slrnopuhb3up2d97mlkmvgelgpsqthd0.apps.googleusercontent.com'),
          },
        ],
      } as SocialAuthServiceConfig,
    },
  ],
  exports: [ComponentsModule],
})
export class IndexModule {}
