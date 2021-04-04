import { openClose } from './../ts/animations';
import { MenuItem } from './../ts/MenuItem';
import { Component, Input, OnInit } from '@angular/core';
import { IconStyle } from './../ts/iconStyle';

@Component({
  selector: 'sztyrui-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  animations: [
    openClose
  ]
})
export class MenuComponent implements OnInit {

  @Input()
  iconStyle: IconStyle = IconStyle.MaterialFilled;

  /**Offset from left edge of the child menu */
  @Input()
  offset: number = 15;

  /**Direction of extension */
  @Input()
  direction: 'up' | 'down' = 'down';

  /**Is menu extended */
  @Input()
  isExtension: boolean = false;

  /**Menu items */
  @Input()
  menuItems: MenuItem[];

  constructor() { }

  ngOnInit(): void {
  }


}
