import { MenuItem } from './../ts/MenuItem';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sztyrui-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

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
