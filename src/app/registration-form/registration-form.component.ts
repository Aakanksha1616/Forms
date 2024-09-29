import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent {
  userObj: User = new User();
fName: any;

  submit(form:NgForm){
    console.log(form);
  }
}
export class User {
  name: string = "";
  mobNo: string = "";
  email: string = "";
  password: string = ""
}