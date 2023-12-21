import {AfterViewInit, Component, EventEmitter, OnDestroy, OnInit, Output, ViewChild, inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDeleteDialogComponent } from '../confirmation-delete-dialog/confirmation-delete-dialog.component';

import { TaskService } from '../Services/task.service';
import { Task } from '../Models/task.model';
import { ActivatedRoute, Router } from '@angular/router';
import { AddSubscriptionDialogComponent } from '../add-subscription-dialog/add-subscription-dialog.component';
import { TaskEditFormDialogComponent } from '../task-edit-form-dialog/task-edit-form-dialog.component';
import { ComponentFactoryResolver, ViewContainerRef } from '@angular/core';

import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})

export class TaskListComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  firestore: Firestore = inject(Firestore);
  items$: Observable<any[]>;

  public displayedColumns: string[] = ['company', 'date', 'type', 'price', 'category'];
  public columnsToDisplay: string[] = [...this.displayedColumns, 'actions'];
/* columnsToDisplay is <app-data>

  /**
   * it holds a list of active filter for each column.
   * example: {firstName: {contains: 'person 1'}}
   *
   */
  public columnsFilters = {};

  public dataSource: MatTableDataSource<Task>;
  private serviceSubscribe: Subscription;

  constructor(
    private taskService: TaskService,
    public dialog: MatDialog,
    private componentFactoryResolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef
  ) {
    this.dataSource = new MatTableDataSource<Task>();

    console.log("firestore", this.firestore);
    const aCollection = collection(this.firestore, 'tasks')
    this.items$ = collectionData(aCollection);
    console.log("items", this.items$);
  }

  // newFolderName: string = '';
  // errorMessage: string = '';
  // showDeleteModal = false;

  openDialog() {
    this.dialog.open(AddSubscriptionDialogComponent, {
      width: '400px',
    });
  }

  edit(task: Task): void {
    console.log("editing task", task);
    const dialogRef = this.dialog.open(TaskEditFormDialogComponent, {
      width: '400px',
      data: { ...task }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.taskService.edit(result, task.id);
        //this.taskService.edit(result);
      }
    });
  }


  delete(index: string) {
    // const dialogRef = this.dialog.open(ConfirmationDeleteDialogComponent);

    // let company = "test";

    // dialogRef.afterClosed().subscribe(result => {
    //   if (result === company) {
    //     //this.taskService.delete(company);
    //   }
    // });

    console.log("I am running tasklist component delete function with index ", index);
    var tasks = JSON.parse(localStorage.getItem("listoftasks"));
    console.log("the list of tasks is", tasks);

    var taskToRemove = {};
    for(var i in tasks) {
      console.log("comparing", (parseInt(i)+1).toString(), "to", index['id'].toString());
      if(tasks[i]['id'].toString() == index['id'].toString()) {
        taskToRemove = tasks[i];
      }
    }
    console.log("task to remove is", taskToRemove);
    this.taskService.remove(taskToRemove['id']);
  }













  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  /**
   * initialize data-table by providing persons list to the dataSource.
   */
  ngOnInit(): void {
    var tasks = JSON.parse(localStorage.getItem("listoftasks"));
    console.log("I am in task-list component ngOnInit function and can see tasks ", tasks);
    this.taskService.getTasks();
    this.serviceSubscribe = this.taskService.task$.subscribe((res) => {
      this.dataSource.data = res;
    });

    if( tasks.length > 0 ) {
      console.log("loading tasks into the ui list");
      //this.taskService.setTasks(tasks);
      for( var i in tasks ) {
        this.taskService.add(tasks[i], false);

      }
    }

  }

  ngOnDestroy(): void {
    this.serviceSubscribe.unsubscribe();
  }

  private filter() {
    this.dataSource.filterPredicate = (data: Task) => {
      let find = true;

      for (var columnName in this.columnsFilters) {
        let currentData = '' + data[columnName];

        //if there is no filter, jump to next loop, otherwise do the filter.
        if (!this.columnsFilters[columnName]) {
          return;
        }

        let searchValue = this.columnsFilters[columnName]['contains'];

        if (!!searchValue && currentData.indexOf('' + searchValue) < 0) {
          find = false;
          //exit loop
          return;
        }

        searchValue = this.columnsFilters[columnName]['equals'];

        if (!!searchValue && currentData != searchValue) {
          find = false;
          //exit loop
          return;
        }

        searchValue = this.columnsFilters[columnName]['greaterThan'];

        if (!!searchValue && currentData <= searchValue) {
          find = false;
          //exit loop
          return;
        }

        searchValue = this.columnsFilters[columnName]['lessThan'];

        if (!!searchValue && currentData >= searchValue) {
          find = false;
          //exit loop
          return;
        }

        searchValue = this.columnsFilters[columnName]['startWith'];

        if (!!searchValue && !currentData.startsWith('' + searchValue)) {
          find = false;
          //exit loop
          return;
        }

        searchValue = this.columnsFilters[columnName]['endWith'];

        if (!!searchValue && !currentData.endsWith('' + searchValue)) {
          find = false;
          //exit loop
          return;
        }
      }
      return find;
    };

    this.dataSource.filter = null;
    this.dataSource.filter = 'activate';

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  /**

   * Create a filter for the column name and operate the filter action.

   */

  applyFilter(columnName: string, operationType: string, searchValue: string) {
    this.columnsFilters[columnName] = {};
    this.columnsFilters[columnName][operationType] = searchValue;
    this.filter();
  }

  /**

   * clear all associated filters for column name.

   */

  clearFilter(columnName: string) {
    if (this.columnsFilters[columnName]) {
      delete this.columnsFilters[columnName];
      this.filter();
    }
  }

  //Old code for the folder storage

    // We can attach this to display different data in the main window/table

    // folderClicked(folder: { name: string; count: number }): void {
    //   console.log(`Clicked folder: ${folder.name}`);
    // }

}
