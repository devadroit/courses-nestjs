
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { CreateLectureDto } from '../../lecture/dto/create-lecture.dto';

export class CreateCourseDto {

  @ApiProperty({ example: 'Nestjs Programming 101', description: 'The ID of the course' })
  title: string;

  @ApiProperty({ example: "In this course you will learn the basics of Nestjs Backend programming", description: 'Description of the course', required: false, })
  description: string;

  

}

