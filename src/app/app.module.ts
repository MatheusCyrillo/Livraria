import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import {HttpModule} from "@angular/http";

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LivrariaPage } from '../pages/livraria/livraria';
import { CadastrarLivrosPageModule } from '../pages/cadastrar-livros/cadastrar-livros.module';
import { ListarLivrosPageModule } from '../pages/listar-livros/listar-livros.module';
import { PesquisarLivrosPageModule } from '../pages/pesquisar-livros/pesquisar-livros.module';
import { LivrosPageModule } from '../pages/livros/livros.module';
import { AlterarLivroPageModule } from '../pages/alterar-livro/alterar-livro.module';
import { LivroProvider } from '../providers/livro/livro';
import { DatabaseProvider } from '../providers/database/database';
import { SQLite } from '@ionic-native/sqlite/ngx';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LivrariaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    CadastrarLivrosPageModule,
    ListarLivrosPageModule,
    PesquisarLivrosPageModule,
    LivrosPageModule,
    AlterarLivroPageModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LivrariaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SQLite,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LivroProvider,
    DatabaseProvider
  ]
})
export class AppModule {}
