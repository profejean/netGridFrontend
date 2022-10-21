import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character';
import { CharacterService } from 'src/app/services/character.service';


@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

  messages = 'No hay personajes';
  data: any;


  constructor(
    private characterService: CharacterService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.index();
  }

  index() {

    this.characterService.index()
      .subscribe({
        next: (data: any) => {
          this.messages = 'Lista de personajes',
          this.data = data.results;
        },
        error: (err) => {
          this.messages= 'No hay personajes';
        }
      });
  }

  show(id:number) {
    this.router.navigate([`information/only/${id}`])
  }

}
