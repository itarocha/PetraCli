import {Injectable} from '@angular/core';
//import {SERVER_URL} from './config';
//import {Http, Headers, RequestOptions} from '@angular/http';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

let SERVER_URL = 'http://stones.petrasistemas.com.br';

@Injectable()
export class SecoesService {

    constructor (private http:Http) {
    }

    getSecoes(codemp: number){
      return this.http
        .get(SERVER_URL + "/api/empresas/"+codemp+"/secoes")
        .map(res => res.json())
        .catch(this.handleError);
    }

    handleError(error) {
      console.error(error);
      return Observable.throw(error.json().error || 'Server error');
    }
}
