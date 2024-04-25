import { Component } from '@angular/core';
import { IAlbum } from '../../models/album';
import { DataService } from '../../services/data.service';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-add-album',
  templateUrl: './add-album.component.html',
})
export class AddAlbumComponent {
  title: string = '';
  userId: number = 0;
  isPrivate: boolean = false;
  isDisabled: boolean = false;

  constructor(
    private dataService: DataService,
    private notificationService: NotificationService
  ) {}

  createAlbum() {
    if (!this.title || !this.userId) {
      this.notificationService.printErrorMessage('Title and user ID are required.');
      return;
    }

    const album: IAlbum = {
      title: this.title,
      userId: this.userId,
      id: 0,
      creationDate: new Date(),
      totalPhotos: 0,
      totalLikes: 0,
      username: '', // Placeholder values
      thumbnail: '', // Placeholder values
    };

    this.dataService.addAlbum(this.title, this.isPrivate).subscribe(
      () => {
        // Handle success
        this.notificationService.printSuccessMessage('Album added successfully.');
        this.clearFields();
      },
      (error: any) => { // Specify the type of 'error' parameter explicitly
        // Handle error
        this.notificationService.printErrorMessage('Failed to add album.');
      }
    );
  }

  clearFields() {
    this.title = '';
    this.userId = 0;
    this.isPrivate = false;
  }
}
