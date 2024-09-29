import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { emailDomainValidator } from 'validators/emailValidator';
import { passwordValidator } from 'validators/passwordValidator';

@Component({
  selector: 'app-reactive-form-validations',
  templateUrl: './reactive-form-validations.component.html',
  styleUrls: ['./reactive-form-validations.component.css']
})
export class ReactiveFormValidationsComponent {
  signUpForm!:FormGroup;

  constructor(private fb: FormBuilder) {
    
  }

  ngOnInit(){
    this.signUpForm =this.fb.group({
      name:['',[Validators.required,Validators.minLength(2),Validators.maxLength(15),Validators.pattern("[a-zA-Z]{2,15}")]],
      mobile:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern("[0-9]{10,10}")]],
      email:['',[Validators.required, emailDomainValidator]],
      password:['',[Validators.required,Validators.minLength(8),Validators.maxLength(10),Validators.pattern("[a-zA-z0-9]{8,10}")]],
      confirmPassword:['',[Validators.required,Validators.minLength(8),Validators.maxLength(10),Validators.pattern("[a-zA-z0-9]{8,10}"),passwordValidator]],
    });
   
    //value status
    this.signUpForm.get('password')?.valueChanges.subscribe((el:any)=>{
       this.signUpForm.get('confirmPassword')?.updateValueAndValidity();
    });
  }

  passwordMisMatch:boolean=false;  
  submit(){
    if(this.signUpForm.valid){
      console.log(this.signUpForm.value);
      //password
      //confirm Password
      //password==confirmpassword
    }else{
      alert("please fill required fields")
    }
  }
}
