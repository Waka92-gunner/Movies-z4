import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListapeliculasComponent } from '../app/vistas/listapeliculas/listapeliculas.component';
import {ComentarioComponent} from '../app/vistas/comentario/comentario.component';
import { CriticaComponent} from '../app/vistas/critica/critica.component';
import {LoginComponent} from '../app/vistas/login/login.component';
const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'home', component:ListapeliculasComponent},
  {path:'comentario', component:ComentarioComponent},
  {path:'critica', component:CriticaComponent},
  {path:'login', component:LoginComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ListapeliculasComponent,ComentarioComponent,CriticaComponent,LoginComponent]