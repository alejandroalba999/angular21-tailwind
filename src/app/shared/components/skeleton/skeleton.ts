import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkeletonModule } from 'primeng/skeleton';

@Component({
  selector: 'fe-skeleton',
  imports: [
    CommonModule,
    SkeletonModule
  ],
  templateUrl: './skeleton.html',
  styleUrl: './skeleton.css',
})
export class FeSkeletonComponent {
  rows = input<number>(5);
  columns = input<number>(6);
  height = input<string>('2.5rem');
}
