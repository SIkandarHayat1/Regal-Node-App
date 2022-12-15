import { Controller, Get, Post, Body, Patch, Param, Delete, Response, Request, HttpStatus } from '@nestjs/common';
import { AccesslevelsService } from './accesslevels.service';
import { CreateAccesslevelDto } from './dto/create-accesslevel.dto';
import { UpdateAccesslevelDto } from './dto/update-accesslevel.dto';

@Controller('accesslevels')
export class AccesslevelsController {
  constructor(private readonly accesslevelsService: AccesslevelsService) {}


  @Post()
  async addAccessLevelStatus(@Body() obj : CreateAccesslevelDto, @Response() res, @Request() req) {
    const response = await this.accesslevelsService.addAccessLevelStatus(obj)
    return res.status(HttpStatus.OK).json({
      response,
    })
  }

  @Post()
  create(@Body() createAccesslevelDto: CreateAccesslevelDto) {
    return this.accesslevelsService.create(createAccesslevelDto);
  }

  @Get()
  findAll() {
    return this.accesslevelsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.accesslevelsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAccesslevelDto: UpdateAccesslevelDto) {
    return this.accesslevelsService.update(+id, updateAccesslevelDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.accesslevelsService.remove(+id);
  }
}
