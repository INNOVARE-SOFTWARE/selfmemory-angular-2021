import { Component, OnInit } from '@angular/core';
import { Config } from 'src/app/models/config';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {
  config=new Config();

  constructor() { }

  ngOnInit(): void {
  }

  save() {}

}
