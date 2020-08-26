import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MyDynamicComponent } from './components/my-dynamic/my-dynamic.component';

const routes: Routes = [ {
  path: '', component: MyDynamicComponent
}]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MyDynamicComponent],
  exports: [MyDynamicComponent, RouterModule]
})
export class MyDynamicModule { }