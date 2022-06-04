import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { Observable } from 'rxjs';






@Injectable()
export class PeticionesService{
    getPrueba(){
        return'hola que ase';
    }
}
