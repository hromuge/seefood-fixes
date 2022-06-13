import {Injectable} from '@nestjs/common';
import {HotdogClassification} from '@seefood/api-interfaces';
import {Express} from 'express';
import 'multer';

@Injectable()
export class AppService {
  classify(file: Express.Multer.File): HotdogClassification {
    const isHotdog = Math.random() > .5;
    const confidence = Math.random();
    return {isHotdog, confidence}
  }
}
