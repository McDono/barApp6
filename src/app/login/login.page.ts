import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from "@ionic/angular";
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

	account = {email: "", password: ""};

	constructor( 	private router: Router, private userService: UserService,
								private toastCtrl: ToastController) { }

	ngOnInit() {
	}

	doLogin() {
		if((this.account.email != "") && (this.account.password != "")) {
			this.userService.signin(this.account.email, this.account.password)
				.then(data => {
					console.log(data);
					this.presentToast("Success.");
					this.router.navigateByUrl("/home");
				})
				.catch(error => {
					console.error(error);
					this.presentToast(error.message);
				});
		} else {
			this.presentToast("Email & password are required");
			return false;
		}
	}

	async presentToast(message) {
		const toast = await this.toastCtrl.create({
			message: message,
			position: "middle",
			duration: 2000
		});
		toast.present();
	}


}
