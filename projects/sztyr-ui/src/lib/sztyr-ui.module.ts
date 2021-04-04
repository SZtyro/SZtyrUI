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

@NgModule({
  declarations: [
    MenuComponent,
    MenuItemComponent,
    TemplateComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    HttpClientModule,
    RouterModule,
    MatSidenavModule,
    MatProgressSpinnerModule,
    MatButtonModule
  ],
  exports: [
    MenuComponent,
    MenuItemComponent,
    TemplateComponent
  ]
})
export class SZtyrUIModule { }
