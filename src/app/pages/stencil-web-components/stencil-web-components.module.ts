import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { StencilWebComponentsPage } from './stencil-web-components.page';

const routes: Routes = [
  {
    path: '',
    component: StencilWebComponentsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [StencilWebComponentsPage],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class StencilWebComponentsPageModule {}
