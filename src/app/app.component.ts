import { Component } from '@angular/core';
import { Platform, ModalController, MenuController } from '@ionic/angular';
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
    { icon: 'people', url: '/people', title: 'People'}
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menuCtrl: MenuController,
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

  bgClick() {
    console.log('bgClick');
    this.menuCtrl.close();
  }

  getAppWidth() {
   if (this.platform.width() > 767) {
      return '225px';
   } else {
     return this.platform.width() + 'px';
   }
  }
}
