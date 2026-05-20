import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'classTag',
})
export class ClassTagPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
}
