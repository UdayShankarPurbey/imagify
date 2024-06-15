import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-image-restore',
  standalone: true,
  imports: [],
  templateUrl: './image-restore.component.html',
  styleUrl: './image-restore.component.css'
})
export class ImageRestoreComponent implements OnInit{
  
  constructor(
    private activatedRoute : ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => console.log(params))
  }

}
