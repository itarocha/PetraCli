import { Component, ViewChild } from '@angular/core';
import { Page, Alert, NavController, Content } from 'ionic-angular';
import { Storage, LocalStorage, NavParams } from 'ionic-angular';
//import { PeopleService } from '../../providers/people-service';
//import {Http} from '@angular/http';
import {RepositorioService} from '../../providers/repositorio-service';
import {FuncoesService} from '../../service/funcoes-service';


@Page({
  templateUrl: 'build/pages/funcoes/funcoes.html',
  providers: [FuncoesService]
})
export class FuncoesPage {
   @ViewChild(Content) content: Content;

  public showLoading : boolean = false;
  public porSecao : boolean = false;

  public funcoes: any;

  public codsec: number;
  public dscsec: string;

  private local : any;
  //private repos : RepositorioService;



  constructor(public nav: NavController,
     public params: NavParams,
       public rep: RepositorioService,
       private funcoesService:FuncoesService/*, private peopleService: PeopleService*/) {
    //this.empresa = "";

    this.codsec = params.get("codsec") || -1000;
    this.dscsec = params.get("dscsec") || "";
    //alert("O parametro enviado foi "+this.parametro);


    if (this.codsec != -1000){
      this.loadFuncoesPorSecao(this.codsec);
    } else {
      this.loadFuncoesPorEmpresa();
    }


    rep.getValue('codemp',(data) => {
      //alert('O valor de empresa é '+data);
      //this.empresa = data;
      //this.getSecoes();
    });
  }

  loadFuncoesPorSecao(codsec: number){
    this.showLoading = true;
    this.porSecao = true;
    this.funcoesService.getFuncoesPorEmpresaSecao(this.rep.codemp, codsec).subscribe(
      f => this.onLoadFuncoes(f),
      err => console.log(err)
    );
  }

  loadFuncoesPorEmpresa(){
    this.showLoading = true;
    this.porSecao = false;
    this.funcoesService.getFuncoesPorEmpresa(this.rep.codemp).subscribe(
      f => this.onLoadFuncoes(f),
      err => console.log(err)
    );
  }

  onLoadFuncoes(data){
    this.funcoes = data;
    this.showLoading = false;
  }




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


    //alert(this.people);

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


  // getSecoes(){
  //   this.http.get("http://stones.petrasistemas.com.br/api/empresas/"+this.rep.codemp+"/secoes")
  //   .subscribe(data => {
  //     this.secoes =  data.json()
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
