import { DefaultErrorHandler, DefaultHandler } from "tools/DefaultHttpHandler";
import { httpApi } from "tools/remoteServices/RemoteServices"


export class HashService {

  static baseUrl = "/hash"

  /**
   * Adds a patient to the database
   * @param {HashDto} hash 
   */
  static submitPatient(hash){
    return new Promise((resolve,reject) => {
      httpApi.post(this.baseUrl, hash)
      .then(response => {
        DefaultHandler(response);
        resolve();
      })
      .catch(err => {
        DefaultErrorHandler(err);
        reject(err);
      });
    });
  }

  /**
   * Retrieves all the patients 
   */
  static getPatients(){
    return new Promise((resolve, reject) => {
      httpApi.get(this.baseUrl)
      .then(response => {
        DefaultHandler(response);
        resolve(response.data);
      })
      .catch(err => {
        DefaultErrorHandler(err);
        reject(err);
      })
    });
  }

  /**
   * Marks patient as Negative
   */
  static markPatientAsNegative(patient){
    return new Promise((resolve, reject) => {
      httpApi.put(this.baseUrl + "/negative", patient)
      .then(response => {
        DefaultHandler(response);
        resolve();
      })
      .catch(err => {
        DefaultErrorHandler(err);
        reject(err);
      })
    });
  }

  /**
   * Marks patient as Positive
   */
  static markPatientAsPositive(patient){
    return new Promise((resolve, reject) => {
      httpApi.put(this.baseUrl + "/positive", patient)
      .then(response => {
        DefaultHandler(response);
        resolve();
      })
      .catch(err => {
        DefaultErrorHandler(err);
        reject(err);
      })
    });
  }

}