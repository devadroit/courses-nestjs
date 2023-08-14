import { Injectable } from '@nestjs/common';
import { CreateLectureDto } from './dto/create-lecture.dto';
import { UpdateLectureDto } from './dto/update-lecture.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Lecture } from './entities/lecture.entity';

@Injectable()
export class LectureService {
  constructor(
    @InjectRepository(Lecture)
    private lectureRepository: Repository<Lecture>,
  ) {}

  async create(lectureData: Partial<Lecture>): Promise<Lecture> {
    const lecture = this.lectureRepository.create(lectureData);
    return this.lectureRepository.save(lecture);
  }

  async findAll(): Promise<Lecture[]> {
    return this.lectureRepository.find();
  }

  async findOne(id: number): Promise<Lecture> {
    let resp = await this.lectureRepository.findOne({ where: { id } });
    return resp;
  }

  async update(id: number, lectureData: Partial<Lecture>): Promise<Lecture> {
    await this.lectureRepository.update(id, lectureData);
    return this.lectureRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.lectureRepository.delete(id);
  }
}
