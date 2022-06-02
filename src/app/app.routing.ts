import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule, Route } from "@angular/router";


// importar componentes
 import { Empleadocomponent } from "./empleado/empleado.component";
 import { Frutacomponent } from "./fruta/fruta.component";
 import { HomeComponent } from './home/home.component';
 import { contactoComponent } from './contacto/contacto.component';

 const appRoutes: Routes = [
{path:'', component: HomeComponent},
{path: 'empleado', component: Empleadocomponent},
{path: 'fruta', component: Frutacomponent},
{path: 'Home', component: HomeComponent},
{path: 'contacto', component: contactoComponent},
{path: 'contacto/:page', component: contactoComponent},
{path:'**', component: HomeComponent}

 ];

 export const appRoutingProviders: any[] = [];
 export const routing: ModuleWithProviders<Route> = RouterModule.forRoot(appRoutes);
 
 