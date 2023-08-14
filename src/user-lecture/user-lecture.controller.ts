import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserLectureService } from './user-lecture.service';
import { CreateUserLectureDto } from './dto/create-user-lecture.dto';
import { UpdateUserLectureDto } from './dto/update-user-lecture.dto';

@Controller('user-lecture')
export class UserLectureController {
  constructor(private readonly userLectureService: UserLectureService) {}

  @Post()
  create(@Body() createUserLectureDto: CreateUserLectureDto) {
    return this.userLectureService.create(createUserLectureDto);
  }

  @Get()
  findAll() {
    return this.userLectureService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userLectureService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserLectureDto: UpdateUserLectureDto) {
    return this.userLectureService.update(+id, updateUserLectureDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userLectureService.remove(+id);
  }
}
