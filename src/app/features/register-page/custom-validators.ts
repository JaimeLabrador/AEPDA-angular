import { FormGroup } from '@angular/forms';

export function comparePassword (password: any, repeatPasword: any){
  
    return (formGroup: FormGroup) => {
      const original = formGroup.controls[password];
      const secondary = formGroup.controls[repeatPasword];
      if (secondary.errors && !secondary.errors.mustMatch) {
        return
      }
      if (original.value !== secondary.value) {
        secondary.setErrors({ mustMatch: true });
      } else {
        secondary.setErrors(null);
      }
    };
  }