import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { Task } from './task.interface';
import { TaskService } from './task.service';
import { validParam } from "../../common/decorators/validParam.decorator";

@Controller('tasks')
export class TasksController {
    constructor(
        private taskService: TaskService
    ) { }

    @Get()
    async getAll(): Promise<Task[]> {
        return this.taskService.getAll();
    }

    @Get(":id")
    async getById(@validParam("id") id: string): Promise<Task> {
        return this.taskService.getById(id);
    }

    @Post()
    async create(@Body() task: Task): Promise<Task> {
        return this.taskService.create(task);
    }

    @Put(":id")
    async update(@validParam("id") id: string, @Body() task: Task): Promise<Task> {
        return this.taskService.update(id, task);
    }

    @Delete(":id")
    async delete(@validParam("id") id: string) {
        this.taskService.delete(id);
    }
}
