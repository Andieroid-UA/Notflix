import { EventEmitter, Injectable } from "@angular/core";
import { Task } from "../task.model";

@Injectable({
  providedIn: "root"
})
export class DrawerService {
  taskSelected = new EventEmitter<Task>();
  taskListChanged = new EventEmitter<Task[]>();

  private myTask: Task[] = [
    new Task('Netflix', '12/31/2023', 'monthly', '$12.99', 'Streaming Service'),
    new Task('Hulu', '12/31/2023', 'monthly', '$7.99', 'Streaming Service'),
    new Task('Disney', '12/31/2023', 'yearly', '$60.00', 'Streaming Service'),
    new Task('Amazon Prime', '12/31/2023', 'monthly', '$11.99', 'Streaming Service'),
    new Task('HBO', '12/31/2023', 'monthly', '$22.99', 'Streaming Service'),
    new Task('Peacock', '12/31/2023', 'monthly', '$17.99', 'Streaming Service'),
    new Task('Paramount', '12/31/2023', 'monthly', '$10.99', 'Streaming Service'),
    new Task('Coursera', '12/31/2023', 'yearly', '$69.99', 'Education'),
    new Task('Udemy', '12/31/2023', 'yearly', '$99.00', 'Education'),
    new Task('Barkbox', '12/31/2023', 'yearly', '$54.99', 'Mail Service')
  ];

   // Read
  getTask(idx: number) {
    return this.myTask.slice();
  }

  //Create
  saveTask(data: Task) {
    this.myTask.push(data)
    this.taskListChanged.emit(this.myTask.slice())
  }

  // Delete
  removeData(idx: number) {
    if (idx !== -1) {
      this.myTask.splice(idx, 1)
      this.taskListChanged.emit(this.myTask.slice());
    }
  }
}
