import { Component, OnInit } from '@angular/core';
import { Chapter } from 'src/app/models/chapter';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  chapter=new Chapter()

  constructor() { }

  ngOnInit(): void {
  }

  save() {
    
  }

}
