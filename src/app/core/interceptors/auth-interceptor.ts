import { HttpInterceptorFn } from '@angular/common/http';

import { inject } from '@angular/core';

import { AuthService } from '../services/auth.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  const authService = inject(AuthService);

  const token = authService.token();

  if (!token || authService.isExpired()) {
    localStorage.clear();
    window.location.replace(
      'http://localhost:4300'
    );
  }

  const request = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`
    }
  });

  return next(request);

};