import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-css',
  template: `
    <p>CSS WORKS!</p>
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit facilis
      rem soluta at, non esse obcaecati laudantium doloribus libero? Veniam
      dolore consequuntur nisi autem deserunt totam ipsa. Ipsum, quia optio!
    </p>
  `,
  styles: []
})
export class CssComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
