import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent {
 signFormObj:SignUpForm = new SignUpForm();

 save(regiForm:NgForm){
  console.log(regiForm);
  // 1.way registration form object
  // console.log("form data", this.signFormObj);

  // 2nd way value property
 console.log("form data:", regiForm.value);
 }
}

class SignUpForm{
  name:String="";
  mobileNo:string ="";
  email:string ="";
  
 }
 
