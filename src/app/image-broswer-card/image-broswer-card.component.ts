import {
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Image, UserProfile } from '../interfaces/image.interface';

@Component({
  selector: 'app-image-broswer-card',
  templateUrl: './image-broswer-card.component.html',
  styleUrls: ['./image-broswer-card.component.css'],
})
export class ImageBroswerCardComponent implements OnInit, OnDestroy {
  @Input() userProfile: UserProfile[] = [];
  currentUserProfileIndex: number = 0;
  currentUserImageIndex: number = 0;
  currentUserProfileDisplayed: any;
  currentUserImagesDisplay: any;
  showActionBar = false;
  slideShow = true;
  interval: any;
  noImgToDisplay =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMFm8eXQHeAtAFkY2WBztX3RFB5ONe0RAT7g&usqp=CAU';

  imageRefs: ElementRef[] = [];
  @ViewChild('imageRef') imageRef: ElementRef | undefined;

  constructor() {}

  ngOnInit(): void {
    this.currentUserProfileDisplayed = this.userProfile[0];
    this.currentUserImagesDisplay = this.currentUserProfileDisplayed.images[0];
    this.slideShowImages();
  }

  slideShowImages() {
    this.interval = setInterval(() => {
      if (!this.showActionBar && this.slideShow) {
        this.currentUserImageIndex++;
        this.changeImage(this.currentUserImageIndex);
      }
    }, 5000);
  }

  changeImage(currentIndex: number) {
    if (
      currentIndex > this.currentUserProfileDisplayed.images.length - 1 ||
      currentIndex < 0
    ) {
      currentIndex = 0;
      this.currentUserImageIndex = 0;
    }

    this.currentUserImagesDisplay =
      this.currentUserProfileDisplayed.images[currentIndex];

    const imageElements = document.querySelectorAll<HTMLElement>('.carousel');
    imageElements.forEach((imageElement: HTMLElement, index: number) => {
      if (index === currentIndex) {
        imageElement.classList.add('active');
      } else {
        imageElement.classList.remove('active');
      }
    });

    if (this.imageRefs[currentIndex]) {
      this.imageRefs[currentIndex].nativeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start',
      });
    }

    this.showActionBar = false;
  }

  changeUserProfile() {
    this.currentUserProfileIndex++;
    if (
      this.currentUserProfileIndex > this.userProfile.length - 1 ||
      this.currentUserProfileIndex < 0
    ) {
      this.currentUserProfileIndex = 0;
    }
    this.currentUserImageIndex = 0;
    this.currentUserProfileDisplayed =
      this.userProfile[this.currentUserProfileIndex];
    this.currentUserImagesDisplay =
      this.currentUserProfileDisplayed.images[this.currentUserImageIndex];
    this.showActionBar = false;
  }

  nextImage() {
    this.currentUserImageIndex++;
    this.changeImage(this.currentUserImageIndex);
  }

  previousImage() {
    this.currentUserImageIndex--;
    this.changeImage(this.currentUserImageIndex);
  }

  updateUserProfileLike() {
    this.currentUserProfileDisplayed.numLikes =
      this.currentUserProfileDisplayed.numLikes + 1;
    this.changeUserProfile();
  }
  updateUserProfileSuperLike() {
    this.currentUserProfileDisplayed.numSuperLikes =
      this.currentUserProfileDisplayed.numSuperLikes + 1;
    this.changeUserProfile();
  }

  updateUserProfileDislike() {
    this.currentUserProfileDisplayed.numDislikes =
      this.currentUserProfileDisplayed.numDislikes + 1;
    this.changeUserProfile();
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
}
