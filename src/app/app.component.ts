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

  //    { icon: 'build', url: '/stencil-web-components', title: 'Web Components'}

  showBtn = false;
  deferredPrompt;

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

  ionViewWillEnter() {
    window.addEventListener('beforeinstallprompt', (e) => {
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault();
      // Stash the event so it can be triggered later on the button event.
      this.deferredPrompt = e;

    // Update UI by showing a button to notify the user they can add to home screen
      this.showBtn = true;
    });

    // button click event to show the promt
                 window.addEventListener('appinstalled', (event) => {
     alert('installed');
    });

    if (window.matchMedia('(display-mode: standalone)').matches) {
      alert('display-mode is standalone');
    }
  }

  bgClick() {
    this.menuCtrl.close();
  }

  getAppWidth() {
   if (this.platform.width() > 767) {
      return '225px';
   } else {
     return this.platform.width() + 'px';
   }
  }

  addToHome(e) {
    // hide our user interface that shows our button
    // Show the prompt
    this.deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    this.deferredPrompt.userChoice
      .then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          alert('User accepted the prompt');
        } else {
          alert('User dismissed the prompt');
        }
        this.deferredPrompt = null;
      });
  }
}
