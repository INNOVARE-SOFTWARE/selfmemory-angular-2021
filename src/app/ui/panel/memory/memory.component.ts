import { Component, OnInit } from '@angular/core';
import { Memory } from 'src/app/models/memory';

@Component({
  selector: 'app-memory',
  templateUrl: './memory.component.html',
  styleUrls: ['./memory.component.css']
})
export class MemoryComponent implements OnInit {
  memory=new Memory()
  
  constructor() { }

  ngOnInit(): void {
  }

  save() {

  }
}
