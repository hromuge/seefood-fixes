import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {firstValueFrom} from "rxjs";
import {HotdogClassification} from "@seefood/api-interfaces";

@Injectable({
  providedIn: 'root'
})
export class ClassifierService {

  constructor(private http: HttpClient) {}

  classifyHotdog(file: File): Promise<HotdogClassification> {
    const uploadData = new FormData();
    uploadData.append('file', file, file.name);
    return firstValueFrom(this.http.post<HotdogClassification>("/api/classify", uploadData))
  }
}
