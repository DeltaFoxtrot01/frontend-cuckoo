import {setHome} from "standard/reducer/StandardMethods.js"
import { httpApi } from "tools/remoteServices/RemoteServices";
import Cookies from 'js-cookie';

export function DefaultHandler(response){
  let token = response.headers["token"];
  httpApi.defaults.headers.common["Authorization"] = token;
  Cookies.set('token',token.substring("Bearer ".length));
}

export function DefaultErrorHandler(error){
  switch (error.response.status){
    case 403:
      setHome();
      break;
    default:
  }
}