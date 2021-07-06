import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  pokeInfo: any;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private sharedService: SharedService) { }

  ngOnInit(): void {
    this.pokeInfo = this.sharedService.getPokeInfo();
  }

  goBack() {
    this.router.navigate(['list']);
  }

}
