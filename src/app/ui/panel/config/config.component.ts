import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/core/token.service';
import { Config } from 'src/app/models/config';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {
  config = new Config();

  constructor(private configService: ConfigService,
    private tokenService: TokenService) { }

  ngOnInit(): void {
    this.configService.get(this.tokenService.user.id).subscribe((data: Config) => {
      if (data) {
        this.config = data
      }
    })
  }

  save() {
    this.configService.patch(this.config, this.config.id).subscribe(data => {
      alert('saved')
    })
  }

}
