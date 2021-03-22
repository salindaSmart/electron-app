import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SininComponent } from './sinin.component';
const routes: Routes = [  {
  path: 'login',
  component: SininComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SininRoutingModule { }
