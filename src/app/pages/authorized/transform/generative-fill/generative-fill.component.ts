import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-generative-fill',
  standalone: true,
  imports: [],
  templateUrl: './generative-fill.component.html',
  styleUrl: './generative-fill.component.css'
})
export class GenerativeFillComponent implements OnInit{
  
  constructor(
    private activatedRoute : ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => console.log(params))
  }


}
