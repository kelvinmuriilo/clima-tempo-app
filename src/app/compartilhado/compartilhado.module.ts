import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InputSearchComponent } from './components/components/input-search/input-search.component';

const COMPONENTES = [
  InputSearchComponent
];

@NgModule({
  declarations: [COMPONENTES],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [COMPONENTES],
})
export class CompartilhadoModule { }
