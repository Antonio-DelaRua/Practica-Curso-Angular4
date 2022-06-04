import { Component } from '@angular/core';
import { Coche} from './coche';
import { PeticionesService } from '../services/peticiones.services';


@Component({

    selector: 'coches',
    templateUrl: './coches.component.html',
    providers: [PeticionesService]

})

export class CochesComponent{
    public coche: Coche;
    public coches:Array<Coche>;



constructor(private _peticionesService: PeticionesService){
    this.coche = new Coche("","","");
    this.coches = [
        new Coche("bmw 120","200","naranja"),
        new Coche("opel astra","140","negro")
    ]
  
    }
    ////El atributo onSubmit permite asociar una función de test en el formulario.
    //// Si la función retorna falso, les datos del formulario no se envían, quedan en
    /// la página. Se trata de un simple botón y no de envío, es necesario asociarle código
    /// JavaScript que se ejecuta con el evento onclick.
    
    onSubmit(){
        this.coches.push(this.coche);
        this.coche = new Coche("","","");
  
    
}



}
