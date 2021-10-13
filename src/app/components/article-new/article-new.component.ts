
import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute,Params} from '@angular/router';
import { Article } from '../../models/article';
import { ArticleService } from '../../services/article.service';
import {Global} from "../../services/global";
import Swal from 'sweetalert2'

@Component({
  selector: 'app-article-new',
  templateUrl: './article-new.component.html',
  styleUrls: ['./article-new.component.css'],
  providers: [ArticleService]
})

export class ArticleNewComponent implements OnInit {
   public article: Article;
   public status: string;
   public page_title: string;
   public is_edit: boolean;



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
    this.page_title= 'Crear Articulo';
    this.is_edit = false;
   }

  ngOnInit(): void {
  }

  onSubmit(){
    //alert("Hola")
    console.log(this.article)
  
    this._articleService.create(this.article).subscribe(
      response=>{
         if(response.status =='success'){
            this.status= 'success';
            this.article= response.article;   
          //  this._router.navigate(['/blog']);     
           
          //  console.log(response)
         }      
         else{
          this.status = 'error';
         }
         Swal.fire('Exito',
         'El articulo fue creado',
          'success');
          this._router.navigate(['/blog']);
      },error=>{
        console.log(error);
        this.status = 'error';
      }
    )
  }

  imageUpload(data){
    // let image_data = JSON.parse(data.response);
    //this.article.image= image_data.image;
     //alert(image_data.image);

     //console.log(data.body.image);               

              let image_data = data.body.image;               

              this.article.image =  image_data;       
  }

}
