import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('f') signUpForm: NgForm;

  genders = ['male', 'female'];
  defaultQuestion = 'pet';
  answer = '';
  user = {
    username: '',
    email: '',
    secret: '',
    answer: '',
    gender: ''
  };

  suggestUserName() {
    const suggestedName = 'Superuser';

   /*  this.signUpForm.setValue({
      userData: {
        username: suggestedName,
        email: ''
      },
      secret: 'pet',
      questionAnswer: '',
      gender: 'male'
    }); */
    this.signUpForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
  }

  /* onSubmit(form: NgForm) {
    console.log(form);
  } */
  onSubmit() {
    console.log(this.signUpForm);
    this.user.username = this.signUpForm.value.userData.username;
    this.user.email = this.signUpForm.value.userData.email;
    this.user.answer = this.signUpForm.value.questionAnswer;
    this.user.secret = this.signUpForm.value.secret;
    this.user.gender = this.signUpForm.value.gender;

    this.signUpForm.reset();
  }
}
