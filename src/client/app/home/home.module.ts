import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { RegistrationModule } from '../registration/registration.module';

import { HomeComponent } from './home.component';

@NgModule({
  imports: [HomeRoutingModule, SharedModule, RegistrationModule],
  declarations: [HomeComponent],
  exports: [HomeComponent],
  providers: []
})
export class HomeModule { }
