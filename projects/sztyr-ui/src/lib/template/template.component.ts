import { InterfaceService } from './../interface.service';
import { MenuItem } from './../ts/MenuItem';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, Event, ActivatedRoute, RoutesRecognized } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { HostListener } from '@angular/core';
import { fadeIn, openClose } from '../ts/animations';
import { IconStyle } from './../ts/iconStyle';


@Component({
  selector: 'sztyr-ui-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css'],
  animations: [
    openClose,
    fadeIn
  ]
})
export class TemplateComponent implements OnInit {

  @Input()
  iconStyle: IconStyle = IconStyle.MaterialFilled;

  @Input()
  menuItems: MenuItem[];

  @Input()
  background: String;

  @Input()
  ignored: String[];

  isExtension: boolean = false;
  screenWidth;
  isLoading: boolean = true;


  isMenuIgnored = false;

  @ViewChild('sidenav') sidenav: MatSidenav;

  constructor(
    private router: Router,
    public userInterface: InterfaceService,
    private route: ActivatedRoute
  ) {
    this.screenWidth = window.innerWidth;

    this.router.events.subscribe((d: Event) => {
      switch (true) {
        case d instanceof NavigationEnd:
          this.isIgnored()
          break;

        default:
          break;
      }
    })
  }

  extractPath(root, p) {

    p += '/' + root.value.routeConfig.path

    if (root.children.length > 0)
      p = this.extractPath(root.children[0], p) 
    

    return p;
  }

  ngOnInit(): void {
    this.router.events.subscribe((event: Event) => {
      switch (true) {
        case event instanceof NavigationStart:
          this.isLoading = true;
          break;
        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError:
          this.isLoading = false;
          break;
        default:
          break;
      }
    })
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.screenWidth = window.innerWidth;
  }

  sideNavExtend() {
    this.isExtension = !this.isExtension;

    if (!this.isExtension) {
      this.menuItems.forEach(item => {
        setTimeout(() => {
          item.isOpen = false;
        }, 10);
      });
    }
  }

  toggleSideNav() {
    this.sidenav.toggle();
  }

  isIgnored() {
    let root = this.route.pathFromRoot[0].snapshot['_routerState']._root.children[0];
    if (root)
      this.isMenuIgnored = this.ignored.includes(this.extractPath(root, ""))
    else
      this.isMenuIgnored = false;
  }
}
