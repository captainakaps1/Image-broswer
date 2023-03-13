import { Component, OnInit } from '@angular/core';
import { UserProfileService } from './userProfile.service';
import { UserProfile } from './interfaces/image.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'image-browser';
  userProfiles: UserProfile[] = [];

  constructor(private userProfileService: UserProfileService) {}

  ngOnInit() {
    this.userProfiles = this.userProfileService.getUserProfiles();
  }
}
