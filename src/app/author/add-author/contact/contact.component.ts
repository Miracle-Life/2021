import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Author} from "../../author";
import {AuthorService} from "../../authot.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @Input() public author:Author;
  @Output() remove= new EventEmitter()
  constructor(private AuthorService:AuthorService) {
  }
  ngOnInit(): void {
  }
  public removeAuthor(){
    this.AuthorService.removeAuthor(this.author.id);
    this.remove.emit();
  }


}
