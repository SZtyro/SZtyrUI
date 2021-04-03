import { MenuItemComponent } from './menu-item/menu-item.component';
import { NgModule } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    MenuComponent,
    MenuItemComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    MenuComponent,
    MenuItemComponent
  ]
})
export class SZtyrUIModule { }
