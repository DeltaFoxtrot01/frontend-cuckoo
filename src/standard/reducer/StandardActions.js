/**
 * Store action definitions
 */

import Message from "standard/dto/Message";

export function standardSetHome() {
  return {
    type: "STANDARD_CHANGE_HOME"
  };
}

export function standardDisplayMesssage(message, type){
  return {
    type: "STANDARD_NOTIFICATION",
    message: new Message(message,type)
  };
}

export function standardClearMessages(){
  return {
    type: "STANDARD_DISPLAY_MESSAGE_OFF"
  };
}
