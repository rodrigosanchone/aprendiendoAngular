import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute,Params } from '@angular/router';
import {ArticleService} from '../../services/article.service'
import {Article} from '../../models/article'
import {Global} from '../../services/global'
import Swal from 'sweetalert2'
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers: [ArticleService]
})
export class ArticleComponent implements OnInit {
  public url: string
  public  article: Article;
  constructor(
    public _articleService: ArticleService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {  this.url = Global.url; }

  ngOnInit(): void {
  
    this._route.params.subscribe(params =>{
        let id=  params['id'];
        this._articleService.getArticle(id).subscribe(
          response=>{
            if(response.article){
              this.article = response.article;
            }else{
              this._router.navigate(['/home']);
            }
          },
          error=>{
            console.log(error);
            this._router.navigate(['/home']);
          }
         
        );
    });
    
  }


  delete(id){

    Swal.fire({
      title: 'Quiere elimiar el articulo?',
      showDenyButton: true,
      confirmButtonText: `Eliminar`,
      denyButtonText: `No estoy seguro`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Artioculo eliminado !', '', 'success')
        this._articleService.delete(id).subscribe(
          response=>{
             this._router.navigate(['/blog']);
          }, error=>{
            this._router.navigate(['/blog']);
            console.log(error);
          }
        )
      } else if (result.isDenied) {
        Swal.fire('Articulo no sera borrado', '', 'info')
      }
    })
 
  }




}
