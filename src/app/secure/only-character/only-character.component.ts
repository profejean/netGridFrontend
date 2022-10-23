import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { CharacterService } from 'src/app/services/character.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-only-character',
  templateUrl: './only-character.component.html',
  styleUrls: ['./only-character.component.scss']
})
export class OnlyCharacterComponent implements OnInit {

  data: any;
  active = false;
  message = '';

  form = new FormGroup({
    ref_api: new FormControl("")
  });

  constructor(
    private characterService: CharacterService,
    private routeActive: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.show();
  }

  show() {
    let params = this.routeActive.snapshot.params;
     this.characterService.show(params['id']).subscribe({
        next: (data: any) => {
          this.data = data;
          this.active = true;
        },
        error: (err) => {
        }
      });
  }

  store(ref_api: any) {

    this.form.setValue({
      ref_api: ref_api
    });
     this.characterService.store(this.form.value).subscribe({
        next: (data: any) => {         ;
         this.message = data.message;
        },
       error: (err) => {
          this.message = 'Hubo un problema al crear el favorito';
        }
      });
  }

}
