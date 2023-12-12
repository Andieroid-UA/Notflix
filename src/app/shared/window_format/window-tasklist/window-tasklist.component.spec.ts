import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowTasklistComponent } from './window-tasklist.component';

describe('WindowCenterComponent', () => {
  let component: WindowTasklistComponent;
  let fixture: ComponentFixture<WindowTasklistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WindowTasklistComponent]
    });
    fixture = TestBed.createComponent(WindowTasklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
