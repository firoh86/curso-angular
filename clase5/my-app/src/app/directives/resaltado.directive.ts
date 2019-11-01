import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {
  /* El representa todo el elemento y todo lo que venga de el. Elementref esta referenciando el elemento con el selector para usar la directiva. */
  constructor(private el: ElementRef) {
    console.log('directiva creada');
    el.nativeElement.style.backgroundColor = null;
  }

  // Seria como establecer una variable pero con input le decimos que viene desde fuera
  @Input('appResaltado') nuevoColor: string;

  @HostListener('mouseenter')
  onMouseEnter() {
    //  Le mandamos un color o creamos un color por defecto, por que siempre debe llevar un color.
    this.resaltar(this.nuevoColor || 'yellow');
  }
  // @HostListener('mouseleave') onMouseLeave() {
  //   this.el.nativeElement.style.backgroundColor = null;
  // }

  private resaltar(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
