import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SearchMuseeComponent} from './search-musee/search-musee.component';

const routes: Routes = [
  {path: 'search', component: SearchMuseeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

