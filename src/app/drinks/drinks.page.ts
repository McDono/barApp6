import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.page.html',
  styleUrls: ['./drinks.page.scss'],
})
export class DrinksPage implements OnInit {

  constructor(private userService: UserService,
							private router: Router) { }

  ngOnInit() {
  }

	newDrink() {
		this.router.navigateByUrl("/drink-new");
	}

}
