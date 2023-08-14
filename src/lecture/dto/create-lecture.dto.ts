import { ApiProperty } from '@nestjs/swagger';

export class CreateLectureDto {

  @ApiProperty({ example: 'TS Controllers', description: 'The title of the lecture' })
  title: string;

  
  @ApiProperty({ example: 'Your will learn the basics about how controllers work', description: 'Small description for lecture' })
  description: string;

}

