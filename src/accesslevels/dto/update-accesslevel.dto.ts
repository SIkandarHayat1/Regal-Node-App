import { PartialType } from '@nestjs/mapped-types';
import { CreateAccesslevelDto } from './create-accesslevel.dto';

export class UpdateAccesslevelDto extends PartialType(CreateAccesslevelDto) {}
