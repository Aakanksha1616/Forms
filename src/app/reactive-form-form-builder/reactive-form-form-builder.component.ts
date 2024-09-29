import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-form-builder',
  templateUrl: './reactive-form-form-builder.component.html',
  styleUrls: ['./reactive-form-form-builder.component.css']
})
export class ReactiveFormFormBuilderComponent {

  registrationForm!: FormGroup
  // fb just variable NAme Hai.
  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
    this.registrationForm = this.fb.group({
      name: [''],
      mobile: [''],
      email: [''],
      address: this.fb.group({
        addressLine1: [''],
        addressLine2: ['']
      })
    });
    this.setData();
  }

  submit() {
    // console.log(this.registrationForm.value);
    // console.log(this.registrationForm);
    console.log("Name:", this.registrationForm.get('name')?.value);
    console.log("Mobile No:", this.registrationForm.get('mobile')?.value);
  }

  setData(){
    var responseObj: any = {
      name: "David",
      mobile: "8888881122",
      email: "david@gmai.com",
      address: {
        addressLine1: "def society flat No 101",
        addressLine2: "Pune"
      }
    }

    this.registrationForm.setValue(responseObj);
  }

  patchData(){
    var responseObj: any = {
      name: "David",
      mobile: "8888881122",
      address: {
        addressLine1: "def society flat No 101",
      }
    }
    this.registrationForm.patchValue(responseObj);
  }

  updateEmail(){
    this.registrationForm.get('email')?.setValue('john@gmail.com');
  }

  
}