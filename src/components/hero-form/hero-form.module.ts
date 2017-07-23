import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { IonicModule } from 'ionic-angular';
import { HeroFormComponent } from './hero-form';

@NgModule({
  entryComponents: [
  ],
  exports: [
    HeroFormComponent,
  ],
  declarations: [
    HeroFormComponent,
  ],
  imports: [
    FormsModule,
    IonicModule,
  ],
  providers: [
  ],
})
export class HeroFormModule {}
