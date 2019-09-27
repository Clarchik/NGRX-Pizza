import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {Routes, RouterModule} from '@angular/router';
import {StoreModule} from '@ngrx/store';
import {reducers, metaReducers} from './reducers';
import {EffectsModule} from '@ngrx/effects';
import {AppEffects} from './app.effects';
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {environment} from '../environments/environment';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

export const ROUTES: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'products'},
    {
        path: 'products',
        loadChildren: '../products/products.module#ProductsModule',
    },
];

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireDatabaseModule,
        RouterModule.forRoot(ROUTES),
        StoreModule.forRoot(reducers, {
            metaReducers,
            runtimeChecks: {
                strictStateImmutability: true,
                strictActionImmutability: true
            }
        }),
        StoreDevtoolsModule.instrument(),
        EffectsModule.forRoot([AppEffects]),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
