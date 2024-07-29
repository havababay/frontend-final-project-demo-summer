import { Injectable } from '@angular/core';
import { Task } from '../shared/model/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private allTasks : Task[] = [
    new Task(1, "Wash Dishes", "Clean and dry all dishes"),
    new Task(2, "Vacuum Floors", "Remove dust and debris from floors"),
    new Task(3, "Laundry", "Wash, dry, and fold clothes"),
    new Task(4, "Cook Dinner", "Prepare a nutritious meal"),
  ];

  constructor() { }

  list() : Task[] {
    return this.allTasks;
  }

}
