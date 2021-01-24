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

  constructor(private route: ActivatedRoute, //for path var
    private chapterService: ChapterService,
    private memoryService: MemoryService,
    private tokenService: TokenService) {
    this.route.params.subscribe(params => {
      var id = params['id']; //new or UUID?
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
    // for edit
    if (id != 'new') {
      this.chapterService.get(id).subscribe((data: Chapter) => {
        this.chapter = data
      })
    }
  }

  save() {
    if (this.chapter.id) { //edit?
      this.chapterService.patch(this.chapter, this.chapter.id).subscribe(data => {
        alert('edited')
      })
    } else { //new
      this.chapter.memoryId = this.memory.id //very important!!!
      this.chapter.created = new Date()
      //
      this.chapterService.save(this.chapter).subscribe(data => {
        alert('saved')
      })
    }
  }

}
