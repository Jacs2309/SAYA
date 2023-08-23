import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { Pag1Component } from './components/pag1/pag1.component';
import { Pag2Component } from './components/pag2/pag2.component';
import { PagnotfoundComponent } from './components/pagnotfound/pagnotfound.component';

const routes: Routes = [
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: 'home', component: HomeComponent },
	{ path: 'pag1', component: Pag1Component },
	{ path: 'pag2', component: Pag2Component },
	{ path: '**', component: PagnotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
