import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarProductosComponent } from './components/listar-productos/listar-productos.component';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';

const routes: Routes = [
  // Cuando abra 4200, renderiza el componente listar productos.
  {path: '', component: ListarProductosComponent},
  // Cuando la ruta sea crear-producto, renderiza su componente.
  {path: 'crear-producto', component: CrearProductoComponent},
  //Para editar reutilizamos el componente y le pasamos un :id
  {path: 'editar-producto/:id', component: CrearProductoComponent},
  // Cuando la ruta es erronea: redirija a raiz
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
