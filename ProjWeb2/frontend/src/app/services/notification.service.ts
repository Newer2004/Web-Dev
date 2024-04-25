import { Injectable } from '@angular/core';

declare var alertify: any;

@Injectable()
export class NotificationService {
    private _notifier: any = alertify;
    constructor() {
    }

    printSuccessMessage(message: string) {
        this._notifier.success(message);
    }

    printErrorMessage(message: string) {
        this._notifier.error(message);
    }

    printConfirmationDialog(message: string, okCallback: () => any) {
    this._notifier.confirm(message, function (e: boolean) { // Explicitly declare the type of 'e' as boolean
        if (e) {
            okCallback();
        } else {
            // Handle the case where the user cancels the confirmation
        }
    });
}
}
