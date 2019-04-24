import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Livro } from '../../model/livro';

/**
 * Generated class for the AlterarLivroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-alterar-livro',
  templateUrl: 'alterar-livro.html',
})
export class AlterarLivroPage {
  public livro:Livro;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.livro = this.navParams.get("livro")
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlterarLivroPage');
  }

}
