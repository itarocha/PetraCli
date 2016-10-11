import {Injectable} from '@angular/core';
//import {SERVER_URL} from './config';
import {Http, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

let favorites = [],
  SERVER_URL = 'https://randomuser.me/api/?results=10';

@Injectable()
export class PeopleService {

  //propertiesURL : string;
  //favoritesURL : string;


    constructor (private http:Http) {
        //this.http = http;
        //this.propertiesURL = SERVER_URL + '/properties',
        //this.favoritesURL = this.propertiesURL + '/favorites';
    }

    load() {
        return this.http.get('https://randomuser.me/api/?results=10')
            .map(res => res.json())
            .catch(this.handleError);
    }

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
