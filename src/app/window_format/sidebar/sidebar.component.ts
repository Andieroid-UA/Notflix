import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent {
  folders = [
    { name: 'Trials', count: 0 },
    { name: 'All', count: 1 },
    // ... other folders
  ];

  newFolderName: string = ''; // Ensure 'newFolderName' is declared as a string property

  constructor() {
    // Example of updating a specific folder's count in the constructor
    const folderToUpdate = this.folders.find(folder => folder.name === 'Trials');
    if (folderToUpdate) {
      folderToUpdate.count += 1; // Update the count as needed
    }
  }

  folderClicked(folder: { name: string, count: number }): void {
    // Handle folder click functionality here
    console.log(`Clicked folder: ${folder.name}`);
    // Potentially, update folder counts or perform other actions
  }

  addNewFolder(folderName: string): void {
    // Logic to add a new folder
    const newFolder = { name: folderName, count: 0 };
    this.folders.push(newFolder);
    // Potentially, perform actions after adding the folder
  }
}

