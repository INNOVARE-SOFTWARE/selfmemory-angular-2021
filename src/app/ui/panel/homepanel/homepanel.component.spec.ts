import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepanelComponent } from './homepanel.component';

describe('HomepanelComponent', () => {
  let component: HomepanelComponent;
  let fixture: ComponentFixture<HomepanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
