import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {HomePage} from '../home/home';
import {SecoesPage} from '../secoes/secoes';
import {FuncoesPage} from '../funcoes/funcoes';
import {EmpresasPage} from '../empresas/empresas';
import {RepositorioService} from '../../providers/repositorio-service';

@Component({
  templateUrl: 'build/pages/menu/menu.html',
  providers : [RepositorioService]
})
export class MenuPage {

  rootPage: any = HomePage;
  home: any = HomePage;
  secoes: any = SecoesPage;
  funcoes: any = FuncoesPage;
  empresas: any = EmpresasPage;

  constructor(private navCtrl: NavController, public rep: RepositorioService) {
  }

  onMenu(page) {
    this.rootPage = page;
  }
}
