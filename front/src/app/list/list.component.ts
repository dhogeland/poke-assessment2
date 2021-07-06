import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { Observable } from 'rxjs';
import { ApiService } from '../api.service';
import { SharedService } from '../shared.service';
import { List } from '../list';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  pokeList: any;
  pokeInfo: any;
  name: any;

  constructor(private apiService: ApiService,
              private route: ActivatedRoute,
              private router: Router,
              private sharedService: SharedService) { }

  ngOnInit(): void {
    let check = this.sharedService.getPokeList();
    if (Object.keys(this.sharedService.getPokeList()).length) {
      this.pokeList = this.sharedService.getPokeList();
    } else {
      this.apiService.getList().subscribe((result)=>{
        this.pokeList = result;
        this.sharedService.setPokeList(result);
      })
    }
  }

  getUrlInfo(url: string): string {
    let x = url.split('/');
    return x[x.length - 2];
  }

  getNextPokeList(url: string) {
    this.apiService.getNextList(url).subscribe((result)=>{
      this.pokeList = result;
      this.sharedService.setPokeList(result);
    })
  }

  getPokeInfo(url: string) {
    this.apiService.getPokeInfo(url).subscribe((result)=>{
      this.sharedService.setPokeInfo(result);
      this.router.navigate(['pokemon']);
    })
  }

  getPokeInfoByName(name: string) {
    this.apiService.getPokeInfoByName(name).subscribe((result)=>{
      this.sharedService.setPokeInfo(result);
      this.router.navigate(['pokemon']);
    })
  }

}
