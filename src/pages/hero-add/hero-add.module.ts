import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HeroAddPage } from './hero-add';
import { HeroFormModule } from '../../components/hero-form/hero-form.module';

@NgModule({
  entryComponents: [
    HeroAddPage,
  ],
  exports: [
    HeroAddPage,
  ],
  declarations: [
    HeroAddPage,
  ],
  imports: [
    IonicPageModule.forChild(HeroAddPage),
    HeroFormModule,
  ],
  providers: [
  ],
})
export class HeroAddModule {}
