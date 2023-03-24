import {Controller, Get, Post, UploadedFile, UseInterceptors} from '@nestjs/common';
import { Express } from 'express';
import 'multer';
import {AppService} from './app.service';
import {FileInterceptor} from "@nestjs/platform-express";
import {ClassifierService} from "./classifier.service";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly classifierService: ClassifierService) {
  }

  @Get()
  ping(): string {
    return 'pong'
  }

  @Post('classify')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    return this.classifierService.classify(file);
  }
}
