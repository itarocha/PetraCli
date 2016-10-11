import { Component, ViewChild } from '@angular/core';
import { Page, Alert, NavController, Content } from 'ionic-angular';
import { Storage, LocalStorage } from 'ionic-angular';
//import { PeopleService } from '../../providers/people-service';
import {RepositorioService} from '../../providers/repositorio-service';
import {FuncoesPage} from '../funcoes/funcoes';
import {SecoesService} from '../../service/secoes-service';

@Page({
  templateUrl: 'build/pages/secoes/secoes.html',
  providers: [SecoesService]
})
export class SecoesPage {
   @ViewChild(Content) content: Content;
  public secoes: any;
  showLoading : boolean = false;
  //private repos : RepositorioService;


  constructor(public nav: NavController,
    public rep: RepositorioService,
    private secoesService: SecoesService) {

      this.loadSecoes();
  }

  loadSecoes(){
    this.showLoading = true;
    this.secoesService.getSecoes(this.rep.codemp).subscribe(
      s => this.onLoadSecoes(s),
      err => console.log(err)
    );
  }

  onLoadSecoes(data){
    this.secoes = data;
    this.showLoading = false;
  }


    //this.empresa = "";

    // rep.getValue('codemp',(data) => {
    //   //alert('O valor de empresa é '+data);
    //   //this.empresa = data;
    //   this.getSecoes();
    // });



    //this.initPage();
    //this.loadPeople();

    /*
    this.local.set('codEmpresa','5347').then((value) => {
      //alert(value);
    });
    */
    //this.codEmpresa = rep.getValue('codEmpresa');

    /*
    this.local = new Storage(LocalStorage);
    this.local.get('codEmpresa').then(value => {
      this.codEmpresa = value;
      //alert('O valor restaurado é '+value);
    });
    */




    /*
    this.local.get('codEmpresa').then(token => {
      thislocal.setItem();
    });
    */

/*
    let storage = new Storage(SqlStorage);
      storage.set('name', 'Max');
      storage.get('name').then((value) => {
        this.codEmpresa = value;
    });
    */


    /*
    let local = new Storage(LocalStorage);
    this.codEmpresa = local.get('codEmpresa');
    */

    //this.getPessoas();
    //alert(this.people);
  //}

  navigate(codsec: string, dscsec: string) {
    //this.rootPage = page;
    // Se for para aparecer o botão "<- BACK" use nav.push
    this.nav.push(FuncoesPage,{codsec: codsec, dscsec: dscsec});

    //this.nav.setRoot(FuncoesPage,{codsec: codsec, dscsec: dscsec});
  }


  scrollTo() {
      // set the scrollLeft to 0px, and scrollTop to 500px
      // the scroll duration should take 200ms
      this.content.scrollTo(0, 500, 200);
    }

/*
return new Promise(resolve => {
  this.http.get('data/list.json')
    .subscribe(data => {
      this.unitsInfo = data.json();
      resolve(this.unitsInfo);
    });
*/

  // makeGetRequest(){
  //   this.http.get("https://httpbin.org/ip")
  //   .subscribe(data => {
  //     let alert = Alert.create({
  //       title: "Your IP Address",
  //       subTitle: data.json().origin,
  //       buttons: ["close"]
  //     });
  //     this.nav.present(alert);
  //   }, error => {
  //     console.log(JSON.stringify(error.json()));
  //   });
  // }

  // getSecoes(){
  //   this.http.get("http://stones.petrasistemas.com.br/api/empresas/"+this.rep.codemp+"/secoes")
  //   .subscribe(data => {
  //     this.secoes =  data.json()
  //   }, error => {
  //     console.log(JSON.stringify(error.json()));
  //   });
  // }


  // getPessoas(){
  //   this.http.get("http://stones.petrasistemas.com.br/api/empresas/pessoas")
  //   .subscribe(data => {
  //     this.pessoas =  data.json()
  //   }, error => {
  //     console.log(JSON.stringify(error.json()));
  //   });
  // }

  // makeGetLocalRequest(){
  //   this.http.get("stones.petrasistemas.com.br")
  //   .subscribe(data => {
  //     let alert = Alert.create({
  //       title: "Chamada local",
  //       subTitle: data.json().response,
  //       buttons: ["close"]
  //     });
  //     this.nav.present(alert);
  //   }, error => {
  //     console.log(JSON.stringify(error.json()));
  //   });
  // }
  //
  // makePostRequest(){
  //   this.http.post("https://httpbin.org/post","firstname=Nic")
  //   .subscribe(data => {
  //     let alert = Alert.create({
  //       title: "Data String",
  //       subTitle: data.json().data,
  //       buttons: ["close"]
  //     });
  //     this.nav.present(alert);
  //   }, error => {
  //     console.log(JSON.stringify(error.json()));
  //   });
  // }

  initPage(){

    /*
    //FacebookLogin.getFrie
    this.repos.getValue('codEmpresa', function(data) {
      //this.codEmpresa = 'alfa';
      alert('O tipo é '+typeof(data));

      empresa = 'teste';
    } );
    */
  }

  private loadPeople(){

      /*
      this.peopleService.load().subscribe(
            data => this.people = data
        );
        */
  }

}
