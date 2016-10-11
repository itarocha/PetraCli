import {Injectable} from '@angular/core';
//import {SERVER_URL} from './config';
//import {Http, Headers, RequestOptions} from '@angular/http';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

let SERVER_URL = 'http://stones.petrasistemas.com.br';

@Injectable()
export class EmpresasService {

    constructor (private http:Http) {
    }

    getEmpresas(codusu: number){
      return this.http
        .get(SERVER_URL + "/api/empresas/config/"+codusu+"/empresas")
        .map(res => res.json())
        .catch(this.handleError);
    }

    // getEmpresasOld(codusu: number){
    //   let empresas : any;
    //
    //   this.http.get(SERVER_URL + "/api/empresas/config/"+codusu+"/empresas")
    //   .subscribe(data => {
    //     empresas =  data.json()
    //   }, error => {
    //     console.log(JSON.stringify(error.json()));
    //   });
    // }
    //

    /*
    favorite(property) {
        let body = JSON.stringify(property);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(favoritesURL, body, options)
            .map(res => res.json())
            .catch(this.handleError);
    }
    */

    handleError(error) {
      console.error(error);
      return Observable.throw(error.json().error || 'Server error');
    }

}
