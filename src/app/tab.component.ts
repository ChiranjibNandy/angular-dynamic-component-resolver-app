import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tab',
  // template: `
  //           <p>{{title}}</p>
  //           `
  styles: [`
    .pane{
      padding: 1em;
    }
  `],
  template:`
          <div [hidden]="!active" class="pane">
            <ng-content></ng-content>
          </div>
          `
})
export class TabComponent implements OnInit {
  @Input('tabTitle') title:string;
  @Input() active:boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
