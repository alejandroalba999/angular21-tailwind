import {
  Component,
  Input,
  OnInit,
  inject,
  signal
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
  ValidatorFn
} from '@angular/forms';

import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { DatePickerModule } from 'primeng/datepicker';
import { TextareaModule } from 'primeng/textarea';
import { CheckboxModule } from 'primeng/checkbox';
import { SelectModule } from 'primeng/select';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { DynamicField, DynamicFormConfig } from '../../interfaces/dynamic-form.interface';

@Component({
  selector: 'fe-dynamic-form',

  standalone: true,

  imports: [
    CommonModule,
    ReactiveFormsModule,
    CardModule,
    InputTextModule,
    InputNumberModule,
    DatePickerModule,
    TextareaModule,
    CheckboxModule,
    SelectModule,
    ButtonModule,
    DividerModule
  ],

  templateUrl: './dynamic-form.html',

  styleUrl: './dynamic-form.css',
})
export class DynamicFormComponent implements OnInit {

  @Input({ required: true })
  config!: DynamicFormConfig;

  private readonly fb = inject(FormBuilder);

  form!: FormGroup;

  loading = signal(false);

  ngOnInit(): void {
    this.form = this.buildForm();

    this.listenDynamicChanges();
  }

  buildForm(): FormGroup {

    const group: Record<string, FormControl> = {};

    this.config.formularios.forEach(subForm => {

      subForm.formulario.fields.forEach(field => {

        const validators: ValidatorFn[] = [];

        if (field.required) {
          validators.push(Validators.required);
        }

        if (field.minLength !== undefined) {
          validators.push(
            Validators.minLength(field.minLength)
          );
        }

        if (field.maxLength !== undefined) {
          validators.push(
            Validators.maxLength(field.maxLength)
          );
        }

        if (field.min !== undefined) {
          validators.push(
            Validators.min(field.min)
          );
        }

        if (field.max !== undefined) {
          validators.push(
            Validators.max(field.max)
          );
        }

        if (field.pattern) {
          validators.push(
            Validators.pattern(field.pattern)
          );
        }

        if (field.validators?.length) {
          validators.push(...field.validators);
        }

        group[field.key] = new FormControl(
          {
            value: field.defaultValue ?? null,
            disabled: field.disabled ?? false
          },
          validators
        );

      });

    });

    return this.fb.group(group);
  }


  private listenDynamicChanges(): void {

    this.form.valueChanges.subscribe(formValue => {

      this.config.formularios.forEach(subForm => {

        subForm.formulario.fields.forEach(field => {

          const control = this.form.get(field.key);

          if (!control) {
            return;
          }

          if (field.disabledFn) {

            const shouldDisable =
              field.disabledFn(formValue);

            if (shouldDisable) {
              control.disable({
                emitEvent: false
              });
            } else {
              control.enable({
                emitEvent: false
              });
            }
          }

          if (field.requiredFn) {

            const validators: ValidatorFn[] = [];

            if (field.requiredFn(formValue)) {
              validators.push(Validators.required);
            }

            if (field.validators?.length) {
              validators.push(...field.validators);
            }

            control.setValidators(validators);

            control.updateValueAndValidity({
              emitEvent: false
            });
          }

        });

      });

    });

  }

  getControl(field: DynamicField): FormControl {
    return this.form.get(field.key) as FormControl;
  }

  isVisible(field: DynamicField): boolean {

    if (!field.visible) {
      return !field.hidden;
    }

    return field.visible(this.form.getRawValue());
  }

  onClickButton(button: any): void {

    if (button.disabled) {
      return;
    }

    if (button.onClick) {
      button.onClick();
    }
  }

  submit(): void {

    if (this.form.invalid) {

      this.form.markAllAsTouched();

      return;
    }

    console.log(this.form.getRawValue());
  }

  reset(): void {
    this.form.reset();
  }

  patchValue(value: Record<string, any>): void {
    this.form.patchValue(value);
  }

  getRawValue(): any {
    return this.form.getRawValue();
  }
}