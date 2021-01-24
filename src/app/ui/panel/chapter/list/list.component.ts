import { Component, OnInit } from '@angular/core';
import { Chapter } from 'src/app/models/chapter';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  chapters: Chapter[]
  constructor() { }

  ngOnInit(): void {
  }

}
