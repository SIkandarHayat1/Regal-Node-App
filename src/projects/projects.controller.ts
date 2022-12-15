import { Body, Controller, Delete, Get, HttpStatus, Patch, Post, Query, Request, Response , UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { projectsDto } from './projects.dto';
import { ProjectsService } from './projects.service';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get()
  async getAllProjcts(@Body() obj, @Response() res, @Request() req) {
    const response = await this.projectsService.getAllProjects()
    return res.status(HttpStatus.OK).json({
      response,
    })
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('/get_single_project')
  async GetSingleProject(@Query() params, @Response() res, @Request() req) {
    const project_id = params.id;
    const response = await this.projectsService.getSingleProject(project_id)
    return res.status(HttpStatus.OK).json({
      response,
    })
  }

  @UseGuards(AuthGuard('jwt'))
  @Post()
  async addProject(@Body() obj : projectsDto, @Response() res, @Request() req) {
    const response = await this.projectsService.addProject(obj)
    return res.status(HttpStatus.OK).json({
      response,
    })
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch()
  async updateProject(@Body() obj: projectsDto, @Response() res, @Request() req) { 
   const response = await this.projectsService.updateProject(obj)
   return res.status(HttpStatus.OK).json({
     response,
    })
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete()
  async deleteProject(@Query() params, @Response() res, @Request() req) {
   const response = await this.projectsService.deleteProject(params.id)
   return res.status(HttpStatus.OK).json({
     response,
    })
  }

}
