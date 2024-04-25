import { Injectable } from '@angular/core';

@Injectable()
export class AppBaseRequestOptions {
    headers: { [key: string]: string } = { 'Content-Type': 'application/json' };
}
