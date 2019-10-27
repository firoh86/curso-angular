import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {
  // activar = true;
  transform(value: string, activar?: boolean): any {
    // console.log(value);
    // console.log(activar);
    if (activar === true) {
      return value;
    } else {
      for (let a of value) {
        value = value.replace(a, '*');
        console.log(value);
      }

      return value;
    }
  }
}
