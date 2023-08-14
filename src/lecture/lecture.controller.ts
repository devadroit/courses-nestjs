import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LectureService } from './lecture.service';
import { CreateLectureDto } from './dto/create-lecture.dto';
import { UpdateLectureDto } from './dto/update-lecture.dto';
import { ApiTags } from '@nestjs/swagger'; // Add this import

@ApiTags('lecture') // Add this decorator
@Controller('lecture')
export class LectureController {
  constructor(private readonly lectureService: LectureService) {}

  @Post()
  async create(@Body() createLectureDto: CreateLectureDto) {
    return await this.lectureService.create(createLectureDto);
  }

  @Get()
  async findAll() {
    return await this.lectureService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.lectureService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateLectureDto: UpdateLectureDto) {
    return await this.lectureService.update(+id, updateLectureDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.lectureService.remove(+id);
  }
}
