import { AbstractControl, ValidationErrors } from "@angular/forms";


export function emailDomainValidator(control: AbstractControl): ValidationErrors | null {
  

  // let email = control.value;
  // let domain = email.split('@')[1]; // extract the domain part email

  // if (domain === 'gmail.com') { // if domain is gmail.com
  //            return null;  // if it is gmail.com, then return null i.e email is valid
  //         } else {
  //           return { emailMisMatch: true }; // if it is not gmail, then error object
  //         }

  console.log("email controll", control.value);
  let email = control.value;

  if (email && email.includes("@")) {
    let resultArr = email.split("@")
    if (resultArr[1] == 'gmail.com') {
      return null; // validation pass
    } else {
      return { "emailMisMatch": true } //fail
    }

  } else {
    return { "emailMisMatch": true }
  }

}
