import { Component, input } from '@angular/core';

@Component({
  selector: 'fe-title',
  imports: [],
  templateUrl: './title.html',
  styleUrl: './title.css',
})
export class FeTitleComponent {
  title = input.required<string>();
}
