import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';


@Injectable({
  providedIn: 'root'
})
export class UserService {
	public signedIn = false;
	constructor(private router: Router) {
		firebase.auth().onAuthStateChanged((user: firebase.User) => {
			if (user) {
				console.log("User is logged in");
				this.signedIn = true;
				this.router.navigateByUrl("/home");
			} else {
				console.log("User is not logged in");
				this.signedIn = false;
				// this.router.navigateByUrl("/login");
			}
		});
	}

	// signup(email, password) {
	// 	return firebase.auth().createUserWithEmailAndPassword(email, password);
	// }

	signin(email, password) {
		return firebase.auth().signInWithEmailAndPassword(email, password);
	}

	signout() {
		return firebase.auth().signOut();
	}

	currentUser() {
		return firebase.auth().currentUser;
	}
}
