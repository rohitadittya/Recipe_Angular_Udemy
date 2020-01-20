import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    token:string;

    constructor(private router:Router){}

    signupUser(email: string, password: string) {
        firebase.auth().createUserWithEmailAndPassword(email, password) // here the auth() method is firebase method which handles authentication
            .catch(   //here .createUserWithEmailAndPassword(email,password) is method in auth() which generally helps in creating user with uname and password
                (error) => console.log(error),
            )
    }

    signinUser(email:string, password:string){
        firebase.auth().signInWithEmailAndPassword(email,password) //this is a promise
        .then(
            // response=>console.log(response)
            response=>{
                this.router.navigate(['/']);
                firebase.auth().currentUser.getIdToken()
                .then(
                    (token:string)=>this.token=token
                )
            }
        )  
        .catch(
            error=>console.log(error)
        );
    }

    getToken(){
        firebase.auth().currentUser.getIdToken()
        .then(
            (token:string)=>this.token=token
        );
        return this.token;
    }
    
    isAuthenticated(){
        return this.token != null;
    }

    logout(){
        firebase.auth().signOut();
        this.token=null;
    }
}