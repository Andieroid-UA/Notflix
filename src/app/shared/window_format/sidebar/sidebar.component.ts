import { Component, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { AlertComponent } from 'src/app/shared/window_format/sidebar/folders/folder_alert/alert.component';

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


  // We can attach this to display different data in the main window/table
  folderClicked(folder: { name: string; count: number }): void {
    console.log(`Clicked folder: ${folder.name}`);
  }

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

  deleteFolderClicked(): void {
    const alertComponentFactory = this.componentFactoryResolver.resolveComponentFactory(AlertComponent);
    const componentRef = this.viewContainerRef.createComponent(alertComponentFactory);

    componentRef.instance.message = `Select the folder you would like to delete.`;
    componentRef.instance.folders = this.folders; // Pass the folders data to the modal component

    componentRef.instance.deleteFolder.subscribe((folderToDelete: { name: string; count: number }) => {
      const index = this.folders.findIndex(f => f === folderToDelete);
      if (index !== -1) {
        this.folders.splice(index, 1); // Delete the selected folder
      }
      componentRef.destroy();
    });

    componentRef.instance.closeModal.subscribe(() => {
      componentRef.destroy();
    });
  }






}
