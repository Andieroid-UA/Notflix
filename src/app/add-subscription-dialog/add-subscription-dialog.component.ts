import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MatDialogRef } from '@angular/material/dialog';
import { TaskService } from '../task.service';



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
  }

  save(): void {
    if (this.formInstance.valid) {

      this.taskService.add(this.formInstance.value);
      this.dialogRef.close();
    }
  }
}  
