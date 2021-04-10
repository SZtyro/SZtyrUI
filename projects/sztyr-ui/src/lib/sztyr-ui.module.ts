import { MatSidenavModule } from '@angular/material/sidenav';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { NgModule } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { TemplateComponent } from './template/template.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { TileMenuComponent } from './tile-menu/tile-menu.component';
import { MatRippleModule } from '@angular/material/core';

@NgModule({
  declarations: [
    MenuComponent,
    MenuItemComponent,
    TemplateComponent,
    TileMenuComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    HttpClientModule,
    RouterModule,
    MatSidenavModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatRippleModule
  ],
  exports: [
    MenuComponent,
    MenuItemComponent,
    TemplateComponent,
    TileMenuComponent
  ]
})
export class SZtyrUIModule { }
