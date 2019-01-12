import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { StorageServiceModule } from 'ngx-webstorage-service';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//import { LoginModule } from '@app/components/login';
import { LoginPageComponent } from '@app/components/login';
//import { AdminPageComponent } from './app/containers/admin/admin-page/admin-page.component';
//import { PreferencesPageComponent } from './app/containers/preferences/preferences-page/preferences-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent
    //AdminPageComponent,
    //PreferencesPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    ReactiveFormsModule,
    AppRoutingModule,
    StorageServiceModule,
    HttpClientModule,
    //LoginModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
