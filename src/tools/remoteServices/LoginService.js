import { User } from 'tools/models/User';
import {httpApi} from 'tools/remoteServices/RemoteServices';


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
        resolve();
      })
      .catch(error => {
        reject(error);
      });
    });
  }

  /**
   * Retrieves the user information
   */
  static getUserInfo(){
    return new Promise((resolve,reject) => {
      httpApi.get(this.baseUrl + '/userInfo')
      .then(response => {
        resolve(new User(response.data));
      })
      .catch(error => {
        reject(error);
      });
    });
  }
}