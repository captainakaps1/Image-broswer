import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Image } from '../interfaces/image.interface';

@Component({
  selector: 'app-image-broswer-card',
  templateUrl: './image-broswer-card.component.html',
  styleUrls: ['./image-broswer-card.component.css'],
})
export class ImageBroswerCardComponent implements OnInit, OnDestroy {
  @Input() images: Image[] = [];
  currentIndex: number = 0;
  currentImageDisplayed: any;
  showActionBar = false;
  slideShow = true;
  interval: any;

  constructor() {}

  ngOnInit(): void {
    this.currentImageDisplayed = this.images[0];
    this.slideShowImages();
  }

  slideShowImages() {
    this.interval = setInterval(() => {
      if (!this.showActionBar && this.slideShow) {
        this.currentIndex++;
        this.changeImage(this.currentIndex);
      }
    }, 5000);
  }

  changeImage(currentIndex: number) {
    if (currentIndex > this.images.length - 1 || currentIndex < 0) {
      currentIndex = 0;
      this.currentIndex = 0;
    }
    this.currentImageDisplayed = this.images[currentIndex];
    this.showActionBar = false;
  }

  nextImage() {
    this.currentIndex++;
    this.changeImage(this.currentIndex);
  }

  previousImage() {
    this.currentIndex--;
    this.changeImage(this.currentIndex);
  }

  updateImageLike() {
    this.currentImageDisplayed.numLikes =
      this.currentImageDisplayed.numLikes + 1;
  }
  updateImageSuperLike() {
    this.currentImageDisplayed.numSuperLikes =
      this.currentImageDisplayed.numSuperLikes + 1;
  }

  updateImageDislike() {
    this.currentImageDisplayed.numDislikes =
      this.currentImageDisplayed.numDislikes + 1;
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
}
