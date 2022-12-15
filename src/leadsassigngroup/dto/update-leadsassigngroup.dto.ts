import { PartialType } from '@nestjs/mapped-types';
import { CreateLeadsassigngroupDto } from './create-leadsassigngroup.dto';

export class UpdateLeadsassigngroupDto extends PartialType(CreateLeadsassigngroupDto) {}
