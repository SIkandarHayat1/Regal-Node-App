import { Controller, Get, Post, Body, Patch, Param, HttpStatus, Delete , UseGuards , Response , Request  } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AnnouncementsService } from './announcements.service';
import { CreateAnnouncementDto } from './dto/create-announcement.dto';
import { UpdateAnnouncementDto } from './dto/update-announcement.dto';

@Controller('announcements')
export class AnnouncementsController {
  constructor(private readonly announcementsService: AnnouncementsService) {}

  // @Post()
  // create(@Body() createAnnouncementDto: CreateAnnouncementDto) {
  //   return this.announcementsService.create(createAnnouncementDto);
  // }


  //@UseGuards(AuthGuard('jwt'))
  @Post()
  async addAnnounements(@Body() obj : CreateAnnouncementDto, @Response() res, @Request() req) {
    const response = await this.announcementsService.addAnnouncements(obj)
    return res.status(HttpStatus.OK).json({
      response,
    })
  }

  @Get()
  findAll() {
    return this.announcementsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.announcementsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAnnouncementDto: UpdateAnnouncementDto) {
    return this.announcementsService.update(+id, updateAnnouncementDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.announcementsService.remove(+id);
  }
}
