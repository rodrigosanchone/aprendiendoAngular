import { Component, OnInit,Input } from '@angular/core';
import {Router,ActivatedRoute,Params} from '@angular/router'
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public  searchString: string;
   
  constructor(
    private  _router:Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  goSearch(){
    alert("Busqueda Lanzada de: " + this.searchString);
    this._router.navigate(['buscar', this.searchString]);
  }

}
