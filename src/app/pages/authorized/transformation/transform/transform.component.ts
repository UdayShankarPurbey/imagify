import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-transform',
  standalone: true,
  imports: [],
  templateUrl: './transform.component.html',
  styleUrl: './transform.component.css'
})
export class TransformComponent implements OnInit {
  constructor (
    private activatedRoutes : ActivatedRoute
  ) {

  }
  ngOnInit(): void {
    this.activatedRoutes.paramMap.subscribe((params: any) => console.log(params));
  }

}
