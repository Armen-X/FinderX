import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResultComponent } from './result/result.component';

const routes: Routes = [
{ path: '', redirectTo: 'home', pathMatch: 'full'},
{ path: 'home', component: HomeComponent },
{ path: 'home/result', component: ResultComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent]
