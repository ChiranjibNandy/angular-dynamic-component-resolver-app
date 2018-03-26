import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-my-child-component',
  templateUrl: './my-child-component.component.html',
  styleUrls: ['./my-child-component.component.css']
})
export class MyChildComponentComponent implements OnInit {
  @Output() clickedEmitter: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  clickChild() : void {
    this.clickedEmitter.emit("This is child component code!");
  }

}
