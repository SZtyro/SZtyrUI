import { InterfaceService } from './../interface.service';
import { MenuItem } from './../ts/MenuItem';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, Event } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { HostListener } from '@angular/core';
import { fadeIn, openClose } from '../ts/animations';

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
  menuItems: MenuItem[];

  isExtension = false;
  screenWidth;
  isLoading: boolean = true;

  @ViewChild('sidenav') sidenav: MatSidenav;

  constructor(
    private router: Router,
    private translate: TranslateService,
    public userInterface: InterfaceService
  ) {
    translate.addLangs(['en', 'pl']);
    translate.setDefaultLang('pl');
    translate.use('pl')

    this.screenWidth = window.innerWidth;
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
}
