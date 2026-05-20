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

  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() modulos: ModuloDashboard[] = [];

  irModulo(ruta: string): void {
    this.router.navigate([ruta]);
  }

}
