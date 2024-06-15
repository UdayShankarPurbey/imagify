import { CommonModule } from '@angular/common';
import { UserService } from './../../../services/user/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-user',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './about-user.component.html',
  styleUrl: './about-user.component.css'
})
export class AboutUserComponent implements OnInit{
  user : any;

  constructor(
    private  userService : UserService,
  ) {
  }

  ngOnInit(): void {
    this.userService.getUser().subscribe(
      (res : any) => {
        console.log(res);
        this.user = res.data.user;
      },
      (error : any) => {
        console.error(error);
      }
    )
  }

}
