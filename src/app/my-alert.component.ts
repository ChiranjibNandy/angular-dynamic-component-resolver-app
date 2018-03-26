import { Component, OnInit,Input, ElementRef,ContentChild,AfterContentInit,AfterViewInit,ViewChild } from '@angular/core';

@Component({
  selector: 'app-my-alert',
  template: `
    <h1 (click)="alert()">{{type}}</h1>
    <ng-content></ng-content>
    `
})
export class MyAlertComponent implements AfterContentInit,AfterViewInit {

  @Input() type: string = "Success";

  @ViewChild('insideNgContent') insideNgContentRef:ElementRef;

  alert(){
    console.log("alert");
  }

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit(){
    //console.log(this.insideNgContentRef.nativeElement.textContent);
  }

  ngAfterViewInit(){
    //console.log(this.insideNgContentRef.nativeElement.textContent);
  }

}
