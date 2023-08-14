import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CourseModule } from './course/course.module';
import { LectureModule } from './lecture/lecture.module';
import { UserModule } from './user/user.module';
import { UserLectureModule } from './user-lecture/user-lecture.module';

@Module({
  imports: [CourseModule, LectureModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      /* username: 'dev',
      password: 'admin', */
      database: 'course_management_db',
      entities: ["dist/**/*.entity{.ts,.js}"],
      synchronize: true,
    }),
    CourseModule,
    LectureModule,
    UserModule,
    UserLectureModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
