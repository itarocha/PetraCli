import {Component} from '@angular/core';
import {Platform, ionicBootstrap} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {LoginPage} from './pages/login/login';
import {MenuPage} from './pages/menu/menu';
import {TabsPage} from './pages/tabs/tabs';
import {RepositorioService} from './providers/repositorio-service';

//import {Fire} from './util/fire';
//import {enableProdMode} from '@angular/core';

@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>',
})
export class MyApp {

  private rootPage: any;

  constructor(private platform: Platform) {
    ///this.rootPage = LoginPage;

    /*
    if (this.platform.is('ios') || this.platform.is('android')) {
        enableProdMode();
    } else {
      // something else
    }
    */

    this.rootPage = MenuPage;

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}

//ionicBootstrap(MyApp, [], {prodMode: true});
ionicBootstrap(MyApp, [RepositorioService], {
  tabsPlacement: 'bottom'
});
