// import { Component, Inject, OnInit } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
// import { Task } from '../task.model';



// @Component({
//   selector: 'app-task-edit-form-dialog',
//   templateUrl: './task-edit-form-dialog.component.html',
//   styleUrls: ['./task-edit-form-dialog.component.css']
// })
// export class TaskEditFormDialogComponent implements OnInit {
//   formInstance: FormGroup;

//   constructor(public dialogRef: MatDialogRef<TaskEditFormDialogComponent>,
//     @Inject(MAT_DIALOG_DATA) public data: Task) {
//     this.formInstance = new FormGroup({
//       "company":  new FormControl('', Validators.required),
//       "date": new FormControl('', Validators.required),
//       "type": new FormControl('', Validators.required),
//       "price": new FormControl('', Validators.required),
//       "category": new FormControl('', Validators.required)
//     });

//     this.formInstance.setValue(data);
//   }

//   ngOnInit(): void {

//   }

//    save(): void {
//     this.dialogRef.close({...this.formInstance.value});
//   }
// }




import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Task } from '../Models/task.model';
import { TaskService } from '../Services/task.service';


@Component({
  selector: 'app-task-edit-form-dialog',
  templateUrl: './task-edit-form-dialog.component.html',
  styleUrls: ['./task-edit-form-dialog.component.css']
})

export class TaskEditFormDialogComponent implements OnInit {

  formInstance: FormGroup;
  dialog: any;

/*   dialogRef: any;
  constructor(
    public dialog: MatDialog,
    private taskService: TaskService
  ) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  } */

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

