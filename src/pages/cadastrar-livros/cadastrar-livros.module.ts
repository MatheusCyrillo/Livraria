import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastrarLivrosPage } from './cadastrar-livros';

@NgModule({
  declarations: [
    CadastrarLivrosPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastrarLivrosPage),
  ],
})
export class CadastrarLivrosPageModule {}
