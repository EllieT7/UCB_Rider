import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MotosComponent } from './motos/motos.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ContactanosComponent } from './contactanos/contactanos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MotosComponent,
    FormularioComponent,
    ContactanosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
