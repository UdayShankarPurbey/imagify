import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-background-remove',
  standalone: true,
  imports: [],
  templateUrl: './background-remove.component.html',
  styleUrl: './background-remove.component.css'
})
export class BackgroundRemoveComponent implements OnInit{
  
  constructor(
    private activatedRoute : ActivatedRoute
  ) {}
  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.routeConfig?.path);
    
  }


}
