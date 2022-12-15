import { Module } from '@nestjs/common';
import { AccesslevelsService } from './accesslevels.service';
import { AccesslevelsController } from './accesslevels.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { accesslevel, AccessLevelSchema } from 'src/Models/Accesslevel';

@Module({
  imports : [MongooseModule.forFeature([{ name: accesslevel.name, schema: AccessLevelSchema }])],
  controllers: [AccesslevelsController],
  providers: [AccesslevelsService]
})
export class AccesslevelsModule {}
