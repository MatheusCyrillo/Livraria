import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlterarLivroPage } from './alterar-livro';

@NgModule({
  declarations: [
    AlterarLivroPage,
  ],
  imports: [
    IonicPageModule.forChild(AlterarLivroPage),
  ],
})
export class AlterarLivroPageModule {}
