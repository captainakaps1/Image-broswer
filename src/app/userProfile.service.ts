import { Injectable } from '@angular/core';
import { userProfiles } from './userProfile';

@Injectable({ providedIn: 'root' })
export class UserProfileService {
  getUserProfiles() {
    return userProfiles;
  }
}
