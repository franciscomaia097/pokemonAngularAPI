import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'typeFormatter',
})
export class TypeFormatterPipe implements PipeTransform {
  transform(value: string): string {
    return value.charAt(0).toUpperCase() + value.slice(1) + ' Type';
  }
}
