/**
 * Data type that represents a message to be displayed
 */

export default class Message{
  constructor(message, type){
    this.message = message;
    this.type = type;
  }

  getMessage(){
    return this.message;
  }

  getType(){
    return this.type;
  }
}