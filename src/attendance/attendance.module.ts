import { Module } from '@nestjs/common';
import { AttendanceService } from './attendance.service';
import { AttendanceController } from './attendance.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { attendance, AttendanceSchema } from 'src/Models/Attendance';

@Module({
  imports : [MongooseModule.forFeature([{ name: attendance.name, schema: AttendanceSchema }])],
  controllers: [AttendanceController],
  providers: [AttendanceService]
})
export class AttendanceModule {}
