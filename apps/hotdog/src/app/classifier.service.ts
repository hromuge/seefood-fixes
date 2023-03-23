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
    const promise = firstValueFrom(this.http.post<HotdogClassification>("/api/classify", uploadData));
    return promise.then(value => new Promise(resolve => setTimeout(() => resolve(value), 2000)))
  }
}
