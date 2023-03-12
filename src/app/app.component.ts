import { Component, OnInit } from '@angular/core';
import { ImagesService } from './image.service';
import { Image } from './interfaces/image.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'image-browser';
  images: Image[] = [];

  constructor(private imageService: ImagesService) {}

  ngOnInit() {
    this.images = this.imageService.getImages();
  }
}
