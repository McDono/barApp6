import { Component, OnInit } from '@angular/core';
// import { Beer } from "./beers/Beer.js";
import * as firebase from 'firebase';
import { UserService } from '../../services/user.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-beers',
  templateUrl: './beers.page.html',
  styleUrls: ['./beers.page.scss'],
})
export class BeersPage implements OnInit {
	public ref;
	beer0 = new Beer(
		"Guiness", "Stout", "4","4", "7", "description",
		"https://www.irishcentral.com/uploads/article/126375/cropped_GUINNESS.jpg?t=1528116858"
	);
	public beers = [ this.beer0 ]

  constructor(private userService: UserService,
							private alertController: AlertController) { }

  ngOnInit() {
		this.getBeers();
  }

	getBeers() {
		this.ref = firebase.database().ref("drinks/beers");
		// this.ref.push(this.beers[0]); //create a new beer into the database
		this.ref.on("value", resp => {
			this.beers = [];
			this.beers = snapshotToArray(resp);
			console.log(this.beers)
		});
	}

	deleteDrink(drink) {
		console.log(drink);
		return firebase.database().ref("drinks/beers/" + drink.key).remove();
		// console.log("Drinks deleted");
	}

	async presentDeleteAlert(drink) {
		// var delete = false;
	 const alert = await this.alertController.create({
		 header: 'Deleting comfirmation',
		 message: 'Are you sure to want to delete this drink <strong>definitively</strong> ?',
		 buttons: [
			 {
				 text: "Cancel",
				 role: "cancel",
				 cssClass: "secondary",
				 handler: () => {
					 console.log("Delete request cancelled");
				 }
			 }, {
				 text: "Delete",
				 cssClass: "primary",
				 handler: () => {
					 // delete = true;
					 this.deleteDrink(drink);
				 }
			 }
		 ]
	 });

	 await alert.present();
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

export class Beer {
	name;
	type;
	alcohol;
	price_250;
	price_500;
	description;
	img;
	constructor(name, type, alcohol, price_250, price_500, description, img) {
		this.name = name;
		this.type = type;
		this.alcohol = alcohol;
		this.price_250 = price_250;
		this.price_500 = price_500;
		this.description = description;
		this.img = img;
	}
}
