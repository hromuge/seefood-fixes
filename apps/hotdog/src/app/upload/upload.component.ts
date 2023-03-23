import {Component} from '@angular/core';
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

  file?: File
  res?: HotdogClassification
  reader = new FileReader();
  url?: any;
  loading = false;
  maxFileSize = 1048576;

  setFile(fileInputElement: any) {
    this.res = undefined;
    if (fileInputElement && fileInputElement !== '') {
      if (fileInputElement.files[0].size > this.maxFileSize) {
        alert("File size is too big! Please upload a file that is smaller than 1MB.")
        throw Error("file size > 1MB")
      } else {
        this.file = fileInputElement.files[0]
        this.reader.readAsDataURL(fileInputElement.files[0]);
        this.reader.onload = () => {
          this.url = this.reader.result;
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
