import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NotificationService } from './notification.service';
import { IUser } from '../models/user';
import { IAlbum } from '../models/album';
import { IAlbumForSelection } from '../models/album-selection';
import { IPhoto } from '../models/photo';
import { IPaginated } from '../models/paginated';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UtilityService } from './utility.service';


@Injectable()
export class DataService {
    constructor(
        private http: HttpClient,
        private utilityService: UtilityService,
        private notificationService: NotificationService
    ) { }

    getUsers(page: number, pageSize: number): Observable<IPaginated<IUser>> {
        const url = `api/users?page=${page}&pageSize=${pageSize}`;
        return this.http.get<IPaginated<IUser>>(url, { headers: this.headers() })
            .pipe(
                catchError(this.handleError)
            );
    }

    getUrlForPagination(url: string, page: number, pageSize: number): string {
        const query: string = url.includes('?') ? '&page=' : '?page=';
        if (pageSize)
            return url + query + page + '&page_size=' + pageSize;
        else
            return url + query + page;
    }

    getCurrentUserUsername(): string {
  let currentUser: any;
  // @ts-ignore
  currentUser = JSON.parse(localStorage.getItem('currentUser'));
  if (currentUser && currentUser.username) {
    return currentUser.username; // Return the username if it exists
  } else {
    return ''; // Return an empty string as a default value if username is null or undefined
  }
}

    getCurrentUserId(): string {
  let currentUser: any;
  // @ts-ignore
  currentUser = JSON.parse(localStorage.getItem('currentUser'));
  if (currentUser && currentUser.id) {
    return currentUser.id; // Return the user id if it exists
  } else {
    return ''; // Return an empty string as a default value if id is null or undefined
  }
}

    getUserAlbums(userId: number, page: number, pageSize?: number): Observable<IPaginated<IAlbum>> {
        return this.http.get<IPaginated<IAlbum>>(this.getUrlForPagination(`api/albums?user_id=${userId}`, page, pageSize || 0), { headers: this.headers() })
            .pipe(
                catchError(this.handleError)
            );
    }

    getUserAlbumsForSelection(userId: number): Observable<IAlbumForSelection[]> {
        return this.http.get<IAlbumForSelection[]>(`api/albums?user_id=${userId}&terse=true`, { headers: this.headers() })
            .pipe(
                catchError(this.handleError)
            );
    }

    getUserPhotos(userId: number, page: number, pageSize?: number): Observable<IPaginated<IPhoto>> {
        return this.http.get<IPaginated<IPhoto>>(this.getUrlForPagination(`api/photos?user_id=${userId}`, page, pageSize || 0), { headers: this.headers() })
            .pipe(
                catchError(this.handleError)
            );
    }

    getAlbum(id: number): Observable<IAlbum> {
        return this.http.get<IAlbum>(`api/albums/${id}`, { headers: this.headers() })
            .pipe(
                catchError(this.handleError)
            );
    }

    getPhoto(id: number): Observable<IPhoto> {
        return this.http.get<IPhoto>(`api/photos/${id}`, { headers: this.headers() })
            .pipe(
                catchError(this.handleError)
            );
    }

    addAlbum(title: string, _private: boolean): Observable<IAlbum> {
        const json = JSON.stringify({ title: title, private: _private });
        return this.http.post<IAlbum>('api/albums', json, { headers: this.headers() })
            .pipe(
                catchError(this.handleError)
            );
    }

    createPhoto(image: any, title: string, albumId?: number): Observable<void> {
        const input = new FormData();
        input.append('image', image);
        input.append('title', title);
        input.append('albumId', albumId ? albumId.toString() : '');
        return this.http.post<void>('api/photos', input, { headers: this.headers(true) })
            .pipe(
                catchError(this.handleError)
            );
    }

    createLike(photoId: number): Observable<void> {
        const json = JSON.stringify({ userId: this.getCurrentUserId() });
        return this.http.post<void>(`api/photos/${photoId}/set_like`, json, { headers: this.headers() })
            .pipe(
                catchError(this.handleError)
            );
    }

    deleteAlbum(id: number): Observable<void> {
        return this.http.delete<void>(`api/albums/${id}`, { headers: this.headers() })
            .pipe(
                catchError(this.handleError)
            );
    }

    deletePhoto(id: number): Observable<void> {
        return this.http.delete<void>(`api/photos/${id}`, { headers: this.headers() })
            .pipe(
                catchError(this.handleError)
            );
    }

    updateAlbum(id: number, title: string): Observable<void> {
        const json = JSON.stringify({ id: id, title: title });
        return this.http.patch<void>(`api/albums/${id}`, json, { headers: this.headers() })
            .pipe(
                catchError(this.handleError)
            );
    }

    updatePhoto(id: number, title: string, albumId: number): Observable<void> {
        const json = JSON.stringify({ title: title, albumId: albumId });
        return this.http.patch<void>(`api/photos/${id}`, json, { headers: this.headers() })
            .pipe(
                catchError(this.handleError)
            );
    }

    private handleError(error: any) {
    const applicationError = error.headers.get('Application-Error');
    const serverError = error.error;
    let modelStateErrors: string | null = null; // Adjust the type to allow null

    if (!serverError.type) {
        for (const key in serverError) {
            if (serverError[key]) {
                if (modelStateErrors === null) {
                    modelStateErrors = ''; // Initialize with an empty string if it's null
                }
                modelStateErrors += serverError[key] + '\n';
            }
        }
    }

    if (error.status == 401) {
        localStorage.removeItem('currentUser');
        return throwError('Log in please :)');
    }

    if (error.status == 403) {
        localStorage.removeItem('currentUser');
        return throwError("You tried to access secret data. Log in again.");
    }

    if (error.status == 404) {
        this.utilityService.navigate('/');
        return throwError("This page does not exist");
    }

    // Handle the case where modelStateErrors might still be null
    modelStateErrors = modelStateErrors === null ? '' : modelStateErrors;

    return throwError(applicationError || modelStateErrors || 'Server error');
}

    private headers(formdata = false): HttpHeaders {
        const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
        if (currentUser && currentUser.token) {
            let headers = new HttpHeaders().set('Authorization', `JWT ${currentUser.token}`);
            if (!formdata) {
                headers = headers.set('Content-Type', 'application/json');
            }
            return headers;
        } else {
            return new HttpHeaders();
        }
    }
}
