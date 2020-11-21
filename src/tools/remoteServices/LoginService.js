import { User } from 'tools/models/User';
import {httpApi} from 'tools/remoteServices/RemoteServices';
import Cookies from 'js-cookie';
import {DefaultErrorHandler, DefaultHandler} from 'tools/DefaultHttpHandler';


export class LoginService{

  static baseUrl = "/login"
  
  /**
   * Executes the login
   * @param {User} user 
   */
  static doLogin(user){
    return new Promise((resolve,reject) => {
      httpApi.post(this.baseUrl + '/authenticate', user)
      .then(response => {
        httpApi.defaults.headers.common["Authorization"] = "Bearer " + response.data;
        Cookies.set('token',response.data);
        resolve();
      })
      .catch(error => {
        DefaultErrorHandler(error);
        reject(error);
      });
    });
  }

  /**
   * Cleans up the logout cookie
   * from the browser
   */
  static doLogout(){
    return new Promise((resolve,reject) => {
      if(Cookies.get('token') === undefined){
        reject();
      }
      else{
        Cookies.remove('token');
        resolve();
      }
    });
  }

  /**
   * Retrieves the user information
   */
  static getUserInfo(){
    return new Promise((resolve,reject) => {
      httpApi.get(this.baseUrl + '/userInfo')
      .then(response => {
        DefaultHandler(response);
        resolve(new User(response.data));
      })
      .catch(error => {
        DefaultErrorHandler(error);
        reject(error);
      });
    });
  }
}