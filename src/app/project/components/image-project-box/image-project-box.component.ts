import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ImageCroppedEvent, LoadedImage } from 'ngx-image-cropper';
import { ProjectService } from '../../project.service';
import { SharedService } from 'src/app/shared/shared.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-image-project-box',
  templateUrl: './image-project-box.component.html',
  styleUrls: ['./image-project-box.component.scss']
})
export class ImageProjectBoxComponent implements OnInit {

  formulario: FormGroup = this.formBuilder.group({
    id: [null, Validators.required],
    logo: [null, Validators.required],
  });

  imageChangedEvent: any = '';
  croppedImage: any = '';

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<ImageProjectBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private projectService: ProjectService,
    private sharedService: SharedService,
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log(this.data)
    this.imageChangedEvent = this.data.event
  }

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64
  }

  imageLoaded(image: LoadedImage) {
      // show cropper
  }

  cropperReady() {
      // cropper ready
  }

  loadImageFailed() {
      // show message
  }
  onSubmit() {
    this.formulario = this.formBuilder.group({
      id: [this.data.id, Validators.required],
      logo: [this.croppedImage, Validators.required],
    });
    if (this.formulario.valid) {
      this.projectService.updateProjectLogo(this.formulario.value).subscribe({
        next: (response: any) => {
          this.sharedService.showMessage(response.message)
        },
        error: (error) => {
          this.sharedService.showMessage(error.message)
        },
        complete: () => {
          this.dialogRef.close()
          window.location.reload()
        }
      })
    } else {
      this.sharedService.showMessage('Formulário Inválido')
    }
  }
}
