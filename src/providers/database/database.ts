import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatabaseProvider {

  constructor(private db : SQLite) {
  
  }


  
  openDatabase (){
  return this.db.create ({
  name:"livraria.db",
  location: "default"
  });
  }

   createDatabase (){
    return  this.openDatabase().then((db:SQLiteObject) =>{
    this.createTabelaLivros(db);
    });
  }
    createTabelaLivros (db: SQLiteObject){
   /* let sql: string = "CREATE TABLE IF NOT EXISTS Livro (id INTEGER PRIMARY KEY AUTOINCREMENT, " +
    " title VARCHAR (200), subtitle VARCHAR(200))";*/
    db.executeSql('create table danceMoves(name VARCHAR(32))');
    }

}
