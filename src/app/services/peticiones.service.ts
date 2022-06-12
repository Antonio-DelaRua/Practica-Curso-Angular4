import {Injectable} from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators'; 
import { Observable } from 'rxjs';
'rxjs-compat/Observable';




@Injectable()
export class PeticionesService{
    public url:string;

 constructor(private _http:HttpClient){
    this.url = "https://jsonplaceholder.typicode.com/posts";
 }   

 getPrueba(){
     return 'LaMboRgHiNi';
 }

getArticulos(){
  return this._http.get(this.url)
     
  
}

}
