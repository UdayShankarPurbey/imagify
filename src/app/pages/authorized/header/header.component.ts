import { Component, OnInit } from '@angular/core';
import { LoggedInUserService } from '../../../services/logged-in-user/logged-in-user.service';
import { UserService } from '../../../services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  selectedUser : any;

  constructor(
    private loggedUserService : LoggedInUserService,
    private router : Router,
    private userService : UserService
  ) {}
  ngOnInit(): void {
    this.selectedUser = this.loggedUserService.getUserData();
  }
  logout() {
    console.log('logged out');
    this.userService.logout().subscribe((res : any) => {
      console.log(res);
      localStorage.removeItem('accessToken');
      localStorage.removeItem('loggedInUser');
      this.router.navigateByUrl('')      
    })

  }

  userProfile() {
    this.router.navigateByUrl('/users');    
  }

}
