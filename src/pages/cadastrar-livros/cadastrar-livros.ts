import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Livro } from '../../model/livro';
import { LivroProvider } from '../../providers/livro/livro';
import { DatabaseProvider } from '../../providers/database/database';

/**
 * Generated class for the CadastrarLivrosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastrar-livros',
  templateUrl: 'cadastrar-livros.html',
})
export class CadastrarLivrosPage {

  livro: Livro = {
    titulo: '', subtitulo: '', capa: '', editora: '',
    autor: '', isbn: '', publicacao: '',
    paginas: null, imageUrl: '',
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertController: AlertController, public livroRepository : LivroProvider) { }


  openAlert() {
    let addToAlert = this.alertController.create({
      title: 'Livro Cadastrado com Sucesso',
      subTitle: 'O Livro '+ this.livro.titulo + ' foi cadastrado com sucesso',
      buttons: ['Ok']
    });

    addToAlert.present();
    
  
  }

  CadastrarLivro() {
this.livroRepository.cadastrarLivro(this.livro);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastrarLivrosPage');

  }

}
