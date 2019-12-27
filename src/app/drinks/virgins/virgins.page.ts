import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-virgins',
  templateUrl: './virgins.page.html',
  styleUrls: ['./virgins.page.scss'],
})
export class VirginsPage implements OnInit {
	public ref;
	virgin0 = {
		name: "Coca-Cola",
		price: "2.50",
		description: "drink description",
		img: "https://hypescience.com/wp-content/uploads/2018/04/cola-drinks-addiction.jpg"

	}
	public virgins = [ this.virgin0 ]

	constructor() { }

	ngOnInit() {
		this.getVirgins();
	}

	getVirgins() {
		this.ref = firebase.database().ref("drinks/virgins");
		// this.ref.push(this.virgins[0]); //create a new virgin into the database
		this.ref.on("value", resp => {
			this.virgins = [];
			this.virgins = snapshotToArray(resp);
			console.log(this.virgins)
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
