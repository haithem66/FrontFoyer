import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { foyer } from './Foyer';

@Injectable({
  providedIn: 'root'
})
export class NomDuServiceService {

 
  readonly API_URL = 'http://192.168.33.10:8082/tpFoyer17/api/foyers';

  constructor(private httpClient: HttpClient) { }
  getAllfoyer() {
    return this.httpClient.get(`${this.API_URL}/retrieveAllFoyers`)
  }
  addfoyer(foyer : any) {
    return this.httpClient.post(`${this.API_URL}/addFoyer`, foyer)
  }
  editfoyer(foyer : any){
    return this.httpClient.put(`${this.API_URL}/update-foyer`, foyer)
  }


  
}