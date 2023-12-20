import { Component } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Inject } from '@angular/core';


@Component({
  selector: 'app-confirmation-delete-dialog',
  templateUrl: './confirmation-delete-dialog.component.html', 

  
  styleUrls: ['./confirmation-delete-dialog.component.css']
})


export class ConfirmationDeleteDialogComponent {
  
  constructor(
    public dialogRef: MatDialogRef<ConfirmationDeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { company: string }
  ) {}
  
}
