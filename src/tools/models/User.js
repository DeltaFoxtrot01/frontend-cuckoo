

export class User{
  
  constructor(user){
    if(user === null){
      this.username = null;
      this.password = null;
      this.firstName = null;
      this.lastName = null;
    }
    else{
      this.username = user["username"];
      this.password = user["password"];
      this.firstName = user["firstName"];
      this.lastName = user["lastName"];
    }
  }

  getUsername(){
    return this.username;
  }

  getPassword(){
    return this.password;
  }

  getFirstName(){
    return this.firstName;
  }

  getLastName(){
    return this.lastName;
  }
}