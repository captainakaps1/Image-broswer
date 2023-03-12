import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageBroswerCardComponent } from './image-broswer-card.component';

describe('ImageBroswerCardComponent', () => {
  let component: ImageBroswerCardComponent;
  let fixture: ComponentFixture<ImageBroswerCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageBroswerCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageBroswerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
