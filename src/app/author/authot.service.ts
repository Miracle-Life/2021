import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Author} from './author';

@Injectable({
  providedIn: 'root'
})
export class AuthorService{

  constructor() { }
  private authors:Author[]=[];

  public updateAuthor(): Author[] {
    this.authors=JSON.parse(localStorage.getItem('authors'))||[];
    return this.authors;
  }

  public addAuthor(authors:Author){
    this.authors.push(authors);
    localStorage.setItem('authors',JSON.stringify(this.authors));
  }
  public editAuthor(authors:Author){

  }
  public removeAuthor(id:string){
    this.authors=this.authors.filter(author=>author.id !==id);
    localStorage.setItem('authors',JSON.stringify(this.authors));
  }
}
