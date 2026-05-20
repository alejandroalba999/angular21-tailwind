import { Location } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-not-found',
  imports: [
    ButtonModule,
    CardModule,
    RouterModule
  ],
  templateUrl: './not-found.html',
  styleUrl: './not-found.css',
})
export class NotFound {
  location = inject(Location);
}
