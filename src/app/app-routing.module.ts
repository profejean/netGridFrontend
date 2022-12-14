import { AuthGuardService } from './services/auth-guard.service';
import { AccountComponent } from './secure/account/account.component';
import { RegisterComponent } from './public/register/register.component';
import { LoginComponent } from './public/login/login.component';
import { HomeComponent } from './public/home/home.component';
import { SecureComponent } from './secure/secure.component';
import { PublicComponent } from './public/public.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterComponent } from './secure/character/character.component';
import { OnlyCharacterComponent } from './secure/only-character/only-character.component';




const routes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent }
    ]
  },
  {
    path: 'information',
    component: SecureComponent,canActivate: [AuthGuardService],
    children: [
      { path: '', component: AccountComponent },
      { path: 'character', component: CharacterComponent },
      { path: 'only/:id', component: OnlyCharacterComponent }



    ]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
