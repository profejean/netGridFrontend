import { SecureComponent } from './secure/secure.component';
import { PublicComponent } from './public/public.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: PublicComponent
  },
  {
    path: 'secure',
    component: SecureComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
