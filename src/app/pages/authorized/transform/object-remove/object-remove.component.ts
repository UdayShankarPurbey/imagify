import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DispalyDataComponent } from '../../dispaly-data/dispaly-data.component';

@Component({
  selector: 'app-object-remove',
  standalone: true,
  imports: [
    DispalyDataComponent
  ],
  templateUrl: './object-remove.component.html',
  styleUrl: './object-remove.component.css'
})
export class ObjectRemoveComponent implements OnInit{
  paramsData : any;
  
  constructor(
    private activatedRoute : ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.paramsData = this.activatedRoute.snapshot.routeConfig?.path 
  }


}
