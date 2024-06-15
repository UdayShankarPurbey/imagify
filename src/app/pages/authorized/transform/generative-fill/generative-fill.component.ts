import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DispalyDataComponent } from '../../dispaly-data/dispaly-data.component';

@Component({
  selector: 'app-generative-fill',
  standalone: true,
  imports: [
    DispalyDataComponent
  ],
  templateUrl: './generative-fill.component.html',
  styleUrl: './generative-fill.component.css'
})
export class GenerativeFillComponent implements OnInit{
  paramsData : any;
  
  constructor(
    private activatedRoute : ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.paramsData = this.activatedRoute.snapshot.routeConfig?.path 
  }



}
