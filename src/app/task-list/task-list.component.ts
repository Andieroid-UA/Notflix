import {
  AfterViewInit,
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDeleteDialogComponent } from '../confirmation-delete-dialog/confirmation-delete-dialog.component';
import { TaskEditFormDialogComponent } from '../task-edit-form-dialog/task-edit-form-dialog.component';
import { TaskService } from '../task.service';
import { Task } from '../task.model';
import { ActivatedRoute, Router } from '@angular/router';
import { AddSubscriptionDialogComponent } from 'src/app/add-subscription-dialog/add-subscription-dialog.component';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})

export class TaskListComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
 /*  @Output() currentSelectedData = new EventEmitter<TaskEditFormDialogComponent>();

  handleSelectedData(data: Task) {
    this.currentSelectedData.emit(data);
  }; */

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
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.dataSource = new MatTableDataSource<Task>();
  }

  openDialog() {
    /* this.router.navigate(['new'], { relativeTo: this.route }); */
    this.dialog.open(AddSubscriptionDialogComponent, {
      width: '400px',
    });
    /*  dialog.afterClosed().subscribe(result => {
    if (result) {
      this.dataService.add(result);
    }
  }); */
  }

  edit(data: Task) {
    const dialogRef = this.dialog.open(TaskEditFormDialogComponent, {
      width: '400px',
      data: data,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.taskService.edit(result);
      }
    });
  }

  delete(id: any) {
    const dialogRef = this.dialog.open(ConfirmationDeleteDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.taskService.remove(id);
      }
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  /**
   * initialize data-table by providing persons list to the dataSource.
   */
  ngOnInit(): void {
    this.taskService.getAll();
    this.serviceSubscribe = this.taskService.task$.subscribe((res) => {
      this.dataSource.data = res;
    });
  }

  ngOnDestroy(): void {
    this.serviceSubscribe.unsubscribe();
  }
  private filter() {
    this.dataSource.filterPredicate = (data: Task, filter: string) => {
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
}
