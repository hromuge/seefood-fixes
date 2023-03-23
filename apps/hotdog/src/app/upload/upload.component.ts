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

  setFile(fileInputElement: any) {
    this.res = undefined;
    if (fileInputElement && fileInputElement !== '') {
      this.file = fileInputElement.files[0]
      this.reader.readAsDataURL(fileInputElement.files[0]);
      this.reader.onload = () => {
        this.url = this.reader.result;
      }
    }
  }

  async classify() {
    if (!this.file) throw Error("file is undefined");
    this.loading = true;
    this.res = await this.classifier.classifyHotdog(this.file)
    this.loading = false;
  }
}
