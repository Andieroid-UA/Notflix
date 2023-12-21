import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MatDialogRef } from '@angular/material/dialog';
import { TaskService } from '../Services/task.service';

@Component({
  selector: 'app-add-subscription-dialog',
  templateUrl: './add-subscription-dialog.component.html',
  styleUrls: ['./add-subscription-dialog.component.css']
})
export class AddSubscriptionDialogComponent {
  formInstance: FormGroup;

  constructor(
    private fb: FormBuilder,
    private taskService: TaskService,
    private dialogRef: MatDialogRef<AddSubscriptionDialogComponent>
    ) {
    this.formInstance = this.fb.group({
      company: ['', Validators.required],
      date: ['', Validators.required],
      type: ['', Validators.required],
      price: ['', Validators.required],
      category: ['', Validators.required],
    });

    console.log(this.formInstance.valid);
  }

  save(): void {
    console.log("i am in the save function of add-subscription-dialog.component.ts");
    if (this.formInstance.valid) {
      console.log("formInstance is valid", this.formInstance);
      var newTask = this.formInstance.value;
      //var newId = 1;
      // if( this.taskService.task.length > 1)
      // {
      //   console.log("time to search for the highest existing id value");
      //   var max = this.taskService.task.reduce((prev, current) => (prev && prev.id > current.id) ? prev : current);
      //   console.log("max", max);
      //   newId = max.id + 1;
      // }
      // newTask.id = newId;
      this.taskService.add(newTask, true);
      this.dialogRef.close();
    }
  }
}
