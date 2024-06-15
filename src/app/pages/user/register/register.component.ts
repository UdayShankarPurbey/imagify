import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { NzMessageModule, NzMessageService } from 'ng-zorro-antd/message';
import { UserService } from '../../../services/user/user.service';
import { plans } from '../../../core/endpoints';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NzMessageModule,
    RouterLink
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm : FormGroup;
  photo : any;
  constructor(
    private fb : FormBuilder ,
    private router : Router,
    private messageService : NzMessageService,
    private userService : UserService,
   
  ) { 
    this.registerForm = fb.group({
      firstName : [] ,
      lastName : [], 
      email : [] , 
      username : [] ,
      password : [],
      planId : [],
      creditBalance : [],
    })
  }

  fileUpload(event : any ) {
    if(event.target.files.length > 0 ) {
      this.photo = event.target.files[0];
    } else {
      this.messageService.create('success','Please Select a photo to upload')
    }
  }

  userRegister() {
    this.getCredeitBalance();
    const formData = new FormData();
    for (const key in this.registerForm.value) {
      formData.append(key, this.registerForm.value[key]);
    }
    formData.append('photo',this.photo);
    this.userService.register(formData).subscribe((res : any) => {
      this.registerForm.reset();
      this.router.navigateByUrl('/login');
    },
    (error) => {
        console.error(error.error);
        this.messageService.create('error',error.error.message)
      }
    )
  }

  getCredeitBalance() {
    if(this.registerForm.get('planId')?.value) {
      for(let plan of plans) {
        if(plan._id == this.registerForm.get('planId')?.value) {
          this.registerForm.get('creditBalance')?.setValue(plan.credits);
        }
      }
    }
  }



}
