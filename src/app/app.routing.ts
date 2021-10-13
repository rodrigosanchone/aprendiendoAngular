// Importar los modulos de router de angular

import {ModuleWithProviders} from '@angular/core'
import {Routes,RouterModule} from '@angular/router'

//Importar  componenetes a los cuales les quiero hacer una pag exclusiva

import{HomeComponent} from './components/home/home.component'
import{BlogComponent} from './components/blog/blog.component'
import{FormularioComponent} from './components/formulario/formulario.component'
import{PeliculasComponent} from './components/peliculas/peliculas.component'
import{PaginaComponent} from './components/pagina/pagina.component'
import { ArticleComponent } from './components/article/article.component'
import { SearchComponent } from './components/search/search.component'
import { ArticleNewComponent } from './components/article-new/article-new.component'
import { ArticleEditComponent } from './components/article-edit/article-edit.component'
import { ErrorComponent } from './components/error/error.component'

//array de rutas

const appRoutes: Routes =[
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'formulario', component: FormularioComponent},
  {path: 'peliculas', component: PeliculasComponent},
  {path: 'pagina-de-pruebas', component: PaginaComponent},//opcional
  {path: 'blog/articulo/:id', component: ArticleComponent},
  {path: 'buscar/:search', component: SearchComponent},
  {path: 'blog/crear', component: ArticleNewComponent},
  {path: 'blog/editar/:id', component: ArticleEditComponent},
  {path: 'pagina-de-pruebas/:nombre/:apellido', component: PaginaComponent},
  {path: '**', component: ErrorComponent}
];

//exportar el modulo de rutas

export const appRoutingProviders: any[]= [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);


