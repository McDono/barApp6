import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DrinksPage } from './drinks.page';

const routes: Routes = [
  {
		path: '',
		component: DrinksPage,
		children: [
			{
				path: 'beers',
				children: [
					{
						path: '',
						loadChildren: './beers/beers.module#BeersPageModule'
					}
				]
			},
			{
				path: 'cocktails',
				children: [
					{
						path: '',
						loadChildren: './cocktails/cocktails.module#CocktailsPageModule'
					}
				]
			},
			{
				path: 'shots',
				children: [
					{
						path: '',
						loadChildren: './shots/shots.module#ShotsPageModule'
					}
				]
			},
			{
				path: 'virgins',
				children: [
					{
						path: '',
						loadChildren: './virgins/virgins.module#VirginsPageModule'
					}
				]
			},
			{
				path: '',
				redirectTo: 'beers',
				pathMatch: 'full'
			}
		]
	}
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DrinksPage]
})
export class DrinksPageModule {}
