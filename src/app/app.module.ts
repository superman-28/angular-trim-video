import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VideoTrimmerComponent } from './video-trimmer/video-trimmer.component';
import { SliderRangeComponent } from './video-trimmer/components/slider-range/slider-range.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoTrimmerComponent,
    SliderRangeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
