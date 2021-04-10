import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from '../ts/MenuItem';


@Component({
  selector: 'sztyrui-tile-menu',
  templateUrl: './tile-menu.component.html',
  styleUrls: ['./tile-menu.component.css']
})
export class TileMenuComponent implements OnInit {

  @Input()
  menuItems: MenuItem[];

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  routerLink(routeUrl) {
    this.router.navigateByUrl(routeUrl);
  }

}
