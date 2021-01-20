
export class Author {
  constructor(
    public surname:string,
    public name:string,
    public date:string,
    public id?:string
  ) {
    this.id=''+Math.random().toString(36).substr(2,9)
  }
}
