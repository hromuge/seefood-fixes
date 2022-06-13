import {Component} from '@angular/core';
import {ClassifierService} from "../classifier.service";

@Component({
  selector: 'seefood-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
})
export class UploadComponent {

  constructor(private classifier: ClassifierService) {
  }

  file?: File

  setFile(fileInputElement: any) {
    this.file = fileInputElement.files[0]
  }

  async classify() {
    if (!this.file) throw Error("file is undefined")
    const res = await this.classifier.classifyHotdog(this.file)
    alert(JSON.stringify(res))
  }
}
