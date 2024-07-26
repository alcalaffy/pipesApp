import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { BasicPageComponent } from './pages/basic-page/basic-page.component';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { UncommonPageComponent } from './pages/uncommon-page/uncommon-page.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { OrderComponent } from './pages/order/order.component';
import { ToggleCase } from '../pipes/toggle-case.pipe';
import { canFlyPipe } from '../pipes/canFly.pipe';
import { SortByPipe } from '../pipes/sort-by.pipe';


@NgModule({
  declarations: [
    BasicPageComponent,
    NumbersPageComponent,
    UncommonPageComponent,
    OrderComponent,
    ToggleCase,
    canFlyPipe,
    SortByPipe
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    ProductsRoutingModule,
    PrimeNgModule
  ]
})
export class ProductsModule { }
