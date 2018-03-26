import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'alert',
  template: `<h1>Alert {{type}}</h1>`,
})
export class AlertComponent implements OnInit {

  @Input() type:string = "Success";

  constructor() { }

  ngOnInit() {
  }

}
