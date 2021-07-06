import { Injectable, HttpService } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class AppService {
  constructor(private httpService: HttpService) {}

  async getList(): Promise<Observable<any>> {
    return this.httpService
      .get('https://pokeapi.co/api/v2/pokemon')
           .pipe(
               map(response => response.data)
           );
  }

  async getNextList(url: string): Promise<Observable<any>> {
    return await this.httpService
      .get(url)
           .pipe(
               map(response => response.data)
           );
  }

  async getPokeInfo(url: string): Promise<Observable<any>> {
    return await this.httpService
      .get(url)
           .pipe(
               map(response => response.data)
           );
  }

  async getPokeInfoByName(name: string): Promise<Observable<any>> {
    return await this.httpService
      .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
           .pipe(
               map(response => response.data)
           );
  }

}
