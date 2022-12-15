import { Controller, Get, Post, Body, Patch, Param, Delete , Query, HttpStatus , Request, Response , UseGuards } from '@nestjs/common';
import { FacebookleadsService } from './facebookleads.service';
import { CreateFacebookleadDto } from './dto/create-facebooklead.dto';
import { UpdateFacebookleadDto } from './dto/update-facebooklead.dto';
import { AuthGuard } from '@nestjs/passport';
const NodeCron = require('node-cron');

@Controller('facebookleads')
export class FacebookleadsController {
  constructor(private readonly facebookleadsService: FacebookleadsService) {}

  //@UseGuards(AuthGuard('jwt'))
  @Get('facebook_api')
  async getOrganicLeads(@Body() obj, @Response() res, @Request() req) {
    const response = await this.facebookleadsService.facebookLeads()
    return res.status(HttpStatus.OK).json({
      response,
    })
  }
  

  
  @UseGuards(AuthGuard('jwt'))
  @Get()
  async getAllFacebookLeads(@Body() obj, @Response() res, @Request() req) {
    const response = await this.facebookleadsService.getAllFacebookLeads()
    return res.status(HttpStatus.OK).json({
      response,
    })
  }


  @UseGuards(AuthGuard('jwt'))
  @Get('/get_single_facebooklead')
  async GetSingleOrganicLead(@Query() params, @Response() res, @Request() req) {
    const facebook_lead_id = params.id;
    const response = await this.facebookleadsService.getSingleFacebookLead(facebook_lead_id)
    return res.status(HttpStatus.OK).json({
      response ,
    })
  }


  @UseGuards(AuthGuard('jwt'))
  @Patch('/update_comments')
  async updateComments(@Body() obj , @Response() res, @Request() req) { 
   const response = await this.facebookleadsService.updateFacebookLeadWithComments(obj)
   return res.status(HttpStatus.OK).json({
     response,
    })
  }

  //@UseGuards(AuthGuard('jwt'))
  @Get('/assignleads')
  async AssignLeads(@Query() params, @Response() res, @Request() req) {
    const response = await this.facebookleadsService.assignleads()
    return res.status(HttpStatus.OK).json({
      response ,
    })
  }
  


  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFacebookleadDto: UpdateFacebookleadDto) {
    return this.facebookleadsService.update(+id, updateFacebookleadDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.facebookleadsService.remove(+id);
  }
}
