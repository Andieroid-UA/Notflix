import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {
  @Input() message: string | undefined;
  @Input() folders: { name: string, count: number }[] | undefined;

  @Output() closeModal: EventEmitter<void> = new EventEmitter<void>();
  @Output() deleteFolder: EventEmitter<{ name: string, count: number }> = new EventEmitter<{ name: string, count: number }>();

  onCloseModal(): void {
    this.closeModal.emit();
  }

  onDeleteFolder(folder: { name: string, count: number }): void {
    this.deleteFolder.emit(folder);
  }
}
