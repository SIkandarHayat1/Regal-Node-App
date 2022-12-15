import { Injectable , UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDocument, users } from 'src/Models/Users';
import { authDto } from './auth.dto';


@Injectable()
export class AuthService {
  constructor(private jwtServices : JwtService  , @InjectModel(users.name) private userModel : Model<UserDocument>){}

    async checkUserFromDB(obj : authDto) {

      let User = await this.userModel.find({email : obj.email , password : obj.password}).exec()
      if(!User[0]){
        console.log("error yahan par hai");
        throw new UnauthorizedException ('Please enter valid cruds')
      } else {
         return this.getToken(User) ;
      }
       
    }


    async getToken(User){
      const response = await this.jwtServices.sign({
        full_name : User[0].full_name ,
        email : User[0].email,
        password : User[0].password,
        user_type : User[0].user_type
      }); 

      return { status : 201, message : "Successfully login" , user_name : User[0].full_name ,  user_type : User[0].user_type,  email : User[0].email, token : response}

    }


 
}
