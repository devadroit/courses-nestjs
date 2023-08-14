import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { UserLecture } from '../../user-lecture/entities/user-lecture.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  // Add other properties as per your requirements
  @OneToMany(() => UserLecture, userLecture => userLecture.user)
  userLectures: UserLecture[];
}
