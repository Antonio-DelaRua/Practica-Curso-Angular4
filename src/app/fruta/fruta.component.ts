import { Component } from "@angular/core";


@Component({
    selector: 'fruta', 
    templateUrl: './fruta.component.html'

  
})
export class Frutacomponent{
    public nombre_componente = 'Componente de fruta';
    public listado_frutas = 'Naranja, Manzana, Pera y Sandia';

    public nombre:string;
    public edad:number;
    public mayorDeedad: boolean;
    public trabajos:Array<string> = ['carpintero','44','Fontanero'];
    comodin:any;
   
    constructor(){
        this.nombre = 'manuel';
        this.edad = 35;
        this.mayorDeedad= false;
        this.comodin = 'SI';
    }

    ngOnInit(){
        this.CambiarNombre();
        this.cambiarEdad();
        alert(this.nombre + "" + this.edad)
    }

    CambiarNombre(){
        this.nombre ='danny';
    }
    cambiarEdad() {
        this.edad =this.edad;
        

    }
    

}