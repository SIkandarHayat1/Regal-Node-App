import { Module } from '@nestjs/common';
import { ConfigModule , ConfigService} from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { OrganicleadsModule } from './organicleads/organicleads.module';
import { ProjectsModule } from './projects/projects.module';
import { FacebookleadsModule } from './facebookleads/facebookleads.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { ReportingModule } from './reporting/reporting.module';
import { AccesslevelsModule } from './accesslevels/accesslevels.module';
import { LeadsassigngroupModule } from './leadsassigngroup/leadsassigngroup.module';
import { AnnouncementsModule } from './announcements/announcements.module';
import { AttendanceModule } from './attendance/attendance.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';


@Module({
  imports: [

    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'build'),
    }),
  UsersModule ,   
  ConfigModule.forRoot({
    isGlobal : true,
    envFilePath : [".env"]
  }),
  MongooseModule.forRootAsync({
    imports : [ConfigModule],
    useFactory : (ConfigService : ConfigService) => ({uri : ConfigService.get("MONGO_URI")}),
    inject : [ConfigService]
  }),
  AuthModule,
  OrganicleadsModule,
  ProjectsModule,
  FacebookleadsModule,
  DashboardModule,
  ReportingModule,
  AccesslevelsModule,
  LeadsassigngroupModule,
  AnnouncementsModule,
  AttendanceModule

],
  controllers: [],
  providers: [],
})
export class AppModule {}
