import { NgModule } from '@angular/core';

import { RulesRoutingModule } from './leagueinfo-routing.module';

import { RulesComponent } from './rules.component';
import { FaqComponent } from './faq.component';
import { PartnersComponent } from './partners.component';

@NgModule({
  imports: [RulesRoutingModule],
  declarations: [RulesComponent, FaqComponent, PartnersComponent],
  exports: [RulesComponent, FaqComponent, PartnersComponent],
  providers: []
})
export class LeagueInfoModule { }
