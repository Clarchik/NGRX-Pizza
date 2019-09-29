import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';

import { AppComponent } from './app.component';

import { reducers, CustomSerializer, effects } from './store';
import { environment } from '../environments/environment';



@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        StoreRouterConnectingModule.forRoot(),
        StoreModule.forRoot(reducers),
        EffectsModule.forRoot(effects),
        !environment.production ? StoreDevtoolsModule.instrument() : [],
    ],
    providers: [
        { provide: RouterStateSerializer, useClass: CustomSerializer }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
