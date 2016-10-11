import {Injectable} from '@angular/core';
//import {SERVER_URL} from './config';
//import {Http, Headers, RequestOptions} from '@angular/http';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

let SERVER_URL = 'http://stones.petrasistemas.com.br';

@Injectable()
export class FuncionariosService {

    constructor (private http:Http) {
    }

    getFuncionariosPorEmpresa(codemp: number){
      return this.http
        .get(SERVER_URL + "/api/empresas/"+codemp+"/funcionarios")
        .map(res => res.json())
        .catch(this.handleError);
    }

    getFuncionariosPorEmpresaSecao(codemp: number, codsec: number){
      return this.http
        .get(SERVER_URL + "/api/empresas/"+codemp+"/"+codsec+"/funcionarios")
        .map(res => res.json())
        .catch(this.handleError);
    }

    getFuncionariosPorEmpresaSecaoFuncao(codemp: number, codsec: number, codprf: number){
      return this.http
        .get(SERVER_URL + "/api/empresas/"+codemp+"/"+codsec+"/"+codprf+"/funcionarios")
        .map(res => res.json())
        .catch(this.handleError);
    }

    handleError(error) {
      console.error(error);
      return Observable.throw(error.json().error || 'Server error');
    }
}
