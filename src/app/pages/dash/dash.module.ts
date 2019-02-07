import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DashPage } from './dash.page';
import { ServerStatusComponent } from 'src/app/components/server-status/server-status.component';


const routes: Routes = [
  {
    path: '',
    component: DashPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DashPage, ServerStatusComponent]
})
export class DashPageModule {
}
