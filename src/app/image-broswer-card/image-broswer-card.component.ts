import { transition, trigger, useAnimation } from '@angular/animations';
import {
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { UserProfile } from '../interfaces/image.interface';
import { AnimationType, scaleIn, scaleOut } from './image-broswer-animation';

@Component({
  selector: 'app-image-broswer-card',
  templateUrl: './image-broswer-card.component.html',
  styleUrls: ['./image-broswer-card.component.css'],
  // animations: [
  //   trigger('slideAnimation', [
  //     transition('void => scale', [
  //       useAnimation(scaleIn, { params: { time: '500ms' } }),
  //     ]),
  //     transition('scale => void', [
  //       useAnimation(scaleOut, { params: { time: '500ms' } }),
  //     ]),
  //   ]),
  // ],
})
export class ImageBroswerCardComponent implements OnInit, OnDestroy {
  @Input() userProfile: UserProfile[] = [];
  // animationType = AnimationType.Scale;
  currentUserProfileIndex: number = 0;
  currentUserImageIndex: number = 0;
  currentUserProfileDisplayed: any;
  currentUserImagesDisplay: any;
  showActionBar = false;
  slideShow = true;
  like = false;
  dislike = false;
  superLike = false;
  interval: any;
  noImgToDisplay =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMFm8eXQHeAtAFkY2WBztX3RFB5ONe0RAT7g&usqp=CAU';

  constructor() {}

  ngOnInit(): void {
    this.currentUserProfileDisplayed = this.userProfile[0];
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
    this.showActionBar = false;
  }

  previousImage() {
    this.currentUserImageIndex =
      this.currentUserImageIndex === 0
        ? this.currentUserProfileDisplayed.images.length - 1
        : this.currentUserImageIndex - 1;
  }

  nextImage() {
    this.currentUserImageIndex =
      this.currentUserImageIndex ===
      this.currentUserProfileDisplayed.images.length - 1
        ? 0
        : this.currentUserImageIndex + 1;
  }

  updateUserProfileLike() {
    this.like = true;
    this.currentUserProfileDisplayed.numLikes =
      this.currentUserProfileDisplayed.numLikes + 1;
    setTimeout(() => {
      this.like = false;
      this.changeUserProfile();
    }, 500);
  }

  updateUserProfileSuperLike() {
    this.superLike = true;
    this.currentUserProfileDisplayed.numSuperLikes =
      this.currentUserProfileDisplayed.numSuperLikes + 1;
    setTimeout(() => {
      this.superLike = false;
      this.changeUserProfile();
    }, 500);
  }

  updateUserProfileDislike() {
    this.dislike = true;
    this.currentUserProfileDisplayed.numDislikes =
      this.currentUserProfileDisplayed.numDislikes + 1;
    setTimeout(() => {
      this.dislike = false;
      this.changeUserProfile();
    }, 500);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
}
