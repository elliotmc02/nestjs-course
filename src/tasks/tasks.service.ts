import { Injectable } from '@nestjs/common';

export interface Task {
  name: string;
  description: string;
}

@Injectable()
export class TasksService {
  getTasks(): Task {
    return {
      name: 'Task 1',
      description: 'Description 1',
    };
  }

  createTask() {
    return 'Creating task';
  }

  updateTask() {
    return 'Updating task';
  }

  deleteTask() {
    return 'Deleting task';
  }

  patchTask() {
    return 'Patching task';
  }
}
