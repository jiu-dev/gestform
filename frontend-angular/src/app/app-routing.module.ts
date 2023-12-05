import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NumbersListComponent } from './numbers-list/numbers-list.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'numbers', component: NumbersListComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
