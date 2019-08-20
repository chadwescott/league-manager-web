// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '@angular/flex-layout';

// Components
import { AdministrationComponent } from './components/administration/administration.component';

@NgModule({
  declarations: [
    AdministrationComponent
  ],
  imports: [
    CommonModule,
    CoreModule
  ]
})
export class AdministrationModule { }
