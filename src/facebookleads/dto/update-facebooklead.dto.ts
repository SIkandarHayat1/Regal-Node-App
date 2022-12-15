import { PartialType } from '@nestjs/mapped-types';
import { CreateFacebookleadDto } from './create-facebooklead.dto';

export class UpdateFacebookleadDto extends PartialType(CreateFacebookleadDto) {}
