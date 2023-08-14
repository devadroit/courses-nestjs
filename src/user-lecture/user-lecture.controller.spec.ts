import { Test, TestingModule } from '@nestjs/testing';
import { UserLectureController } from './user-lecture.controller';
import { UserLectureService } from './user-lecture.service';

describe('UserLectureController', () => {
  let controller: UserLectureController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserLectureController],
      providers: [UserLectureService],
    }).compile();

    controller = module.get<UserLectureController>(UserLectureController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
