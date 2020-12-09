
export class Hash{
  constructor(hash){
    if(hash === null){
      this.hashValue = null;
      this.note = null;
      this.id = null;
      this.date = null;
    }
    else{
      this.hashValue = hash["hashValue"];
      this.note = hash["note"];
      this.id = hash["id"];
      this.date = null; //should never receive a date from the backend
    }
  }

  getHashValue(){
    return this.hashValue;
  }

  getNote(){
    return this.note;
  }

  getId(){
    return this.id;
  }

  setDate(date){
    this.date = date;
  }

  getDate(){
    return this.date;
  }
}