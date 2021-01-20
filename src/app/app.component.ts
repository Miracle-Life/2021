import {Component, TemplateRef, ViewChild} from '@angular/core';
import {Injectable} from '@angular/core';
import {Author} from './author/author';
import {AuthorService} from './author/authot.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'library';



}
