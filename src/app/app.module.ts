import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders } from './app.routing';




import { AppComponent } from './app.component';
import { Frutacomponent } from './fruta/fruta.component';
import { Empleadocomponent } from './empleado/empleado.component';
import { HomeComponent } from './home/home.component';
import { contactoComponent } from './contacto/contacto.component';
import { HttpClientModule } from '@angular/common/http';
import { ConversorPipe } from './pipes/conversor.pipe';




@NgModule({
  declarations: [
    AppComponent,
    Frutacomponent,
    Empleadocomponent,
    HomeComponent,
    contactoComponent,
    ConversorPipe
    
    
   
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpClientModule
    
  
    
    
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
