import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'photohub',
  templateUrl: 'static/app/app.component.html'
})
export class AppComponent {
    title: string = 'PhotoHub';
    constructor(private router: Router) {}

    isUserLoggedIn(): boolean {
        const currentUser = localStorage.getItem('currentUser');
        return currentUser !== null; // Check if currentUser is not null
    }

    getUserId(): string {
        const currentUser = localStorage.getItem('currentUser');
        if (currentUser !== null) {
            return JSON.parse(currentUser).id; // Parse only if currentUser is not null
        }
        return ''; // Return a default value if currentUser is null
    }

    getUserName(): string {
        const currentUser = localStorage.getItem('currentUser');
        if (currentUser !== null) {
            return JSON.parse(currentUser).username; // Parse only if currentUser is not null
        }
        return 'Account'; // Return a default value if currentUser is null
    }

    logout() {
        localStorage.removeItem('currentUser');
    }
}
