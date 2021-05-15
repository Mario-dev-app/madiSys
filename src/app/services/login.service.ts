import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';

const URL = environment.URL;

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( private http: HttpClient) { }

  login( usuario: string, password: string){
    const body = { usuario, password };
    return this.http.post(`${URL}/login`, body);
  }
}
