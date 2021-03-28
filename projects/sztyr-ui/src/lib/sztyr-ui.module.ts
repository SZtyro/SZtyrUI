import { MenuItemComponent } from './menu-item/menu-item.component';
import { NgModule } from '@angular/core';
import { SZtyrUIComponent } from './sztyr-ui.component';
import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [
    SZtyrUIComponent,
    MenuComponent,
    MenuItemComponent
  ],
  imports: [
  ],
  exports: [SZtyrUIComponent]
})
export class SZtyrUIModule { }
