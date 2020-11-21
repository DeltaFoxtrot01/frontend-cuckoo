/**
 * In order to add new http methods, create a new folder with a new class
 * and folder (called dto) and add your methods there (inside a class with 
 * static methods). use the declared httpApi to make requests.
 * 
 * THIS FILE IS ONLY FOR DEFAULT CONFIGURATIONS/METHODS
 */
import axios from 'axios';
import Cookies from 'js-cookie';
import {DefaultErrorHandler} from 'tools/DefaultHttpHandler';

export const httpApi = axios.create();
httpApi.defaults.baseURL = process.env.REACT_APP_ROOT_API;
httpApi.defaults.timeout = 20000;
//default headers
httpApi.defaults.headers.post["Content-Type"] = 'application/json';

if(Cookies.get('token') !== undefined){
  httpApi.defaults.headers.common["Authorization"] = "Bearer " + Cookies.get('token');
}

export class GeneralRemoteServices{
  
  static healthcheck(){
    return new Promise((resolve,reject) => {
      httpApi.get('api/healthcheck')
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        DefaultErrorHandler(error);
        reject(error);
      });
    });
  }

}
