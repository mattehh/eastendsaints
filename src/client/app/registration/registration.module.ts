import { NgModule } from '@angular/core';
import { RegisterComponent } from './register.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [SharedModule],
  declarations: [RegisterComponent],
  exports: [RegisterComponent],
  providers: []
})
export class RegistrationModule { }
