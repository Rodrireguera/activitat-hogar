import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'meuUppercase',
  standalone: true
})
export class MeuUppercasePipe implements PipeTransform {
  
    transform(value: string): string {
    if (!value) return '';
    return value.toUpperCase();
  }
  
}