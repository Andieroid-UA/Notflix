import { Component, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { AlertComponent } from 'src/app/alert/alert.component';

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

//The longest app we can place could be "This_is_an_exam"

  addNewFolder(folderName: string): void {
    if (folderName.trim() !== '') {
      if (folderName.trim().length <= 15) {
        const newFolder = { name: folderName, count: 0 };
        this.folders.push(newFolder);
        this.errorMessage = '';

        setTimeout(() => {
          this.errorMessage = '';
        }, 2000);
      } else {
        this.errorMessage = 'Folder name must be 15 characters or less';

        setTimeout(() => {
          this.errorMessage = '';
        }, 2000);
      }
    } else {
      this.errorMessage = 'Folder name cannot be empty';

      setTimeout(() => {
        this.errorMessage = '';
      }, 2000);
    }
  }

  deleteFolderClicked(): void {
    if (this.folders.length === 0) {
      // Display an error message when there are no folders to delete
      this.errorMessage = 'There are no folders to delete';

      // Reset error message after 3 seconds (adjust timing as needed)
      setTimeout(() => {
        this.errorMessage = '';
      }, 3000);
    } else {
      const alertComponentFactory = this.componentFactoryResolver.resolveComponentFactory(AlertComponent);
      const componentRef = this.viewContainerRef.createComponent(alertComponentFactory);

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

}
