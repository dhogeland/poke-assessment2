import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { List } from './list';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_SERVER = "http://localhost:3000";

  constructor(private httpClient: HttpClient) { }

  public getList(){
    return this.httpClient.get<List>(`${this.API_SERVER}`);
  }

  public getNextList(url: string) {
    return this.httpClient.post<List>(`${this.API_SERVER}/getNext`, {url});
  }

  public getPokeInfo(id: string) {
    return this.httpClient.post(`${this.API_SERVER}/getInfo`, {id});
  }

  public getPokeInfoByName(name: string) {
    return this.httpClient.post(`${this.API_SERVER}/getInfoByName`, {name});
  }

}
