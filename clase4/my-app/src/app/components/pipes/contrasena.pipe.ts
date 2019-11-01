import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {
  // activar = true;
  transform(value: string, activar?: boolean): any {
    // console.log(value);
    // console.log(activar);

    // activar===true ?  return value : return  value.replace(/./, '*');
    if (activar === true) {
      return value;
    } else {
      value = value.replace(/./g, '*');
    }
    return value;
  }
}
