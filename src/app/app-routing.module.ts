import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ChatComponent} from './chat/chat.component';
import {OptionsComponent} from './options/options.component';
import {HomeComponent} from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
	{ path: '', redirectTo: '/home', pathMatch: 'full'},
	{ path: 'home', component: HomeComponent},
	{ path: 'chat', component: ChatComponent},
	{ path: 'options', component: OptionsComponent},
	{ path: 'login', component: LoginComponent},
	{ path: 'sign-up', component: SignUpComponent},
	{ path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { } 
export const routingComponents = [ChatComponent, OptionsComponent, HomeComponent, PageNotFoundComponent, LoginComponent, SignUpComponent]