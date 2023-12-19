import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FolderService {
  folders = [
    { name: 'Trials', count: 0 },
    { name: 'All', count: 1 },
    // ... other folders
  ];

  constructor() {
    // Example of updating a specific folder's count in the constructor
    const folderToUpdate = this.folders.find(folder => folder.name === 'Trials');
    if (folderToUpdate) {
      folderToUpdate.count += 1; // Update the count as needed
    }
  }

  getFolders(): { name: string, count: number }[] {
    // You can modify this function to fetch folders from an API if needed
    return this.folders;
  }

  addNewFolder(folderName: string): void {
    // Logic to add a new folder
    const newFolder = { name: folderName, count: 0 };
    this.folders.push(newFolder);
    // Potentially, perform actions after adding the folder
  }
}
