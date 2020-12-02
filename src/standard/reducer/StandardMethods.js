import store from "tools/redux/Store";
import { standardClearMessages, standardDisplayMesssage, standardSetHome } from "standard/reducer/StandardActions";


/**
 * Sets the screen to load
 */
export function setHome(){
  store.dispatch(
    standardSetHome()
  );
}

/**
 * Displays a SnackBar with a specific message 
 * @param {*} message 
 */
export function displayInfoMessage(message){
  store.dispatch(
    standardDisplayMesssage(message,"info")
  );
}

export function displaySuccessMessage(message){
  store.dispatch(
    standardDisplayMesssage(message,"success")
  );
}

export function displayWarningMessage(message){
  store.dispatch(
    standardDisplayMesssage(message,"warning")
  );
}

export function displayErrorMessage(message){
  store.dispatch(
    standardDisplayMesssage(message,"error")
  );
}

export function clearMessages(){
  store.dispatch(
    standardClearMessages()
  );
}