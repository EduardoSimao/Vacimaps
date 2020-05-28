import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalNovasVacinasPage } from './modal-novas-vacinas';

@NgModule({
  declarations: [
    ModalNovasVacinasPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalNovasVacinasPage),
  ],
})
export class ModalNovasVacinasPageModule {}
