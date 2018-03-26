import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AlertComponent } from './alert/alert.component';
import { ChildComponent } from './child/child.component';
import { MyChildComponentComponent } from './my-child-component.component';
import { MyAlertComponent } from './my-alert.component';
import { TabComponent } from './tab.component';
import { TabsComponent } from './tabs.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    ChildComponent,
    MyChildComponentComponent,
    MyAlertComponent,
    TabComponent,
    TabsComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ AlertComponent ]
})
export class AppModule { }
