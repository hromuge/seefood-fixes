import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ClassifierService} from "./classifier.service";

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, ClassifierService],
})
export class AppModule {}
