import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import {HubComponent} from './components/hub/hub.component';
import { HomeComponent } from './home/home.component';  // From login tutorial ---MS


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent},
  { path: 'hub', component: HubComponent },
  { path: '**', redirectTo: '' }
  // { path: '', redirectTo: '/login', pathMatch: 'full'}, Commented out Ryan's code to try login tutorial code ---MS
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
// export class AppRoutingModule { } Commented out to try login tutorial code ---MS 
export const routing = RouterModule.forRoot(routes);