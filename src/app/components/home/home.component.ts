import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../../services/article.service'
import {Article} from '../../models/article'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ArticleService]
})
export class HomeComponent implements OnInit {
  
  public title: string
  public articles: [ArticleService]
 // public nombre='Bienvenido al curso de Angular con Rodrigo Sancho'
  constructor(private _articleService: ArticleService) {
     this.title='Últimos articulos'
   }
   
  ngOnInit(): void {
    this._articleService.getArticles(true).subscribe( 
      response=>{
        console.log(response);
        if(response.articles){
          this.articles= response.articles;
          console.log(this.articles)
        }else{}
      }, error =>{
        console.log(error);
      }
    );
 
   }
  

}
