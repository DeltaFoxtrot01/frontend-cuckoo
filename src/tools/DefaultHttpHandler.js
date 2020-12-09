import {displayErrorMessage, setHome} from "standard/reducer/StandardMethods.js"
import { httpApi } from "tools/remoteServices/RemoteServices";
import Cookies from 'js-cookie';

export function DefaultHandler(response){
  let token = response.headers["authorization"];
  httpApi.defaults.headers.common["Authorization"] = token;
  Cookies.set('token',token.substring("Bearer ".length));
}

export function DefaultErrorHandler(error){
  if(error.response === undefined || error.response.status === undefined){
    displayErrorMessage("ERROR: an unexpected error occured")
    console.log(error);
    return ;
  }
  switch (error.response.status){
    case 403:
      setHome();
      httpApi.defaults.headers.common["Authorization"] = "";
      Cookies.remove('token');
      break;
    default:
  }
}