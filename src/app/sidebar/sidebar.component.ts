import { Component, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { AlertComponent } from '../alert/alert.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  folders = [
    { name: 'Trials', count: 0 },
    { name: 'All', count: 1 },
  ];

  newFolderName: string = '';
  errorMessage: string = '';

  showDeleteModal = false;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private viewContainerRef: ViewContainerRef) {}

  folderClicked(folder: { name: string; count: number }): void {
    // Handle folder click functionality here
    console.log(`Clicked folder: ${folder.name}`);
    // Potentially, update folder counts or perform other actions
  }

  addNewFolder(folderName: string): void {
    if (folderName.trim() !== '') {
      const newFolder = { name: folderName, count: 0 };
      this.folders.push(newFolder);
      this.errorMessage = ''; // Clear error message if folder is added
      // Potentially, perform actions after adding the folder
    } else {
      this.errorMessage = 'Folder name cannot be empty'; // Set error message
    }
  }

  deleteFolderClicked(folder: { name: string; count: number }): void {
    const alertComponentFactory = this.componentFactoryResolver.resolveComponentFactory(AlertComponent);
    const componentRef = this.viewContainerRef.createComponent(alertComponentFactory);

    componentRef.instance.message = `Are you sure you want to delete folder "${folder.name}"?`;
    componentRef.instance.selectedFolder = folder;

    componentRef.instance.deleteFolder.subscribe((folderToDelete: { name: string; count: number }) => {
      const index = this.folders.findIndex(f => f === folderToDelete);
      if (index !== -1) {
        this.folders.splice(index, 1);
        // Perform additional deletion actions or update UI
      }
      componentRef.destroy();
    });

    componentRef.instance.closeModal.subscribe(() => {
      componentRef.destroy();
    });
  }
}
