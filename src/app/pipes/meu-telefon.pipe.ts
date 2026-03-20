import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'meuTelefon', 
    standalone: true
})
export class MeuTelefonPipe implements PipeTransform {  
    transform(value: number | string): string { 
        if (!value) return '';

         const num = value.toString().replace(/\s+/g, '');

         return num.replace(/(\d{2})(\d{3})(\d{2})(\d{2})/, '$1 $2 $3 $4');
    }
}   