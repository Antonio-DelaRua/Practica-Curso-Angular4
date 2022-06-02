import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { Empleado } from './empleado';


@Component({
  selector: 'empleado-tag',
  templateUrl: './empleado.component.html',
})
export class Empleadocomponent {
  public titulo = 'componente empleados:';
  public empleado: Empleado;
  public trabajadores: Array<Empleado>;
  public trabajador_externo: boolean;
  public color:string;
  public color_seleccionado:string;

  constructor() {
    this.empleado = new Empleado('david', 45, 'taxista', false);
    this.trabajadores = [
      new Empleado('paco', 89, 'piloto', true),
      new Empleado('david', 36, 'cocinera', false),
      new Empleado('Juaniyo', 45, 'rockstar', true),
      new Empleado('antonia', 97, 'limpiadora', true),
    ];
    this.trabajador_externo = true,
    this.color ='blue';
    this.color_seleccionado = '#ccc';
  }

  NgOninit() {
    console.log(this.empleado);
    console.log(this.trabajadores);
    
  }
  CambiarExterno(valor: boolean) {
    this.trabajador_externo = valor;
  }
  logColorSeleccionado(){
    console.log(this.color_seleccionado);
  }
}
