import { Component, Input } from '@angular/core';
import { FormsModule }   from '@angular/forms';

/**
 * Generated class for the HeroFormComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'hero-form',
  templateUrl: 'hero-form.html'
})
export class HeroFormComponent {
  @Input('name')
  private name: string;

  @Input('major-event')
  private majorEvent: string;

  constructor() {
    console.log('Hello HeroFormComponent Component');
  }

}
