import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { DatabaseProvider } from '../database/database';
import { Livro } from '../../model/livro';
import { SQLiteObject } from '@ionic-native/sqlite/ngx';

/*
  Generated class for the LivroProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class LivroProvider {

  private baseApiPath = 'https://openlibrary.org/api/';
  private livro:Livro;
  constructor(public http: Http, public dbProvider: DatabaseProvider) {
    console.log('Hello LivroProvider Provider');
  
  }

  getLivrosAPI() {  
    return this.http.get(this.baseApiPath + 'books?bibkeys=OLID:OL8697688M,OLID:OL10100858M,OLID:OL18020948M&format=json&details=true');
  }

  public cadastrarLivro(livro:Livro){
    return this.dbProvider.openDatabase().then((db:SQLiteObject) => {
      let sql = "INSERT INTO Livro (titulo, subtitulo, capa, editora, autor, isbn, publicacao, paginas, imageUrl) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
      let parametros = [livro.titulo, livro.subtitulo, livro.capa, livro.editora, livro.autor, livro.isbn, livro.publicacao, livro.paginas, livro.imageUrl];

      return db.executeSql(sql, parametros).catch((e) => console.log(e));
    }).catch((e) => console.log(e));
  }

  public getLivro(nome:String){

  }

  public get(titulo: String) {
    return this.dbProvider.openDatabase()
      .then((db: SQLiteObject) => {
        let sql = 'select * from livro where titulo = ?';
        let data = [titulo];
 
        return db.executeSql(sql, data)
          .then((data: any) => {
            if (data.rows.length > 0) {
              let item = data.rows.item(0);
              this.livro.titulo = item.titulo;
              this.livro.subtitulo = item.subtitulo;
              this.livro.publicacao = item.publicacao;
              this.livro.paginas = item.paginas;
              this.livro.isbn = item.isbn;
              this.livro.imageUrl = item.imageUrl;
              this.livro.editora = item.editora;
              this.livro.capa = item.capa;
              this.livro.autor = item.autor;

              return this.livro;
            }
 
            return null;
          })
          .catch((e) => console.error(e));
      })
      .catch((e) => console.error(e));
  }

}
