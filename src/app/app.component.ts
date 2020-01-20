import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  loadedFeature='recipe';

  ngOnInit(){
    firebase.initializeApp({  
          apiKey: "AIzaSyDeUPwBuqhh1yjBvPSJRwVgwyyGX21I8lE",
    authDomain: "ng-recipe-book-359cc.firebaseapp.com"
    })
  }
  
onNavigate(feature:string){
this.loadedFeature=feature;
}

}
