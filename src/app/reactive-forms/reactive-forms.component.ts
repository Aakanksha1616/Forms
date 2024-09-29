import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent {

signUpForm!:FormGroup;


ngOnInit(){
 this.signUpForm = new FormGroup({
  name:new FormControl(),
  mobile: new FormControl(),
 });
}

submit(){
  console.log(this.signUpForm.value);
}
}
