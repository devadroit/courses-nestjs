import { Injectable } from '@nestjs/common';
import { CreateUserLectureDto } from './dto/create-user-lecture.dto';
import { UpdateUserLectureDto } from './dto/update-user-lecture.dto';

@Injectable()
export class UserLectureService {
  create(createUserLectureDto: CreateUserLectureDto) {
    return 'This action adds a new userLecture';
  }

  findAll() {
    return `This action returns all userLecture`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userLecture`;
  }

  update(id: number, updateUserLectureDto: UpdateUserLectureDto) {
    return `This action updates a #${id} userLecture`;
  }

  remove(id: number) {
    return `This action removes a #${id} userLecture`;
  }
}
