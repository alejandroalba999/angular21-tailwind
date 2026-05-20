import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { RouterLink } from "@angular/router";
@Component({
  selector: 'app-listado',
  imports: [ButtonModule, CardModule, RouterLink],
  templateUrl: './listado.html',
  styleUrl: './listado.css',
})
export class Listado {}
