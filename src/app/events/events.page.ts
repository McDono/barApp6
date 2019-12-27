import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {

	public ref;
	event0 = {
		name: "event name",
		date: "25/10/2019",
		description: "event description",
		img: "https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/67589284_1340660116086797_1551290810916405248_n.jpg?_nc_cat=111&_nc_oc=AQny2RqRa9VVGmXApdQlDN9_Xr-HuB-0xTi8Bh92GIGvDGDgeLqEMjZQeUo_wisFoGc&_nc_ht=scontent-dfw5-2.xx&oh=0550b08eb79599ab5485f81ff919c3d8&oe=5E575DCB"
	}
	public events = [ this.event0 ]

  constructor() { }

  ngOnInit() {
		this.getEvents();
  }

	getEvents() {
		this.ref = firebase.database().ref("events");
		// this.ref.push(this.events[0]); //create a new event into the database
		this.ref.on("value", resp => {
			console.log(resp);
			this.events = [];
			this.events = snapshotToArray(resp);
			// console.log(this.events);
			this.events = this.sortEvents(this.events)
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
