import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-cocktails',
  templateUrl: './cocktails.page.html',
  styleUrls: ['./cocktails.page.scss'],
})
export class CocktailsPage implements OnInit {
	public ref;
	cocktail0 = {
		name: "White Russian",
		price: "10",
		description: "drink description",
		img: "https://www.inspiredtaste.net/wp-content/uploads/2011/10/White-Russian-Cocktail-Recipe-1-1200.jpg"

	}
	public cocktails = [ this.cocktail0 ]

  constructor() { }

  ngOnInit() {
		this.getCocktails();
  }

	getCocktails() {
		this.ref = firebase.database().ref("drinks/cocktails");
		// this.ref.push(this.cocktails[0]); //create a new cocktail into the database
		this.ref.on("value", resp => {
			this.cocktails = [];
			this.cocktails = snapshotToArray(resp);
			console.log(this.cocktails)
		});
	}

}

export const snapshotToArray = snapshot => {
	console.log(snapshot)
	let returnArr = [];
	snapshot.forEach(childSnapshot => {
		let item = childSnapshot.val();
		console.log(item);
		item.key = childSnapshot.key;
		returnArr.push(item);
	});
	return returnArr;
};
