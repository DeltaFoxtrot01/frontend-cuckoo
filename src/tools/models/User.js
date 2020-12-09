

export class User{
  
  constructor(user){
    if(user === null){
      this.email = null;
      this.password = null;
      this.firstName = null;
      this.lastName = null;
    }
    else{
      this.email = user["email"];
      this.password = user["password"];
      this.firstName = user["firstName"];
      this.lastName = user["lastName"];
    }
  }

  getEmail(){
    return this.email;
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