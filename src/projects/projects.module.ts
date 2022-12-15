import { Module } from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { ProjectsController } from './projects.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { projects, ProjectSchema } from 'src/Models/Projects';

@Module({
  imports : [MongooseModule.forFeature([{ name: projects.name, schema: ProjectSchema }])],
  controllers: [ProjectsController],
  providers: [ProjectsService]
})
export class ProjectsModule {}
