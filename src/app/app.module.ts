import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './auth/token.interceptor';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './store/reducers/user.reducer';
import { tokenReducer } from './store/reducers/token.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './store/effects/user.effects';
import { UserService } from './services/user.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CounterWrapperComponent } from '../components/counter-wrapper/counter-wrapper';

@NgModule({
  declarations: [AppComponent, CounterWrapperComponent],
  entryComponents: [],
  imports: [
    BrowserModule, HttpClientModule, BrowserAnimationsModule,
    IonicModule.forRoot(),
    StoreModule.forRoot({tokenState: tokenReducer, userState: userReducer}),
    EffectsModule.forRoot([UserEffects]),
    AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    HttpClientModule,
    UserService
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {}
