import { Component, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { AlertComponent } from 'src/app/alert/alert.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent {
  folders = [
    { name: 'Folder 1', count: 5 },
    { name: 'Folder 2', count: 10 },
    // Add more folders as needed
  ];

  newFolderName: string = '';
  errorMessage: string = '';
  showDeleteModal = false;
  folderToDelete: any = null;

  // Method to add a new folder
  addNewFolder(folderName: string): void {
    if (folderName.trim() !== '') {
      const newFolder = { name: folderName, count: 0 };
      this.folders.push(newFolder);
      this.errorMessage = '';
    } else {
      this.errorMessage = 'Folder name cannot be empty';
      console.log('Folder name cannot be empty');
    }
  }

  // Method to confirm folder deletion
  deleteFolderConfirmation(folder: any): void {
    this.showDeleteModal = true;
    this.folderToDelete = folder;
  }

  // Method to delete the folder
  deleteFolder(): void {
    const index = this.folders.indexOf(this.folderToDelete);
    if (index !== -1) {
      this.folders.splice(index, 1);
      this.showDeleteModal = false;
    }
  }

  // Method to close the modal without deleting
  closeDeleteModal(): void {
    this.showDeleteModal = false;
    this.folderToDelete = null;
  }

  folderClicked(folder: any): void {
    // Implement the logic for when a folder is clicked
    console.log('Clicked folder:', folder);
    // You can add more functionality here as needed
  }
}
