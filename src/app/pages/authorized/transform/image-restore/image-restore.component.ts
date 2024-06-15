import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DispalyDataComponent } from '../../dispaly-data/dispaly-data.component';

@Component({
  selector: 'app-image-restore',
  standalone: true,
  imports: [
    DispalyDataComponent
  ],
  templateUrl: './image-restore.component.html',
  styleUrl: './image-restore.component.css'
})
export class ImageRestoreComponent implements OnInit{
  paramsData : any;
  
  constructor(
    private activatedRoute : ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.paramsData = this.activatedRoute.snapshot.routeConfig?.path 
  }


}
