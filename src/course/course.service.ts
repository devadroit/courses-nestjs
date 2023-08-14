import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Course } from './entities/course.entity';

@Injectable()
export class CourseService {
  constructor(
    @InjectRepository(Course)
    private courseRepository: Repository<Course>,
  ) {}
  
  async create(courseData: Partial<Course>): Promise<Course> {
    const course = this.courseRepository.create(courseData);
    return this.courseRepository.save(course);
  }

  async findAll(): Promise<Course[]> {
    return this.courseRepository.find();
  }

  async findOne(id: number): Promise<Course> {
    let resp = await this.courseRepository.findOne({ where: { id } });
    return resp
  }

  async update(id: number, courseData: Partial<Course>): Promise<Course> {
    await this.courseRepository.update(id, courseData);
    return this.courseRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.courseRepository.delete(id);
  }
}
