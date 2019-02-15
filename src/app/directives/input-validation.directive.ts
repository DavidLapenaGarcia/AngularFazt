import { Directive } from '@angular/core';
//Import needed to make the directive work
import { NG_VALIDATORS, Validator, AbstractControl }
  from '@angular/forms';

@Directive({
  selector: '[inputMinLength]',
  providers: [{provide: NG_VALIDATORS,
    useExisting:InputValidationDirective, multi:true}]
})



export class InputValidationDirective implements Validator{

  constructor() { }


  //@name: validate
  //@description: The method will receive the control to validate
  //              and will perform all the validations needed over it
  //@params: formFieldToValidate: AbstractControl
  //        formFieldToValidate will be the DOM component that will
  //        have the directive applied
  //@return: The function will return an object containing the errors
  //        of the validation or null in case there aren't.
  //@date: 2019-02-01
  //@author: Marisa González

  validate(formFieldToValidate: AbstractControl):
  {[key: string]: any}{

      let validInput: boolean = false;

      if(formFieldToValidate.value!=undefined &&
         formFieldToValidate.value.length >= 6){
           validInput = true;
        }

      return validInput?null:{'IsNotCorrect':true};
  }
}
