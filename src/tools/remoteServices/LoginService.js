import { User } from 'tools/models/User';
import {httpApi} from 'tools/remoteServices/RemoteServices';
import Cookies from 'js-cookie';
import {DefaultErrorHandler, DefaultHandler} from 'tools/DefaultHttpHandler';
import { displayErrorMessage, setHome } from 'standard/reducer/StandardMethods';


export class LoginService{

  static baseUrl = "/login"
  
  /**
   * Executes the login
   * @param {User} user 
   */
  static doLogin(user){
    return new Promise((resolve,reject) => {
      Cookies.remove('token');
      httpApi.defaults.headers.common["Authorization"] = "";
      httpApi.post(this.baseUrl + '/authenticate', user)
      .then(response => {
        DefaultHandler(response);
        resolve();
      })
      .catch(err => {
        console.log(err)
        if(err.response === undefined){
          displayErrorMessage("ERROR: an unexpected error occured")
          console.log(err);
          return ;
        }
        reject(err);
      });
    });
  }

  /**
   * Cleans up the logout cookie
   * from the browser
   */
  static doLogout(){
    return new Promise((resolve,reject) => {
      Cookies.remove('token');
      httpApi.defaults.headers.common["Authorization"] = "";
      setHome();
      resolve();
    });
  }

  /**
   * Retrieves the user information
   */
  static getUserInfo(){
    return new Promise((resolve,reject) => {
      httpApi.get(this.baseUrl + '/user-info')
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