import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggedInUserService {

  constructor() { }

  getToken() {
    const header = new HttpHeaders({
      'Authorization' : `Bearer ${localStorage.getItem('accessToken')}`
    })
    return header;
  }

  getUserId() {
    return JSON.parse(localStorage.getItem('loggedInUser') as string)._id;
  }
  
  getUserData() {
    return JSON.parse(localStorage.getItem('loggedInUser') as string);
  }
}
