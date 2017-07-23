import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HeroEditPage } from './hero-edit';
import { HeroFormModule } from '../../components/hero-form/hero-form.module';

@NgModule({
  entryComponents: [
    HeroEditPage,
  ],
  exports: [
    HeroEditPage,
  ],
  declarations: [
    HeroEditPage,
  ],
  imports: [
    IonicPageModule.forChild(HeroEditPage),
    HeroFormModule,
  ],
  providers: [
  ],
})
export class HeroEditModule {}
