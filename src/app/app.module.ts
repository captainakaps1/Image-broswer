import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageBroswerCardComponent } from './image-broswer-card/image-broswer-card.component';
import { ImagesService } from './image.service';
import * as Hammer from 'hammerjs';
import {
  HammerGestureConfig,
  HAMMER_GESTURE_CONFIG,
  HammerModule,
} from '@angular/platform-browser';

export class MyHammerConfig extends HammerGestureConfig {
  override overrides = <any>{
    // override hammerjs default configuration
    swipe: { direction: Hammer.DIRECTION_ALL },
  };
}
@NgModule({
  declarations: [AppComponent, ImageBroswerCardComponent],
  imports: [BrowserModule, AppRoutingModule, HammerModule],
  providers: [
    ImagesService,
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
