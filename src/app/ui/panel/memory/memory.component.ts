import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/core/token.service';
import { Memory } from 'src/app/models/memory';
import { MemoryService } from 'src/app/services/memory.service';

@Component({
  selector: 'app-memory',
  templateUrl: './memory.component.html',
  styleUrls: ['./memory.component.css']
})
export class MemoryComponent implements OnInit {
  memory = new Memory()

  constructor(private memoryService: MemoryService,
    private tokenService: TokenService) { }

  ngOnInit(): void {
    this.memoryService.createOrReadMemory(this.tokenService.user.id).subscribe((data) => {
      this.memory = data
    })
  }

  save() {
    this.memoryService.patch(this.memory, this.memory.id).subscribe((data) => {
      alert('saved')
    })
  }
}
