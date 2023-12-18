import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-subscription-dialog',
  templateUrl: './add-subscription-dialog.component.html',
  styleUrls: ['./add-subscription-dialog.component.css']
})
export class AddSubscriptionDialogComponent implements OnInit {
  formInstance: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formInstance = this.fb.group({
      company: [''],
      date: [''],
      type: [''],
      price: [''],
      category: ['']
    });
  }

  ngOnInit(): void {}

  save(): void {
    console.log(this.formInstance.value);
  }
}
