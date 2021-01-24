import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TokenService } from 'src/app/core/token.service';
import { Chapter } from 'src/app/models/chapter';
import { Memory } from 'src/app/models/memory';
import { ChapterService } from 'src/app/services/chapter.service';
import { MemoryService } from 'src/app/services/memory.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  chapter = new Chapter()
  memory: Memory

  constructor(private route: ActivatedRoute,
    private chapterService: ChapterService,
    private memoryService: MemoryService,
    private tokenService: TokenService) {
    this.route.params.subscribe(params => {
      var id = params['id'];
      this.load(id)
    });
  }

  ngOnInit(): void {
    this.memoryService.createOrReadMemory(this.tokenService.user.id).subscribe(data => {
      if (data) {
        this.memory = data
      }
    })
  }

  load(id: string) {
    if (id != 'new') {
      this.chapterService.get(id).subscribe((data: Chapter) => {
        this.chapter = data
      })
    }
  }

  save() {
    if (this.chapter.id) {
      this.chapterService.patch(this.chapter, this.chapter.id).subscribe(data => {
        alert('edited')
      })
    } else {
      this.chapter.memoryId = this.memory.id
      this.chapter.created = new Date()
      this.chapterService.save(this.chapter).subscribe(data => {
        alert('saved')
      })
    }
  }

}
