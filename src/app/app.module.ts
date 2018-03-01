import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TableModule } from 'primeng/table';
import { SliderModule } from 'primeng/slider';
import { ButtonModule } from 'primeng/button';


import { AppComponent } from './app.component';
import { DataService } from './service/service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, FormsModule, BrowserAnimationsModule, HttpClientModule, TableModule, SliderModule, ButtonModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
