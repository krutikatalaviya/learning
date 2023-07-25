import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { SettingComponent } from './setting/setting.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  {
    path: 'products', component: ProductsComponent
  },
  {
    path: 'setting', component: SettingComponent
  },
  {
    path: '', component: HomeComponent
  },
  {
    path: 'student', component: StudentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
