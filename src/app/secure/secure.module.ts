
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account/account.component';
import { SecureComponent } from './secure.component';
import { CharacterComponent } from './character/character.component';
import { OnlyCharacterComponent } from './only-character/only-character.component';



@NgModule({
  declarations: [
    SecureComponent,
    AccountComponent,
    CharacterComponent,
    OnlyCharacterComponent


  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class SecureModule { }
