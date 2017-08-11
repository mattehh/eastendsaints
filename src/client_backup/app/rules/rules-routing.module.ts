import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RulesComponent } from './rules.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'info', component: RulesComponent }
    ])
  ],
  exports: [RouterModule]
})
export class RulesRoutingModule { }
