import {Component} from '@angular/core';
import {Platform, NavController, Alert} from 'ionic-angular';
//import {BarcodeScanner} from 'ionic-native';
import { Storage, LocalStorage, NavParams } from 'ionic-angular';
import {RepositorioService} from '../../providers/repositorio-service';
import {SecoesPage} from '../secoes/secoes';
import {FuncoesPage} from '../funcoes/funcoes';
import {EmpresasPage} from '../empresas/empresas';

@Component({
  templateUrl: 'build/pages/home/home.html'
  //providers: [RepositorioService]
})
export class HomePage {

  private local : any;
  secoes: any = SecoesPage;
  funcoes: any = FuncoesPage;
  empresas: any = EmpresasPage;

  constructor(private nav: NavController,
    private params: NavParams,
    public rep: RepositorioService,
    private platform: Platform)
  {
    console.log("home.rep.codemp = "+rep.codemp);
    console.log("home.rep.nomemp = "+rep.nomemp);
  }

  onMenu(page) {
    this.nav.setRoot(page);
  }

    //let rep = new RepositorioService();

    ///let codemp = params.get("codemp") || -1;

    // if (codemp != -1){
    //    this.navCtrl.present(Alert.create({
    //        title: "Empresa Selecionada",
    //        subTitle: codemp,
    //        buttons: ["Close"]
    //    }));
    // }


    //rep.setValue('codEmpresa','5347');
    ///rep.setValue('codemp',codemp);
    //rep.setCodEmp(codemp);

    /*
    this.local = new Storage(LocalStorage);
    this.local.set('codEmpresa','5347').then((value) => {
      //alert(value);
    });
    */





  scan() {

    // BarcodeScanner.scan().then((result) => {
    //  // Success! Barcode data is here
    //  this.navCtrl.present(Alert.create({
    //      title: "Resultado da leitura",
    //      subTitle: result.text,
    //      buttons: ["Close"]
    //  }));
    //
    //
    // }, (err) => {
    //     // An error occurred
    // });


    /*
          this.platform.ready().then(() => {
              BarcodeScanner.scan((result) => {
                  this.navCtrl.present(Alert.create({
                      title: "Scan Results",
                      subTitle: result.text,
                      buttons: ["Close"]
                  }));
              }, (error) => {
                  this.navCtrl.present(Alert.create({
                      title: "Attention!",
                      subTitle: error,
                      buttons: ["Close"]
                  }));
              });
          });
          */
      }

  teste(){
    // BarcodeScanner.scan().then((barcodeData) => {
    //  // Success! Barcode data is here
    // }, (err) => {
    //     // An error occurred
    // });
  }
}

/*
<script src="https://www.gstatic.com/firebasejs/3.2.0/firebase.js"></script>
<script>
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCKf6E8yiopBlcRW6UJcLTcY0Ok0_95tJ4",
    authDomain: "itabest-e0701.firebaseapp.com",
    databaseURL: "https://itabest-e0701.firebaseio.com",
    storageBucket: "",
  };
  firebase.initializeApp(config);
</script>
*/
