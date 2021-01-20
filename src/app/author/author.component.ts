import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {Author} from "./author";
import {AuthorService} from "./authot.service";

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  constructor(public AuthorService:AuthorService) {
  }
  ngOnInit() {
    this.updateAuthor();
  }
  public authors:Author[]=[];

  public filter(e:KeyboardEvent):void{
    const value=(e.target as HTMLInputElement).value.toLocaleLowerCase();
    if (value){
      this.authors=this.authors.filter(author=>(
        author.name.toLocaleLowerCase().includes(value)||
        author.surname.toLocaleLowerCase().includes(value)||
        author.date.toLocaleLowerCase().includes(value))
      );
    }
    else {
      this.updateAuthor();
    }
  }
  public updateAuthor():void{
    this.authors=this.AuthorService.updateAuthor();
  }
}
