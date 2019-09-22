import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InitComponent } from './components/init/init.component';
import {StoreModule} from "@ngrx/store";
import {effects, reducers} from "./State/index";
import {HttpService} from "./State/http.service";
import {EffectsModule} from "@ngrx/effects";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {NgHttpLoaderModule} from "ng-http-loader";

@NgModule({
  declarations: [
    AppComponent,
    InitComponent
  ],
  imports: [
    HttpClientModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot(effects),
    StoreDevtoolsModule.instrument({maxAge:50}),
    BrowserModule,
    AppRoutingModule,
    NgHttpLoaderModule.forRoot(),

  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
