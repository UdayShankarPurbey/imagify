import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../../services/user/user.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm : FormGroup;
  constructor(private fb : FormBuilder ,
    private router : Router,
    private userService : UserService,
    private messageService : NzMessageService,
  ) {
    this.loginForm = this.fb.group({      
      email: [''],
      password: [''],
      confirmPassword : [''],
    })
  }

  loginData() {
    if(this.loginForm.value.password == this.loginForm.value.confirmPassword) {
      this.userService.login({
        email : this.loginForm.value.email,
        password :  this.loginForm.value.password,
      }).subscribe((res : any) => {
        console.log(res);
        if(res.data?.accessToken) {
          localStorage.setItem('accessToken', res.data.accessToken);
          localStorage.setItem('loggedInUser', JSON.stringify(res.data.loggedInUser));
          this.router.navigateByUrl('/authorized');
        }
      },
      (error) => {
          console.error(error.error);
          this.messageService.error('Login Error');
        }
      )
    } else {
      this.messageService.error('Passwords do not match');
    }
    

  }

}
