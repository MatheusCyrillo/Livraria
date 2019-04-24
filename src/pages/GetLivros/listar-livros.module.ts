import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListarLivrosPage } from './listar-livros';

@NgModule({
  declarations: [
    ListarLivrosPage,
  ],
  imports: [
    IonicPageModule.forChild(ListarLivrosPage),
  ],
})
export class ListarLivrosPageModule {}
