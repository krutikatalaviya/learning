import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { BodyComponent } from './body/body.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { SettingComponent } from './setting/setting.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { StudentComponent } from './student/student.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [
    BodyComponent,
    HomeComponent,
    ProductsComponent,
    SettingComponent,
    SidenavComponent,
    StudentComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    NgbModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    Ng2SearchPipeModule
  ]
})
export class MainModule { }
