import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as CadastrarLivrosPage from '../cadastrar-livros/cadastrar-livros';
import { ListarLivrosPage } from '../listar-livros/listar-livros';
import { PesquisarLivrosPage } from '../pesquisar-livros/pesquisar-livros';

/**
 * Generated class for the LivrariaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-livraria',
  templateUrl: 'livraria.html',
})
export class LivrariaPage {
  items = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = [
      {
        'title': 'Cadastrar Livros',
        'tipo': 'cadastrar',
        'description': 'Cadastre seus livros na livraria',
        'color': '#E63135'
      },
      {
        'title': 'Listar Livros',
        'tipo': 'listar',
        'description': 'Liste e veja os livros cadastrados',
        'color': '#0CA9EA'
      },
      {
        'title': 'Pesquisar Livros',
        'tipo': 'pesquisar',
        'description': 'Pesquisar livros existentes',
        'color': '#F46529'
      }
    ]

  }

  openFunction(tipo: any) {
    if (tipo == 'cadastrar') {
      this.navCtrl.push(CadastrarLivrosPage.CadastrarLivrosPage)
    } else if (tipo == 'listar') {
      this.navCtrl.push(ListarLivrosPage)
    } else if (tipo == 'pesquisar') {
      this.navCtrl.push(PesquisarLivrosPage)
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LivrariaPage');
  }

}
