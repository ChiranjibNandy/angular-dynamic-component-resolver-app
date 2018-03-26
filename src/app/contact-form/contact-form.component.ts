import { Component, OnInit } from '@angular/core';
import { NgForm,FormBuilder,FormGroup,Validators,FormArray,FormControl } from '@angular/forms';
import { emailMatcher } from './emailMatcher';

@Component({
  selector: 'app-contact-form',
  // templateUrl: './contact-form.component.html',
  // template: `
  //           <form [formGroup]="myForm">
  //             <div formGroupName="details">
  //               <input formControlName="name">
  //               <input formControlName="email">
  //               <input formControlName="confirm">
  //               <input formControlName="phone">
  //             </div>
  //             <div formArrayName="pizzas"></div>
  //           </form>
  //           `,
  styleUrls: ['./contact-form.component.css'],
  template: `
            <form [formGroup]="myForm" #formTpl="ngForm">
              <div formGroupName="details">
                <div class="form-group">
                  <label for="name">
                    Full name
                  </label>
                  <input class="form-control" type="text" placeholder="Your full name" formControlName="name">
                  <div *ngIf="myForm.get('details').get('name').invalid && (myForm.get('details').get('name').touched || myForm.get('details').get('name').dirty)" class="alert alert-danger">
                    <div *ngIf="myForm.get('details').get('name').hasError('required')">
                      Name is required
                    </div>
                    <div class="error" *ngIf="myForm.get('details').get('name').hasError('minlength')">
                      Minimum of 2 characters
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <label for="email">
                    Email address
                  </label>
                  <input class="form-control" type="email" placeholder="Your email address" formControlName="email">
                  <div
                    class="alert alert-danger"
                    *ngIf="myForm.get('details').get('email').hasError('required') && myForm.get('details').get('email').touched">
                    Email is required
                  </div>
                </div>
                <div class="form-group">
                  <label for="confirm">
                    Confirm address
                  </label>
                  <input class="form-control" type="email" placeholder="Confirm your email address" formControlName="confirm">
                  <div
                    class="alert alert-danger"
                    *ngIf="myForm.get('details').get('confirm').invalid && (myForm.get('details').get('confirm').touched || myForm.get('details').get('confirm').dirty)">
                    <div *ngIf="myForm.get('details').get('confirm').hasError('required')">Confirming email is required</div>
                    <div
                      class="alert alert-danger"
                      *ngIf="!myForm.get('details').get('confirm').hasError('required') && myForm.get('details').hasError('nomatch') && myForm.get('details').get('confirm').touched">
                      Emails must match
                    </div>                  
                  </div>
                </div>
              </div>
              <button [disabled]="myForm.invalid"  class="btn btn-default" type="submit" [disabled]="myForm.invalid">Sign up</button>
            </form>
  
          `
})
export class ContactFormComponent implements OnInit{

  // onAddItem(f : NgForm,event : Event){
  //   event.preventDefault();
  //   const value = f.value;
  //   console.log("Consoled data ",value);
  // }

  myForm : FormGroup;

  constructor(private fb : FormBuilder){}

  ngOnInit(){
    // this.myForm = new FormGroup({
    //   details: new FormGroup({
    //     name : new FormControl(''),
    //     email: new FormControl(''),
    //     confirm : new FormControl(''),
    //     phone: new FormControl('')
    //   }),
    //   pizzas: new FormArray([])
    
    // });

    this.myForm = this.fb.group({
      details : this.fb.group({
        name : ['',Validators.compose([Validators.required,Validators.minLength(2)])],
        email: ['',Validators.required],
        confirm: ['',Validators.required]
      },{validator: emailMatcher}),
      pizzas: this.fb.array([])
    });
  }

}
