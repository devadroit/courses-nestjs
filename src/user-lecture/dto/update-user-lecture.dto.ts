import { PartialType } from '@nestjs/mapped-types';
import { CreateUserLectureDto } from './create-user-lecture.dto';

export class UpdateUserLectureDto extends PartialType(CreateUserLectureDto) {}
