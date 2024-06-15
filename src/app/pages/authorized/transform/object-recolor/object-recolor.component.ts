import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DispalyDataComponent } from '../../dispaly-data/dispaly-data.component';

@Component({
  selector: 'app-object-recolor',
  standalone: true,
  imports: [
    DispalyDataComponent
  ],
  templateUrl: './object-recolor.component.html',
  styleUrl: './object-recolor.component.css'
})
export class ObjectRecolorComponent implements OnInit{
  paramsData : any;
  
  constructor(
    private activatedRoute : ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.paramsData = this.activatedRoute.snapshot.routeConfig?.path 
  }



}
