import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-drink-new',
  templateUrl: './drink-new.page.html',
  styleUrls: ['./drink-new.page.scss'],
})
export class DrinkNewPage implements OnInit {

	newDrink = {
		type: "",
		name: "",
		description: "",
		img: "",
		alcohol: 0,
		isAlcohol: false,
		price: 0,
		price_250: 0,
		price_500: 0,
		beer_type: ""
	};

  constructor(private router: Router) { }

  ngOnInit() {

  }

	ionViewWillEnter() {
		var form = document.querySelector("form");
		form.addEventListener("submit", (e) => {
			e.preventDefault();
			console.log("Form submitted");
			this.addDrink()
			this.router.navigateByUrl("/drinks/" + this.newDrink.type + "s");
		});
	}

	drinkTypeSelected() {
		console.log(this.newDrink.type);
		if (this.newDrink.type == "virgin")
			this.newDrink.isAlcohol = false;
		else
			this.newDrink.isAlcohol = true;
	}

	addDrink() {
		if(this.newDrink.type != "") {
		var refLink = "drinks/" + this.newDrink.type + "s";
		var ref = firebase.database().ref(refLink);
		ref.push(this.newDrink);
	} else
		console.log("Please select a drink type");
	}



}
