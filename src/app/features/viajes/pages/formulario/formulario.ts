import { Component, OnInit } from '@angular/core';
import { FORM_DEFAULT } from '../../constants/default-form.constant';
import { DynamicFormComponent } from '../../../../shared/components/dynamic-form/dynamic-form';

@Component({
  selector: 'app-formulario',
  imports: [
    DynamicFormComponent
  ],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css',
})
export class Formulario implements OnInit{
  readonly formularioBase = FORM_DEFAULT;

  ngOnInit(): void {
    
  }
}
