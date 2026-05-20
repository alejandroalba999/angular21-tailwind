import { NgClass } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'fe-card-list',
  imports: [ButtonModule, CardModule],
  templateUrl: './card-list.html',
  styleUrl: './card-list.css',
})
export class CardList {

  private readonly router = inject(Router);

  @Input() cardSize: 'xs' | 'sm' | 'md' | 'lg' = 'lg';
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() modulos: ModuloDashboard[] = [];

  get minHeighCard(): number {
    const sizes: Record<string, number> = {
      xs: 50,
      sm: 100,
      md: 150,
      lg: 200
    };
    return sizes[this.cardSize] || 200;
  }

  irModulo(ruta: string): void {
    this.router.navigate([ruta]);
  }

}
