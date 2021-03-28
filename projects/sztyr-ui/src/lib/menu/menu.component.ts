import { FunctionBase } from './../ts/functionBase';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sztyrui-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


  @Input()
  sideNavExtension: boolean = false;

  @Input()
  menuItems: FunctionBase[];

  constructor() { }

  ngOnInit(): void {
  }


}
