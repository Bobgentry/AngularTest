import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

import { LoginFormComponent } from './login-form/login-form.component';
import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';
import {SidebarComponent} from './sidebar/sidebar.component';
import { MainPanelComponent } from './mainpanel/mainpanel.component';
import { SignaturePanelComponent } from './signature-panel/signature-panel.component';
import { SignaturePadModule } from 'angular2-signaturepad';
import {SignatureService} from './signature.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthguardGuard } from './authguard.guard';
import { NotfoundComponent } from './notfound/notfound.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ImageCaptureComponent } from './image-capture/image-capture.component';
const appRoutes:Routes = [
  {  path: 'dashboard',
  canActivate: [AuthguardGuard],
   component: DashboardComponent
 },
 {
   path: 'dashboard/:page',
 
   component: DashboardComponent
 },
 {
   path: 'signaturePanel/:page',
   canActivate: [AuthguardGuard],
   component: SignaturePanelComponent
 },

  {
         path: '',
  
   
   component: LoginFormComponent,
 },

  { path: '**', component: DashboardComponent }
 ]; 


@NgModule({
  declarations: [
    MainPanelComponent,    
    DashboardComponent,
    SidebarComponent,
    SignaturePanelComponent,
    AppComponent,
    LoginFormComponent,
    HeaderComponent,
    FooterComponent,
    NotfoundComponent,
    FirstpageComponent,
    ImageCaptureComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SignaturePadModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    // CheckForUpdateService,
    // LogUpdateService,
    // PromptUpdateService,
    UserService,
    AuthguardGuard,
    SignatureService,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
