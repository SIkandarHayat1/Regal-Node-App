import { Body, Controller, Get, HttpStatus, Patch, Post, Query, Request, Response , UseGuards} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { organicLeadsDto } from './organicleads.dto';
import { OrganicleadsService } from './organicleads.service';

@Controller('organicleads')
export class OrganicleadsController {
  constructor(private readonly organicleadsService: OrganicleadsService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get()
  async getOrganicLeads(@Body() obj, @Response() res, @Request() req) {
    let user_type = req.user.user_type ;
    let full_name = req.user.full_name ;
    const response = await this.organicleadsService.getAllOrganicLead(user_type , full_name )
    return res.status(HttpStatus.OK).json({
      response,
    })
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('/get_single_organiclead')
  async GetSingleOrganicLead(@Query() params, @Response() res, @Request() req) {
    const user_id = params.id;
    const response = await this.organicleadsService.getSingleOrganicLead(user_id)
    return res.status(HttpStatus.OK).json({
      response ,
    })
  }

  @UseGuards(AuthGuard('jwt'))
  @Post()
  async addOrganicLeads(@Body() obj : organicLeadsDto, @Response() res, @Request() req) {
    const response = await this.organicleadsService.addOrganicLead(obj)
    return res.status(HttpStatus.OK).json({
      response,
    })
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch()
  async updateUsers(@Body() obj: organicLeadsDto, @Response() res, @Request() req) { 
   const response = await this.organicleadsService.updateOrganicLead(obj)
   return res.status(HttpStatus.OK).json({
     response,
    })
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('get_users')
  async getUserList(@Body() obj, @Response() res, @Request() req) {
    const response = await this.organicleadsService.getUserlist()
    return res.status(HttpStatus.OK).json({
      response,
    })
  }


  @UseGuards(AuthGuard('jwt'))
  @Patch('/update_comments')
  async updateComments(@Body() obj: organicLeadsDto, @Response() res, @Request() req) { 
   const response = await this.organicleadsService.updateOrganicLeadWithComments(obj)
   return res.status(HttpStatus.OK).json({
     response,
    })
  }



}
