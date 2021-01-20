import {Component, EventEmitter,Injectable, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Author} from "../author";
import {AuthorService} from "../authot.service";

@Component({
  selector: 'app-add-author',
  templateUrl:'./add-author.component.html',
  styleUrls: ['./add-author.component.css']
})
@Injectable()
export class AddAuthorComponent implements OnInit {

  @Output() public addAuthor:EventEmitter<Author>=new EventEmitter<Author>();

  public addFormGroup:FormGroup;
  hide: any;
  constructor(private AuthorService:AuthorService) {
  }

  ngOnInit() {
    this.addFormGroup=new FormGroup({
      surname:new FormControl(null,{validators:[Validators.required]}),
      name:new FormControl(null,{validators:[Validators.required]}),
      date:new FormControl(null,{validators:[Validators.required]})
    })
  }
  public onSubmit():void{
    const name= this.addFormGroup.value.name;
    const surname= this.addFormGroup.value.surname;
    const date= this.addFormGroup.value.date;
    let author= new Author(name,surname,date);
    this.AuthorService.addAuthor(author);
    this.addFormGroup.reset();
  }

}
