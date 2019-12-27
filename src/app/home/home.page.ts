import { Component } from '@angular/core';
import * as firebase from 'firebase';
import { TranslateConfigService } from '../services/translate-config.service';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

	public ref;
	public botm = {
		name: "name_1",
		alcohol: "6",
		type: "lager",
		description: "description bla bla bla",
		price_250: 0,
		price_500: 0,
		img: "nothing bro"
	}
	public nextEve = {
		name: "eve",
		date: "02/11/2021",
		description: "Enter even description here",
		img: "nop"
	}
	selectedLanguage:string;

  constructor(private translateConfigService: TranslateConfigService,
							private userService: UserService) {
		this.getBeerOfTheMonth();
		this.getNextEvent();
		this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
		console.log("this.userService.signedIn : " + this.userService.signedIn);
	}

	getBeerOfTheMonth() {
		this.ref = firebase.database().ref("beer_of_the_month");
		// this.ref.push(this.botm); //create a new beer of the month into the database
		this.ref.on("value", resp => {
			resp.forEach(childSnapshot => {
				let item = childSnapshot.val();
				console.log(item);
				this.botm = item;
			});
		});
	}

	getNextEvent() {
		this.ref = firebase.database().ref("events");
		// this.ref.push(this.nextEve); //create a new beer of the month into the database
		this.ref.on("value", resp => {
			var events = [];
			events = snapshotToArray(resp);
			events = this.sortEvents(events)
			this.nextEve = events[0];
		});
	}

	sortEvents(events) {
		var oldTab = events;
		var newTab = [];
		while (oldTab.length > 0) {
			var nextEvent = oldTab[0];
			for(let i = 1; i < oldTab.length; i++) {
				var dateNextEvent = new Date(nextEvent.date.slice(6), nextEvent.date.slice(3,5)-1, nextEvent.date.slice(0,2));
				var dateCompared = new Date(oldTab[i].date.slice(6), oldTab[i].date.slice(3,5)-1, oldTab[i].date.slice(0,2));
				if (dateCompared < dateNextEvent) {
					nextEvent = oldTab[i];
				}
			}
			newTab.push(nextEvent);
			oldTab.splice(oldTab.indexOf(nextEvent), 1);
		}
		return newTab;
	}

	languageChanged(){
    this.translateConfigService.setLanguage(this.selectedLanguage);
  }



}

export const snapshotToArray = snapshot => {
	// console.log(snapshot)
	let returnArr = [];
	snapshot.forEach(childSnapshot => {
		let item = childSnapshot.val();
		// console.log(item);
		item.key = childSnapshot.key;
		returnArr.push(item);
	});
	// console.log(returnArr);
	return returnArr;
};
