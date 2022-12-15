import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Request, Response, HttpStatus, UseGuards } from '@nestjs/common';
import { ReportingService } from './reporting.service';
import { CreateReportingDto } from './dto/create-reporting.dto';
import { UpdateReportingDto } from './dto/update-reporting.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('reporting')
export class ReportingController {
  constructor(private  readonly reportingService: ReportingService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post('/leads_report')
  async GetLeadsReport(@Body() obj, @Response() res, @Request() req) {
    const response = await this.reportingService.getLeadsReport(obj)
    return res.status(HttpStatus.OK).json({
      response,
    })
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('/user_report')
  async GetUserReport(@Body() obj, @Response() res, @Request() req) {
    const response = await this.reportingService.getUserReport(obj)
    return res.status(HttpStatus.OK).json({
      response,
    })
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('/dealer_report')
  async GetUserRepor(@Body() obj, @Response() res, @Request() req) {
    const response = await this.reportingService.getLeadsReport(obj)
    return res.status(HttpStatus.OK).json({
      response,
    })
  }


  @Post()
  create(@Body() createReportingDto: CreateReportingDto) {
    return this.reportingService.create(createReportingDto);
  }

  @Get()
  findAll() {
    return this.reportingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reportingService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReportingDto: UpdateReportingDto) {
    return this.reportingService.update(+id, updateReportingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reportingService.remove(+id);
  }
}
