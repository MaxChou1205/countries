import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MymatModule } from './mymat.module';
import { CountryComponent } from './country/country.component';
import { ModalInfoComponent } from './modal-info/modal-info.component';

@NgModule({
  declarations: [AppComponent, CountryComponent, ModalInfoComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MymatModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
