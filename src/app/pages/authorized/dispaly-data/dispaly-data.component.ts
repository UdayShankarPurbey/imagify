import { Component, Input, OnInit } from '@angular/core';
import { transformationTypes } from '../../../core/endpoints';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-dispaly-data',
  standalone: true,
  imports: [],
  templateUrl: './dispaly-data.component.html',
  styleUrl: './dispaly-data.component.css'
})
export class DispalyDataComponent implements OnInit{
 
  @Input() paramsData : any;
  data : any = transformationTypes

  constructor(
    private fb : FormBuilder
  ) {}
  

  ngOnInit(): void {
    if(this.paramsData) {
      console.log(this.data[this.paramsData]);
      this.data = this.data[this.paramsData]
    }
  }

  

}
