import { Inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { STORAGE_KEYS } from '../constants/storage.constants';

@Injectable({
    providedIn: 'root'
})

export class AuthService {

    private readonly _token = signal<string | null>(null);
    token = this._token.asReadonly();

    constructor(
        @Inject(PLATFORM_ID)
        private platformId: Object
    ) {
        if (isPlatformBrowser(this.platformId)) {
            const token = localStorage.getItem(
                STORAGE_KEYS.TOKEN
            );
            this._token.set(token);
        }

    }

    setToken(token: string): void {
        if (isPlatformBrowser(this.platformId)) {
            localStorage.setItem(
                STORAGE_KEYS.TOKEN,
                token
            );

        }
        this._token.set(token);
    }

    clearSession(): void {
        if (isPlatformBrowser(this.platformId)) {
            localStorage.removeItem(
                STORAGE_KEYS.TOKEN
            );

        }
        this._token.set(null);
    }

    isAuthenticated(): boolean {
        return !!this._token();
    }

}