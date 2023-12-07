import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { FolderService } from './folder.service';
import { Folder } from "./folder.model"; // Import the Folder interface

@Injectable({
  providedIn: "root"
})
export class HTTPService {
  firebaseRootURL = "https://trialtracker-f66c4-default-rtdb.firebaseio.com/folders.json";

  constructor(
    private http: HttpClient,
    private folderService: FolderService
  ) {}

  saveFoldersToFirebase() {
    const folders = this.folderService.getFolders();

    this.http.put(this.firebaseRootURL, folders).subscribe(
      res => {
        console.log("Firebase DB Response:", res);
      },
      error => {
        console.error("Error saving to Firebase:", error);
      }
    );
  }

  fetchFoldersFromFirebase() {
    return this.http.get(this.firebaseRootURL).subscribe(
      (res: any) => {
        if (res) {
          const folders: Folder[] = Object.keys(res).map(key => ({
            name: res[key].name,
            count: res[key].count
          }));
          this.folderService.setFolders(folders);
        }
      },
      error => {
        console.error("Error fetching from Firebase:", error);
      }
    );
  }
}
