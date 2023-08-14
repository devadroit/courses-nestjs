import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { Course } from '../../course/entities/course.entity';
import { UserLecture } from '../../user-lecture/entities/user-lecture.entity';

@Entity()
export class Lecture {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  //Relations between tables
  @ManyToOne(() => Course, course => course.lectures)
  @JoinColumn({ name: 'courseId' })
  course: Course;

  @OneToMany(() => UserLecture, userLecture => userLecture.lecture)
  userLectures: UserLecture[];
  // Add additional columns as per your requirements
}
