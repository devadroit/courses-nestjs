import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { Lecture } from '../../lecture/entities/lecture.entity';

@Entity()
export class UserLecture {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  lectureId: number;

  @ManyToOne(() => User, user => user.userLectures)
  @JoinColumn({ name: 'userId' })
  user: User;

  @ManyToOne(() => Lecture, lecture => lecture.userLectures)
  @JoinColumn({ name: 'lectureId' })
  lecture: Lecture;
}
