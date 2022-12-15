import { Controller, Get, Post, Body, Patch, Param, Delete , Response , Request , HttpStatus , UseGuards, Query } from '@nestjs/common';
import { LeadsassigngroupService } from './leadsassigngroup.service';
import { CreateLeadsassigngroupDto } from './dto/create-leadsassigngroup.dto';
import { UpdateLeadsassigngroupDto } from './dto/update-leadsassigngroup.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('leadsassigngroup')
export class LeadsassigngroupController {
  constructor(private readonly leadsassigngroupService: LeadsassigngroupService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get()
  async getallleadsgroup(@Body() obj, @Response() res, @Request() req) {
    const response = await this.leadsassigngroupService.getAllLeadsGroup()
    return res.status(HttpStatus.OK).json({
      response,
    })
  }

  @UseGuards(AuthGuard('jwt'))
  @Post()
  async addLeadsAssignGroup(@Body() obj : CreateLeadsassigngroupDto, @Response() res, @Request() req) {
    const response = await this.leadsassigngroupService.addLeadsAssignGroup(obj)
    return res.status(HttpStatus.OK).json({
      response,
    })
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('all_projects')
  async getOrganicLeads(@Body() obj, @Response() res, @Request() req) {
    const response = await this.leadsassigngroupService.getFBProjects()
    return res.status(HttpStatus.OK).json({
      response,
    })
  }


  @UseGuards(AuthGuard('jwt'))
  @Get('/get_single_group')
  async GetSingleOrganicLead(@Query() params, @Response() res, @Request() req) {
    const user_id = params.id;
    const response = await this.leadsassigngroupService.getSingleOrganicLead(user_id)
    return res.status(HttpStatus.OK).json({
      response ,
    })
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('get_users')
  async getUserList(@Body() obj, @Response() res, @Request() req) {
    const response = await this.leadsassigngroupService.getUserlist()
    return res.status(HttpStatus.OK).json({
      response,
    })
  }


  @UseGuards(AuthGuard('jwt'))
  @Patch()
  async updateUsers(@Body() obj, @Response() res, @Request() req) { 
   const response = await this.leadsassigngroupService.updateOrganicLead(obj)
   return res.status(HttpStatus.OK).json({
     response,
    })
  }


  @UseGuards(AuthGuard('jwt'))
  @Delete()
  async addDelete(@Query() params, @Response() res, @Request() req) {
   const response = await this.leadsassigngroupService.deleteGroup(params.id)
   return res.status(HttpStatus.OK).json({
     response,
    })
  }


  @Post()
  create(@Body() createLeadsassigngroupDto: CreateLeadsassigngroupDto) {
    return this.leadsassigngroupService.create(createLeadsassigngroupDto);
  }

  @Get()
  findAll() {
    return this.leadsassigngroupService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.leadsassigngroupService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLeadsassigngroupDto: UpdateLeadsassigngroupDto) {
    return this.leadsassigngroupService.update(+id, updateLeadsassigngroupDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.leadsassigngroupService.remove(+id);
  }
}
