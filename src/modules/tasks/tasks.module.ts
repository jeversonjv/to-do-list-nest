import { Module } from '@nestjs/common';
import { TaskSchema } from './schemas/task.schema';
import { TaskService } from './task.service';
import { TasksController } from './tasks.controller';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Task', schema: TaskSchema }])
  ],
  controllers: [TasksController],
  providers: [TaskService],
})

export class TasksModule { }