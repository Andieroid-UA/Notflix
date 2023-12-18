import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
@Output() currentPage = new EventEmitter<string>();
  collapsed: boolean = true;
  show: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onSelectedPage(page: string) {
    this.currentPage.emit(page);
  }
}
