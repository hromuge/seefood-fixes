import {Component, ElementRef, ViewChild} from '@angular/core';
import {ClassifierService} from "../classifier.service";
import {HotdogClassification} from "@seefood/api-interfaces";

@Component({
  selector: 'seefood-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
})
export class UploadComponent {

  constructor(private classifier: ClassifierService) {
  }

  @ViewChild('uploadedImage')
  imageElement?: ElementRef;
  file?: File
  res?: HotdogClassification
  img?: any;
  loading = false;
  maxFileSize = 1048576;
  maxImageResolution = 1024;

  setFile(fileInputElement: any) {
    this.res = undefined;
    if (fileInputElement && fileInputElement !== '') {
      if (fileInputElement.files[0].size > this.maxFileSize) {
        this.img = null;
        alert("File size is too big! Please upload a file that is smaller than 1MB.")
        throw Error("file size > 1MB")
      } else {
        const reader = new FileReader();
        this.file = fileInputElement.files[0]
        reader.readAsDataURL(fileInputElement.files[0]);
        reader.onload = () => {
          this.img = new Image();
          this.img.src = reader.result;
          this.img.onload = () => {
            if (this.img.width > this.maxImageResolution || this.img.height > this.maxImageResolution) {
              this.img = null;
              alert("Image is too large! Please only upload images with a resolution of 1024x1024 or smaller.");
              throw Error("image resolution > 1024x1024px");
            }
          };
        }
      }
    }
  }

  async classify() {
    if (!this.file) {
      alert("Please upload a file.")
      throw Error("file is undefined");
    }
    this.loading = true;
    this.res = await this.classifier.classifyHotdog(this.file)
    this.loading = false;
  }
}
