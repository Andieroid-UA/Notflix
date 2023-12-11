import { Component } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {}
 /* isOpen = false;

  @Input() task: Task | null = null;
  @Output() edit = new EventEmitter<Task>();

  @ViewChild('addTaskForm') addTaskForm!: NgForm;
  @Output() addNewTaskEvent: EventEmitter<Task> = new EventEmitter<Task>();

  openModal() {
    this.isOpen = true;
    document.body.classList.add('modal-open');
  }

  closeModal() {
    this.isOpen = false;
    document.body.classList.remove('modal-open');
  }

  onFormSubmit() {
    const {
      taskTitle: title,
      dueDate,
      taskPriority: priority,
      taskStatus: status,
    } = this.addTaskForm.value;
    const newTask = new Task(title, new Date(dueDate), priority, status);
    this.addNewTaskEvent.emit(newTask);
    this.closeModal();
  } */
