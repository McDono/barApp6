import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-shots',
  templateUrl: './shots.page.html',
  styleUrls: ['./shots.page.scss'],
})
export class ShotsPage implements OnInit {
	public ref;
	shot0 = {
		name: "Monkey Brain",
		price: "3",
		description: "drink description",
		img: "https://static.wixstatic.com/media/caa9e2_d998885d35134be88e74cde4a00ec42b~mv2_d_1600_2244_s_2.jpg/v1/fill/w_640,h_898,al_c,q_85,usm_0.66_1.00_0.01/caa9e2_d998885d35134be88e74cde4a00ec42b~mv2_d_1600_2244_s_2.webp"

	}
	public shots = [ this.shot0 ]

	constructor() { }

	ngOnInit() {
		this.getShots();
	}

	getShots() {
		this.ref = firebase.database().ref("drinks/shots");
		// this.ref.push(this.shots[0]); //create a new shot into the database
		this.ref.on("value", resp => {
			this.shots = [];
			this.shots = snapshotToArray(resp);
			console.log(this.shots)
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
