import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'
import {HttpClientModule,HttpClient} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoxComponent } from './box/box.component';
import { CountryselectComponent } from './countryselect/countryselect.component';

@NgModule({
  declarations: [
    AppComponent,
    BoxComponent,
    CountryselectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
