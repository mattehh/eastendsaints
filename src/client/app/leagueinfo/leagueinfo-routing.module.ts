import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RulesComponent } from './rules.component';
import { FaqComponent } from './faq.component';
import { PartnersComponent } from './partners.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'rules', component: RulesComponent },
      { path: 'faq', component: FaqComponent },
      { path: 'partners', component: PartnersComponent }
    ])
  ],
  exports: [RouterModule]
})
export class RulesRoutingModule { }
