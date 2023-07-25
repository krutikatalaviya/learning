import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './main/home/home.component';
import { ProductsComponent } from './main/products/products.component';
import { SettingComponent } from './main/setting/setting.component';
import { StudentComponent } from './main/student/student.component';


const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: '', loadChildren: () => import("./main/main.module").then((m) => m.MainModule)
  },
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
