import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-nested-template',
  templateUrl: './nested-template.component.html',
  styleUrls: ['./nested-template.component.css']
})
export class NestedTemplateComponent {
  signFormObj: SignUpForm = new SignUpForm();
  female: any;
  male: any;

  save(regiForm: NgForm) {
    //  console.log(regiForm);
    // 1.way registration form object
    // console.log("form data", this.signFormObj);

    // 2nd way value property
    // console.log("form data:", regiForm.value);
    console.log("Registration Details", this.signFormObj);

  }

  cityList: string[] = ["Pune", "Mumbai", "Nagpur", "Wardha", "Bangalore"];
  stateList: string[] = ["MH", "UP", "MP", "TamilNadu", "Gujrat"];

  setFormData() {
    this.signFormObj = {
      name: "Aakanksha",
      mobileNo: "555555666666",
      email: "a@gmail.com",
      gender: "female",
      address: {
        line1: "RamNagar",
        line2: "hungry bird",
        state: "MH",
        city: "Wardha",
        country: "India"
      }
    }
  }

  resetData(){
    this.signFormObj = new SignUpForm();
  }

  ngOnInit(){
    // console.log("ngOnInit callled");
    this.resetData();
  }
}

class SignUpForm {
  name: String = "";
  mobileNo: string = "";
  email: string = "";
  gender: string = "";
  address: Address = new Address();
}

class Address {
  line1: string = "";
  line2: string = "";
  state: string = "";
  city: string = "";
  country: string = "";
}


