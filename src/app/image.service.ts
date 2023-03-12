import { Injectable } from '@angular/core';
import { images } from './images';

@Injectable({ providedIn: 'root' })
export class ImagesService {
  getImages() {
    return images;
  }
}
