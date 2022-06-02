
import { Component } from "@angular/core";
import { RopaService } from "../services/ropa.service";



@Component ({
         selector: 'home',
         templateUrl: './home.component.html',
         providers: [RopaService]
})

export class HomeComponent{
    public titulo = "Pagina principal";


    public listado_ropa:Array<string> 
    public prenda_a_guardar:any;
    public fecha;
    public nombre;
    
    // public listado_ropa:Array<string>;
    // public prenda_a_guardar:string;
    // private _ropaservice: RopaService;

    // constructor(){ 
    //     this._ropaservice = new RopaService();
    //     this.prenda_a_guardar = "";
    //     this.listado_ropa = [];
    // }
    

    constructor(
       
      
        private _ropaservice: RopaService
    ){
        this.listado_ropa =[];
        this.prenda_a_guardar ="";
        this.fecha = new Date(2022, 3, 22);
        this.nombre = "Ruxx";

    }

    ngOnInit(){
        
        this.listado_ropa = this._ropaservice.getRopa();

        console.log(this._ropaservice.prueba('camiseta nike'));
    }
    guardarPrenda(){
        this._ropaservice.addRopa(this.prenda_a_guardar);
        this.prenda_a_guardar = null;
    }

    eliminarPrenda(index:number){
        this._ropaservice.deleteRopa(index);
      alert(index);

    }

}