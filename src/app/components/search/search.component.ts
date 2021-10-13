import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute,Params  } from '@angular/router';
import { Article  } from '../../models/article';
import {ArticleService} from '../../services/article.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [ArticleService]
})
export class SearchComponent implements OnInit {

  public articles: Article[];
  public search: string;

  constructor(
    private _route:ActivatedRoute,
    private _router: Router,
    private _articleServices: ArticleService
  ) { }

  ngOnInit(): void {
     this._route.params.subscribe(params=>{
       var search = params['search'];
       this.search= search;

      // alert(search);

      this._articleServices.search(search).subscribe(
        response =>{
          if(response.articles){
             this.articles= response.articles;
             console.log(this.articles)
             //this.articles =[];
          }else{
          
           
          }
        },error=>{
            console.log(error);
            this.articles =[];
          //  this._router.navigate(['/home']);
        }
      );
     });
  }

}
