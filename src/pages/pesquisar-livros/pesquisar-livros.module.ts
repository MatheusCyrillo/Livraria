import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PesquisarLivrosPage } from './pesquisar-livros';

@NgModule({
  declarations: [
    PesquisarLivrosPage,
  ],
  imports: [
    IonicPageModule.forChild(PesquisarLivrosPage),
  ],
})
export class PesquisarLivrosPageModule {}
