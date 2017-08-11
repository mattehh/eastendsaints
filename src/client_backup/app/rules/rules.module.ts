import { NgModule } from '@angular/core';
import { RulesComponent } from './rules.component';
import { RulesRoutingModule } from './rules-routing.module';

@NgModule({
  imports: [RulesRoutingModule],
  declarations: [RulesComponent],
  exports: [RulesComponent],
  providers: []
})
export class RulesModule { }
