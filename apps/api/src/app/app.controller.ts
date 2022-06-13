import {Controller, Get, Post, UploadedFile, UseInterceptors} from '@nestjs/common';
import { Express } from 'express';
import 'multer';
import {AppService} from './app.service';
import {FileInterceptor} from "@nestjs/platform-express";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
  }

  @Get()
  ping(): string {
    return 'pong'
  }

  @Post('classify')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    return this.appService.classify(file);
  }
}
