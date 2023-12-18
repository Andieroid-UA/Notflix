import { Component } from '@angular/core';
import { Task } from '../task.model';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.css']
})
export class DrawerComponent {
  selectedTask = Task;
}
