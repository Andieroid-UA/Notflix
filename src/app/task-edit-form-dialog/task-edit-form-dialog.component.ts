

import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Task } from '../task.model';
import { TaskService } from '../task.service';


@Component({
  selector: 'app-task-edit-form-dialog',
  templateUrl: './task-edit-form-dialog.component.html',
  styleUrls: ['./task-edit-form-dialog.component.css']
})

export class TaskEditFormDialogComponent implements OnInit {

  formInstance: FormGroup;
  dialog: any;


  constructor(
    public dialogRef: MatDialogRef<TaskEditFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private taskService: TaskService 
  ) {
    this.formInstance = new FormGroup({
      company: new FormControl(this.data.company, Validators.required),
      date: new FormControl(this.data.date, Validators.required),
      type: new FormControl(this.data.type, Validators.required),
      price: new FormControl(this.data.price, Validators.required),
      category: new FormControl(this.data.category, Validators.required),
    });
  }

  ngOnInit(): void {}


  edit(task: Task): void {
    const dialogRef = this.dialog.open(TaskEditFormDialogComponent, {
      width: '250px',
      data: { ...task }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.taskService.edit(result); 
      }
    });


  }
  save(): void {
    this.dialogRef.close({...this.formInstance.value});
  } 


}

