import { Component } from "@angular/core";


@Component({
    selector: 'plantillas',
    templateUrl: './plantillas.component.html'
})

export class plantillasComponent{

    public titulo;
    public administrador;

    public dato_externo = "A.DelaRua";
    public identity ={
        id:1,
        web: 'ruxxdesing.site',
        tematica: 'desarrollo web'
    };
   
    

    constructor(){

        this.titulo = "Plantillas ngTemplate en Angular";
        this.administrador = true;
    }

    cambiar(value:boolean){

        this.administrador = value;
    }

    public datos_del_hijo:any;

    recibirDatos(event:any){
        console.log(event);
        this.datos_del_hijo = event;
    }
}