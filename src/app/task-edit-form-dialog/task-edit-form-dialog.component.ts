import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Task } from '../task.model';

@Component({
  selector: 'app-task-edit-form-dialog',
  templateUrl: './task-edit-form-dialog.component.html',
  styleUrls: ['./task-edit-form-dialog.component.css']
})
export class TaskEditFormDialogComponent implements OnInit {
  formInstance: FormGroup;

  constructor(public dialogRef: MatDialogRef<TaskEditFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Task) {
    this.formInstance = new FormGroup({
      "company":  new FormControl('', Validators.required),
      "date": new FormControl('', Validators.required),
      "type": new FormControl('', Validators.required),
      "price": new FormControl('', Validators.required),
      "category": new FormControl('', Validators.required)
    });

    this.formInstance.setValue(data);
  }

  ngOnInit(): void {

  }

  save(): void {
    this.dialogRef.close(Object.assign(new Task(), this.formInstance.value));
  }
}