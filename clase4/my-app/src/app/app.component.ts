import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  nombre = 'Fernando';
  nombre2 = 'ferNAndo alberto heRRera jimenez';
  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  PI = Math.PI;
  a = 0.234;
  salario = 1234.5;

  // strings
  decimal = '{{ value_expression | number [ : digitsInfo [ : locale ] ] }}';
  slice = '{{ value_expression | slice : start [ : end ] }}';
  percent = '{{ value_expression | percent [ : digitsInfo [ : locale ] ] }}';
  currency =
    '{{ value_expression | currency [ : currencyCode [ : display [ : digitsInfo [ : locale ] ] ] ] }}';
  json = '{{ value_expression | json }}';
  async = '{{ obj_expression | async }}';
  date =
    '{{ value_expression | date [ : format [ : timezone [ : locale ] ] ] }}';

  heroe = {
    nombre: 'wolverine',
    clave: 'wolverine',
    edad: 500,
    direccion: {
      calle: 'primera',
      casa: '2'
    }
  };

  valorDePromesa = new Promise((res, rej) => {
    setTimeout(() => res('Llego la data!'), 3500);
  });
  // ----------pipes02
  /*'short': equivalent to 'M/d/yy, h:mm a' (6/15/15, 9:03 AM).
'medium': equivalent to 'MMM d, y, h:mm:ss a' (Jun 15, 2015, 9:03:01 AM).
'long': equivalent to 'MMMM d, y, h:mm:ss a z' (June 15, 2015 at 9:03:01 AM GMT+1).
'full': equivalent to 'EEEE, MMMM d, y, h:mm:ss a zzzz' (Monday, June 15, 2015 at 9:03:01 AM GMT+01:00).
'shortDate': equivalent to 'M/d/yy' (6/15/15).
'mediumDate': equivalent to 'MMM d, y' (Jun 15, 2015).
'longDate': equivalent to 'MMMM d, y' (June 15, 2015).
'fullDate': equivalent to 'EEEE, MMMM d, y' (Monday, June 15, 2015).
'shortTime': equivalent to 'h:mm a' (9:03 AM).
'mediumTime': equivalent to 'h:mm:ss a' (9:03:01 AM).
'longTime': equivalent to 'h:mm:ss a z' (9:03:01 AM GMT+1).
'fullTime': equivalent to 'h:mm:ss a zzzz' (9:03:01 AM GMT+01:00). */
  // fecha = '2019-10-24';
  fecha = new Date();

  video = '/TWGDjigGy2I';
  nombre3 = 'Alejandro Suárez';
  activar: boolean = true;
}
