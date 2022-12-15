import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { attendance, AttendanceDocument } from 'src/Models/Attendance';
import { CreateAttendanceDto } from './dto/create-attendance.dto';
import { UpdateAttendanceDto } from './dto/update-attendance.dto';
const ZKLib = require('zklib');

@Injectable()
export class AttendanceService {

  constructor(@InjectModel(attendance.name) private attendanceModel : Model<AttendanceDocument>){}


  create(createAttendanceDto: CreateAttendanceDto) {
    return 'This action adds a new attendance';
  }

  async addattendance() {
    
    const ZK = new ZKLib({
       ip: '192.168.18.11',
       port: 4370,
       inport: 5200,
       timeout: 5000,
     });
     
    await ZK.connect((err)=> {

     ZK.getUser((err, getUsers)=> {

      ZK.disconnect();
    
      if (err) throw err;

      this.UseCheck(getUsers);
        
      }); 
      
      
    }); 
    
   
  }

  async UseCheck(getUsers){
    
    const ZK = new ZKLib({
      ip: '192.168.18.11',
      port: 4370,
      inport: 6200,
      timeout: 6000,
    });  

    await ZK.connect((err)=> {

      ZK.getAttendance((err, getAttendance)=> {
 
       ZK.disconnect();
     
       if (err) throw err;

       
       const id = 28;

       var filteredKeywords = getUsers.filter((data) => { return data.uid === id });

      console.log("filter words" , filteredKeywords[0].name);
       
 
      //  getAttendance.map((attendance)=>{

      //   console.log("works..." , attendance.id)

      // //   getUsers.filter((data) =>{ 
          
      // //   console.log("data" , data.uid === attendance.id)
      
      
      // // })

 
      //    //console.log("data" , attendance.id);
 
      //     //  const abc =  new this.attendanceModel();
      //     //  abc.name = dattt.name
      //     //  abc.save()
 
      //     //  console.log("working" , dattt)
 
      //      });
         
       }); 
       
       
     }); 

   

  }




 
  findAll() {
    return `This action returns all attendance`;
  }

  findOne(id: number) {
    return `This action returns a #${id} attendance`;
  }

  update(id: number, updateAttendanceDto: UpdateAttendanceDto) {
    return `This action updates a #${id} attendance`;
  }

  remove(id: number) {
    return `This action removes a #${id} attendance`;
  }
}
