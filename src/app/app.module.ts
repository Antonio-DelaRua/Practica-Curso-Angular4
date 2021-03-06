import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { routing, appRoutingProviders } from './app.routing';
import { ConversorPipe } from './pipes/conversor.pipe';





import { AppComponent } from './app.component';
import { Frutacomponent } from './fruta/fruta.component';
import { Empleadocomponent } from './empleado/empleado.component';
import { HomeComponent } from './home/home.component';
import { contactoComponent } from './contacto/contacto.component';
import { CochesComponent} from './coches/coche.component';
import { plantillasComponent } from './plantillas/plantillas.component';
import { HijoComponent } from './hijo/hijo.component';





@NgModule({
  declarations: [
    AppComponent,
    Frutacomponent,
    Empleadocomponent,
    HomeComponent,
    contactoComponent,
    ConversorPipe,
    CochesComponent,
    plantillasComponent,
    HijoComponent
    
 
    
    
    
   
    
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    routing
   
    
  
    
    
  ],
  providers: [appRoutingProviders],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
