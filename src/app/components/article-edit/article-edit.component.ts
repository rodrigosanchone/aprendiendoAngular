import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Article } from '../../models/article';
import { ArticleService } from '../../services/article.service';
import {Global} from "../../services/global";
import Swal from 'sweetalert2'

@Component({
  selector: 'app-article-edit',
  templateUrl: '../article-new/article-new.component.html',
  styleUrls: ['./article-edit.component.css'],
  providers: [ArticleService]
})
export class ArticleEditComponent implements OnInit {
  public article: Article;
  public status: string;
  public is_edit: boolean;
  public page_title: string;
  public url: string;
  afuConfig = {
    multiple: false,
    formatsAllowed: ".jpg,.png,.gif,.jpeg",
    maxSize: "50", //tamaño maximo del archivo aquí le indique 50 megas
    uploadAPI:  {
      url: Global.url+'upload-image',
      method:"POST",
    },
 
    theme: "attachPin",//"dragNDrop",
    hideProgressBar: true,
    hideResetBtn: true,
    hideSelectBtn: false,
    fileNameIndex: true,
    replaceTexts: {
      selectFileBtn: 'Select Files',
      resetBtn: 'Reset',
      uploadBtn: 'Upload',
      dragNDropBox: 'Drag N Drop',
      attachPinBtn: 'Elija su imagen',
      afterUploadMsg_success: 'Successfully Uploaded !',
      afterUploadMsg_error: 'Upload Failed !',
      sizeLimit: 'Size Limit'
    }
};

  constructor(
    private _route:ActivatedRoute,
    private _router: Router,
    private _articleService: ArticleService
  ) {
    this.article = new Article('','','',null,null);
    this.is_edit = true;
    this.page_title= 'Editar articulo';
    this.url= Global.url;
   }


  ngOnInit(): void {
    this.getArticle();
  } 


  onSubmit(){
    //alert("Hola")
    console.log(this.article)
    this._articleService.update(this.article._id,this.article).subscribe(
      response=>{
         if(response.status =='success'){
            this.status= 'success';
            this.article= response.article;
            
          //  this._router.navigate(['/blog/articulo',this.article._id ]);
          //  console.log(response)
         }
         else{
          this.status = 'error';
         }
         Swal.fire('Exito',
         'El articulo fue editado correctamente',
          'success');
         this._router.navigate(['/blog/articulo',this.article._id ]);
      },error=>{
        console.log(error);
        this.status = 'error';
        Swal.fire('Edición Fallida',
        'El articulo no fue editado correctamente',
         'error');
      }
    )
  }

  imageUpload(data){
    // let image_data = JSON.parse(data.response);
    //this.article.image= image_data.image;
     //alert(image_data.image);

     console.log(data.body.image);               

              let image_data = data.body.image;               

              this.article.image =  image_data;       
  }

  getArticle(){
    this._route.params.subscribe(params =>{
      let  id = params['id'];

      this._articleService.getArticle(id).subscribe(
        response=>{
          if(response.article){
            this.article = response.article;
          }else{
            this._router.navigate(['/blog']);
          }
        },
        error=>{
          console.log(error);
          this._router.navigate(['']);
        }
      );
    });
  }
}

