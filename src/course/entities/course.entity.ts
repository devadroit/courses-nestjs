import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Lecture } from '../../lecture/entities/lecture.entity';

@Entity()
export class Course {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ nullable: true })
  description?: string;

  // Add additional columns as per your requirements
  @OneToMany(() => Lecture, lecture => lecture.course)
  lectures: Lecture[];
}
