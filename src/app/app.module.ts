import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AuthorService} from "./author/authot.service";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorComponent } from './author/author.component';
import { GenreComponent } from './genre/genre.component';
import {HttpClient} from "@angular/common/http";
import {HttpClientModule} from "@angular/common/http";
import { FormsModule }   from '@angular/forms';
import { AddAuthorComponent } from './author/add-author/add-author.component';
import { EditAuthorComponent } from './author/edit-author/edit-author.component';
import { ContactComponent } from './author/add-author/contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InfoAuthorComponent } from './author/info-author/info-author.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthorComponent,
    GenreComponent,
    AddAuthorComponent,
    EditAuthorComponent,
    ContactComponent,
    InfoAuthorComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthorService,HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
