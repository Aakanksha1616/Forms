import { AbstractControl, ValidationErrors } from "@angular/forms";

export function passwordValidator (control:AbstractControl):ValidationErrors | null{

    console.log("confirm password ", control.value);

    let confirmPassword = control.value;
    let password =   control.root.get('password')?.value;

    if(password && confirmPassword && (password == confirmPassword)){
        return null;
    }else{
        return {"passwordMisMatch": true}
    }

    return null;
}