import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MotosComponent } from './motos/motos.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'Motos',
    component: MotosComponent
  },
  {
    path: 'Formulario',
    component: FormularioComponent
  },
  {
    path: 'Formulario/:id',
    component: FormularioComponent
  },
  {
    path: 'Contactanos',  
    component: ContactanosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
