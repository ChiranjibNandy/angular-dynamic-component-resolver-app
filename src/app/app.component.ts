import { Component,ComponentRef,ComponentFactory,ViewContainerRef, ComponentFactoryResolver,ChangeDetectorRef, ViewChild, TemplateRef, ViewChildren, QueryList, AfterViewInit,ElementRef } from '@angular/core';
import { AlertComponent } from './alert/alert.component';
import { MyAlertComponent } from './my-alert.component';
import { TabsComponent } from './tabs.component';
import { TabComponent } from './tab.component';
import { NgForm,FormBuilder,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  // template: `<div #alertContainer></div>
  //             {{}}
  //             <app-my-child-component (clickedEmitter)="onClicked($event)"></app-my-child-component>
  //             <button (click)="createComponent('Success')">Success Alert</button>
  //             <button (click)="createComponent('Danger')">Danger Alert</button>`,
  
  
  
  // template: `
  //   <app-my-alert>
  //   </app-my-alert>
  //   <app-my-alert type="danger">
  //       <p #insideNgContent>A paragraph inside ng-content</p>
  //   </app-my-alert>
  //   <app-my-alert type="success"></app-my-alert>
  // `

  // template:`
  //           <app-tabs>
  //             <app-tab title="First Tab"></app-tab>
  //             <app-tab title="Second Tab"></app-tab>
  //           </app-tabs>
  //           `

  // template:`
  //         <app-tabs>
  //           <app-tab [tabTitle]="'Tab 1'" >Tab 1 Content</app-tab>
  //           <app-tab [tabTitle]="'Tab 2'">Tab 2 Content</app-tab>
  //         </app-tabs>
  //         `

  template:`<app-contact-form></app-contact-form>`
})
export class AppComponent{
  // @ViewChild("alertContainer",{read:ViewContainerRef}) contn : ViewContainerRef;
  // private componentRef:ComponentRef<any>;
  // constructor(private resolver : ComponentFactoryResolver){}

  // onClicked(value : string){
    
  // }

  // createComponent(type){
  //   this.contn.clear();
  //   const componentFactory:ComponentFactory<any> = this.resolver.resolveComponentFactory(AlertComponent);
  //   this.componentRef = this.contn.createComponent(componentFactory); 
  //   this.componentRef.instance.type = type;
  // }

  // ngOnDestroy() {
  // this.componentRef.destroy(); 
  // }
  // @ViewChildren(MyAlertComponent) alertComponents : QueryList<AlertComponent>;

  // ngAfterViewInit(){
  //   this.alertComponents.forEach((alertComponentInstance) => console.log(alertComponentInstance));
  // }

  // rForm: FormGroup;
  // post: any; //A property for out submitted form
  // name: string = '';
  // description:string = '';

  // constructor(private fb : FormBuilder){
  //   this.rForm = fb.group({ //creating our reactive form
  //     'name' : [null,Validators.required],//First arg allows you to specify our form value
  //     'description' : [null,Validators.compose([Validators.required,Validators.minLength(30),Validators.maxLength(500)])],
  //     'validate':''
  
  //   });

  //   addPost(post){
  //     this.name = post.name;
  //     this.description = post.description;
  //   }
  // }


}
