import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { ImageCropperModule } from 'ngx-image-cropper';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    ImageCropperModule,
  ],
  exports: [
    ImageCropperModule,
  ]
})
export class SharedModule { }
