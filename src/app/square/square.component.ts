import { Component, Input } from '@angular/core';
//decorators with @
@Component({
  // selector = name component
  selector: 'app-square',
  // template to display by 
  template: `<button>{{sign}}</button>`,
  // CSS to display
  styleUrls: ['./square.component.scss']
})
export class SquareComponent {

  //input properties

  @Input()
  // ! promess of declare a sign
  sign!: 'X' | 'O';
}
