import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppBaseRequestOptions } from './app-base-request-options';
import routing from './app.routes';

import { DataService } from './services/data.service';
import { AuthenticationService } from './services/authentication.service';
import { NotificationService } from './services/notification.service';
import { UtilityService } from './services/utility.service';

import { EqualValidator } from './directives/equal-validator.directive';

import { AuthGuard } from './guards/auth.guard';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UserAlbumsComponent } from './components/albums/user-albums.component';
import { AlbumDetailComponent } from './components/albums/album-detail.component';
import { AddAlbumComponent } from './components/albums/add-album.component';
import { AddImageAlbumComponent } from './components/albums/add-image-album.component';
import { ChangeAlbumComponent } from './components/albums/change-album.component';
import { UserPhotosComponent } from './components/photos/user-photos.component';
import { AddImageComponent } from './components/photos/add-image.component';
import { ChangeImageComponent } from './components/photos/change-image.component';
import { UsersComponent } from './components/users/users.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        RouterModule,
        routing
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        UserAlbumsComponent,
        AlbumDetailComponent,
        AddAlbumComponent,
        AddImageAlbumComponent,
        ChangeAlbumComponent,
        UserPhotosComponent,
        AddImageComponent,
        ChangeImageComponent,
        UsersComponent,
        EqualValidator
    ],
    providers: [
        AuthGuard,
        AuthenticationService,
        NotificationService,
        DataService,
        UtilityService,
        { provide: 'AppBaseRequestOptions', useClass: AppBaseRequestOptions }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
