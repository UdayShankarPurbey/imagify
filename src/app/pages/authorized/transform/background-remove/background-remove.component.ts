import { transformationTypes } from './../../../../core/endpoints';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DispalyDataComponent } from '../../dispaly-data/dispaly-data.component';

@Component({
  selector: 'app-background-remove',
  standalone: true,
  imports: [
    DispalyDataComponent
  ],
  templateUrl: './background-remove.component.html',
  styleUrl: './background-remove.component.css'
})
export class BackgroundRemoveComponent implements OnInit{
  paramsData : any;
    
  constructor(
    private activatedRoute : ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.paramsData = this.activatedRoute.snapshot.routeConfig?.path 
  }


}
