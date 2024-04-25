import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-add-image-album',
  templateUrl: './add-image-album.component.html',
})
export class AddImageAlbumComponent {
  private _title: string = '';
  private _userId: number = 0;
  private _image: any = null; // Add private field for image

  constructor(
    private dataService: DataService,
    private notificationService: NotificationService
  ) {}

  addPhoto() {
    if (!this._title || !this._userId || !this._image) {
      this.notificationService.printErrorMessage('Title, user ID, and image are required.');
      return;
    }

    this.dataService.createPhoto(this._image, this._title).subscribe(
      () => {
        // Handle success
        this.notificationService.printSuccessMessage('Photo added successfully.');
        this.clearFields();
      },
      (error: any) => { // Specify the type of 'error' parameter explicitly
        // Handle error
        this.notificationService.printErrorMessage('Failed to add photo.');
      }
    );
  }

  onImageChange(event: any) {
    if (event.target.files && event.target.files.length > 0) {
      this._image = event.target.files[0];
    }
  }

  clearFields() {
    this._title = '';
    this._userId = 0;
    this._image = null;
  }
}
