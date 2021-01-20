import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthorComponent} from "./author/author.component";
import {GenreComponent} from "./genre/genre.component";
import {AddAuthorComponent} from "./author/add-author/add-author.component";
import {EditAuthorComponent} from "./author/edit-author/edit-author.component";
import {InfoAuthorComponent} from "./author/info-author/info-author.component";
// const itemAuthor: Routes = [
//   { path: 'add-author', component: AddAuthorComponent},
//   { path: 'edit-author', component: EditAuthorComponent},
// ];
// const itemBook: Routes = [
//   { path: 'add-author', component: AddAuthorComponent},
//   { path: 'edit-author', component: EditAuthorComponent},
// ];


const routes: Routes = [
  {path: 'author', component: AuthorComponent,},
  {path: 'genre', component: GenreComponent},
  {path: 'add-author', component: AddAuthorComponent},
  {path: 'edit-author', component: EditAuthorComponent},
  {path: 'info-author', component: InfoAuthorComponent},

  {path: '**', component: AuthorComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
