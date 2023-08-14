import { Test, TestingModule } from '@nestjs/testing';
import { UserLectureService } from './user-lecture.service';

describe('UserLectureService', () => {
  let service: UserLectureService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserLectureService],
    }).compile();

    service = module.get<UserLectureService>(UserLectureService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
