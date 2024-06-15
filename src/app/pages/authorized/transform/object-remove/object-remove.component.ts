import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-object-remove',
  standalone: true,
  imports: [],
  templateUrl: './object-remove.component.html',
  styleUrl: './object-remove.component.css'
})
export class ObjectRemoveComponent implements OnInit{
  
  constructor(
    private activatedRoute : ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => console.log(params))
  }


}
