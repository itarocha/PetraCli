import {Injectable} from '@angular/core';
//import {SERVER_URL} from './config';
//import {Http, Headers, RequestOptions} from '@angular/http';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

let SERVER_URL = 'http://stones.petrasistemas.com.br';

@Injectable()
export class FuncoesService {

    constructor (private http:Http) {
    }

    getFuncoesPorEmpresa(codemp: number){
      return this.http
        .get(SERVER_URL + "/api/empresas/"+codemp+"/funcoes")
        .map(res => res.json())
        .catch(this.handleError);
    }

    getFuncoesPorEmpresaSecao(codemp: number, codsec: number){
      return this.http
        .get(SERVER_URL + "/api/empresas/"+codemp+"/"+codsec+"/funcoes")
        .map(res => res.json())
        .catch(this.handleError);
    }

    handleError(error) {
      console.error(error);
      return Observable.throw(error.json().error || 'Server error');
    }
}
