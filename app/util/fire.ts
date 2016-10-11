import {Injectable} from '@angular/core';

declare var firebase : any;

@Injectable()
export class Fire {
  user: any = {};

  constructor(){
    var config = {
      apiKey: "AIzaSyCKf6E8yiopBlcRW6UJcLTcY0Ok0_95tJ4",
      authDomain: "itabest-e0701.firebaseapp.com",
      databaseURL: "https://itabest-e0701.firebaseio.com",
      storageBucket: "",
    };

    firebase.initializeApp(config);
  }

  login(token: string, successCallback, errorCallback){
    // firebase.google.com/docs/auth/web/custom-auth
    let credential = firebase.auth.FacebookAuthProvider.credential(token);

    firebase.auth().signInWithCredential(credential).then(response => {
      this.setUser(token, response.providerData[0]);
      successCallback();
    }, error => errorCallback(error));
  }

  private setUser(token: string, authData: any){
    this.user.name = authData.displayName;
    this.user.photo = authData.photoURL;
    this.user.id = authData.uid;
    this.user.token = token;

    this.saveUser();
  }

  private saveUser(){
    firebase.database().ref('users').child(this.user.id).set({
      name: this.user.name,
      photo: this.user.photo
    });
  }
}
