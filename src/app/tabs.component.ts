import { Component, OnInit, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { TabComponent } from './tab.component';

@Component({
  selector: 'app-tabs',
  // template: `<ng-content></ng-content>`
  // template:`<ul>
  //             <li>Tab 1</li>
  //             <li>Tab 2</li>
  //           </ul>
  //           <ng-content></ng-content>`

    template:`
            <ul class="nav nav-tabs">
              <li *ngFor="let tab of tabComponents" (click)="selectTab(tab)" [class.active]="tab.active">
                <a href="#">{{tab.title}}</a>
              </li>
            </ul>
            <ng-content></ng-content>
            `
})
export class TabsComponent implements OnInit,AfterContentInit {
  @ContentChildren(TabComponent) tabComponents:QueryList<TabComponent>;

  constructor() { }

  ngOnInit() {
  }
  
  ngAfterContentInit() {
    let activeTabs = this.tabComponents.filter((tabComponentInstance) => tabComponentInstance.active == true);

    if(!activeTabs.length)
      this.selectTab(this.tabComponents.first);
  }

  selectTab(tab:TabComponent){
    this.tabComponents.forEach((tabComponentInstance) => tabComponentInstance.active = false);

    tab.active = true;
  }
  
}
