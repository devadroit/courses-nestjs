import { Module } from '@nestjs/common';
import { UserLectureService } from './user-lecture.service';
import { UserLectureController } from './user-lecture.controller';

@Module({
  controllers: [UserLectureController],
  providers: [UserLectureService]
})
export class UserLectureModule {}
