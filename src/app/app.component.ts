import { Component } from '@angular/core';
import { Platform, ModalController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public isLoggedIn = false;

  public appPages: any[] = [
    { icon: 'analytics', url: '/dash', title: 'Dashboard'},
    { icon: 'settings', url: '/settings', title: 'Settings'}
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private store: Store<any>
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.store.subscribe(data => {
        if (!!data.tokenState && !!data.tokenState.token && data.tokenState.token !== undefined) {
          this.isLoggedIn = true;
        }
      });
    });
  }
}
