import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-object-recolor',
  standalone: true,
  imports: [],
  templateUrl: './object-recolor.component.html',
  styleUrl: './object-recolor.component.css'
})
export class ObjectRecolorComponent implements OnInit{
  
  constructor(
    private activatedRoute : ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => console.log(params))
  }


}
