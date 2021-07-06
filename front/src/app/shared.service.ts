import { Injectable } from '@angular/core';
import { List } from './list';

@Injectable()
export class SharedService{
    globalPokeList = List;
    globalPokeInfo = {};

    constructor(){
    }

    setPokeList(val: any){
      this.globalPokeList = val;
    }

    getPokeList(){
      return this.globalPokeList;
    }

    setPokeInfo(val: any){
      this.globalPokeInfo = val;
    }

    getPokeInfo(){
      return this.globalPokeInfo;
    }
}
