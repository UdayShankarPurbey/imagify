import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { backendEndPoints } from '../../core/endpoints';
import { LoggedInUserService } from '../logged-in-user/logged-in-user.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http : HttpClient,
    private loggedUserService : LoggedInUserService
  ) { }
  register (data : any) {
    return this.http.post(`${environment.apiUrl+backendEndPoints.register}`, data);
  }

  login (data : any){
    return this.http.post(`${environment.apiUrl+backendEndPoints.login}`, data);
  }

  logout (){
    return this.http.get(`${environment.apiUrl+backendEndPoints.logout}`,{ headers : this.loggedUserService.getToken()});
  }

  getUser() {
    return this.http.get(`${environment.apiUrl+backendEndPoints.getUser}`, { headers
      : this.loggedUserService.getToken()
    });
  }


  updateUser (data : any){
    return this.http.post(`${environment.apiUrl+backendEndPoints.updateUser}`, data , { headers: this.loggedUserService.getToken()});
  }

  deleteUser (){
    return this.http.delete(`${environment.apiUrl+backendEndPoints.deleteUser}`,{ headers : this.loggedUserService.getToken()});
  }

  getCredit (data : any){
    return this.http.post(`${environment.apiUrl+backendEndPoints.getCredit}`,data , { headers : this.loggedUserService.getToken()});
  }

}
