import { Controller, Get, Post, Body, Patch, Param, Delete , Response , Request , HttpStatus , UseGuards} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { DashboardService } from './dashboard.service';
import { CreateDashboardDto } from './dto/create-dashboard.dto';
import { UpdateDashboardDto } from './dto/update-dashboard.dto';

@Controller('dashboard')
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get()
  async getAllFacebookLeadsStats(@Body() obj, @Response() res, @Request() req) {
    let user_type = req.user.user_type ;
    let full_name = req.user.full_name ;
    const response = await this.dashboardService.FacebookLeadsStats(user_type , full_name)
    return res.status(HttpStatus.OK).json({
      response,
    })
  }


  @UseGuards(AuthGuard('jwt'))
  @Get('/organic_leads_stats')
  async getAllOrganicLeadsStats(@Body() obj, @Response() res, @Request() req) {
    let user_type = req.user.user_type ;
    let full_name = req.user.full_name ;
    const response = await this.dashboardService.OrganicLeadsStats(user_type , full_name)
    return res.status(HttpStatus.OK).json({
      response,
    })
  }

  
  @UseGuards(AuthGuard('jwt'))
  @Get('/gettotalleads')
  async getTotalLeads(@Body() obj, @Response() res, @Request() req) {
    let user_type = req.user.user_type ;
    let full_name = req.user.full_name ;
    console.log("working.................")
    const response = await this.dashboardService.getTotalLeads(user_type , full_name)
    return res.status(HttpStatus.OK).json({
      response,
    })
  }


  @UseGuards(AuthGuard('jwt'))
  @Get('/gettotalorganicleads')
  async getTotalOrganicLeads(@Body() obj, @Response() res, @Request() req) {
    let user_type = req.user.user_type ;
    let full_name = req.user.full_name ;
    console.log("organic Leads")
    const response = await this.dashboardService.getOrganicTotalLeads(user_type , full_name)
    return res.status(HttpStatus.OK).json({
      response,
    })
  }




  @UseGuards(AuthGuard('jwt'))
  @Get('/gettotalnewleads')
  async getTotalNewLeads(@Body() obj, @Response() res, @Request() req) {
    let user_type = req.user.user_type ;
    let full_name = req.user.full_name ;
    const response = await this.dashboardService.getTotalNewLeads(user_type , full_name)
    return res.status(HttpStatus.OK).json({
      response,
    })
  }


  @UseGuards(AuthGuard('jwt'))
  @Get('/gettotalorganicnewleads')
  async getTotalOrganicNewLeads(@Body() obj, @Response() res, @Request() req) {
    let user_type = req.user.user_type ;
    let full_name = req.user.full_name ;
    const response = await this.dashboardService.getTotalOrganicNewLeads(user_type , full_name)
    return res.status(HttpStatus.OK).json({
      response,
    })
  }


  @UseGuards(AuthGuard('jwt'))
  @Get('/gettotalfollowup')
  async getTotalFollowUp(@Body() obj, @Response() res, @Request() req) {
    let user_type = req.user.user_type ;
    let full_name = req.user.full_name ;
    const response = await this.dashboardService.getTotalFollowUp(user_type , full_name)
    return res.status(HttpStatus.OK).json({
      response,
    })
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('/gettotalorganicfollowup')
  async getTotalOrganicFollowUp(@Body() obj, @Response() res, @Request() req) {
    let user_type = req.user.user_type ;
    let full_name = req.user.full_name ;
    const response = await this.dashboardService.getTotalOrganicFollowUp(user_type , full_name)
    return res.status(HttpStatus.OK).json({
      response,
    })
  }


  @UseGuards(AuthGuard('jwt'))
  @Get('/gettotalinterested')
  async getTotalInterested(@Body() obj, @Response() res, @Request() req) {
    let user_type = req.user.user_type ;
    let full_name = req.user.full_name ;
    const response = await this.dashboardService.getTotalInterested(user_type , full_name)
    return res.status(HttpStatus.OK).json({
      response,
    })
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('/gettotalorganicinterested')
  async getTotalOrganicInterested(@Body() obj, @Response() res, @Request() req) {
    let user_type = req.user.user_type ;
    let full_name = req.user.full_name ;
    const response = await this.dashboardService.getTotalOrganicInterested(user_type , full_name)
    return res.status(HttpStatus.OK).json({
      response,
    })
  }


  @UseGuards(AuthGuard('jwt'))
  @Get('/gettotaldealer')
  async getTotalDealer(@Body() obj, @Response() res, @Request() req) {
    let user_type = req.user.user_type ;
    let full_name = req.user.full_name ;
    const response = await this.dashboardService.getTotalDealer(user_type , full_name)
    return res.status(HttpStatus.OK).json({
      response,
    })
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('/gettotalorganicdealer')
  async getTotalOrganicDealer(@Body() obj, @Response() res, @Request() req) {
    let user_type = req.user.user_type ;
    let full_name = req.user.full_name ;
    const response = await this.dashboardService.getTotalOrganicDealer(user_type , full_name)
    return res.status(HttpStatus.OK).json({
      response,
    })
  }


  @UseGuards(AuthGuard('jwt'))
  @Get('/gettotalcloseclients')
  async getTotalCloseClients(@Body() obj, @Response() res, @Request() req) {
    let user_type = req.user.user_type ;
    let full_name = req.user.full_name ;
    const response = await this.dashboardService.getTotalCloseClients(user_type , full_name)
    return res.status(HttpStatus.OK).json({
      response,
    })
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('/gettotalorganiccloseclients')
  async getTotalOrganicCloseClients(@Body() obj, @Response() res, @Request() req) {
    let user_type = req.user.user_type ;
    let full_name = req.user.full_name ;
    const response = await this.dashboardService.getTotalOrganicCloseClients(user_type , full_name)
    return res.status(HttpStatus.OK).json({
      response,
    })
  }


  @UseGuards(AuthGuard('jwt'))
  @Get('/gettotalsalematurity')
  async getTotalSalesMaturity(@Body() obj, @Response() res, @Request() req) {
    let user_type = req.user.user_type ;
    let full_name = req.user.full_name ;
    const response = await this.dashboardService.getTotalSalesMaturity(user_type , full_name)
    return res.status(HttpStatus.OK).json({
      response,
    })
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('/gettotalorganicsalematurity')
  async getTotalOrganicSalesMaturity(@Body() obj, @Response() res, @Request() req) {
    let user_type = req.user.user_type ;
    let full_name = req.user.full_name ;
    const response = await this.dashboardService.getTotalOrganicSalesMaturity(user_type , full_name)
    return res.status(HttpStatus.OK).json({
      response,
    })
  }


  @UseGuards(AuthGuard('jwt'))
  @Get('/gettotalvisitplan')
  async getTotalVisitPlan(@Body() obj, @Response() res, @Request() req) {
    let user_type = req.user.user_type ;
    let full_name = req.user.full_name ;
    const response = await this.dashboardService.getTotalVisitPlan(user_type , full_name)
    return res.status(HttpStatus.OK).json({
      response,
    })
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('/gettotalorganicvisitplan')
  async getTotalOrganicVisitPlan(@Body() obj, @Response() res, @Request() req) {
    let user_type = req.user.user_type ;
    let full_name = req.user.full_name ;
    const response = await this.dashboardService.getTotalOrganicVisitPlan(user_type , full_name)
    return res.status(HttpStatus.OK).json({
      response,
    })
  }


  @UseGuards(AuthGuard('jwt'))
  @Get('/gettotalcallback')
  async getTotalCallBack(@Body() obj, @Response() res, @Request() req) {
    let user_type = req.user.user_type ;
    let full_name = req.user.full_name ;
    const response = await this.dashboardService.getTotalCallBack(user_type , full_name)
    return res.status(HttpStatus.OK).json({
      response,
    })
  }


  @UseGuards(AuthGuard('jwt'))
  @Get('/gettotalorganiccallback')
  async getTotalOrganicCallBack(@Body() obj, @Response() res, @Request() req) {
    let user_type = req.user.user_type ;
    let full_name = req.user.full_name ;
    const response = await this.dashboardService.getTotalOrganicCallBack(user_type , full_name)
    return res.status(HttpStatus.OK).json({
      response,
    })
  }


  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDashboardDto: UpdateDashboardDto) {
    return this.dashboardService.update(+id, updateDashboardDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dashboardService.remove(+id); 
  }
}
