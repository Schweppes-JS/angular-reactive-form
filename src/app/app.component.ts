import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ValidatorService } from './services/validator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public passwordType: string = 'password';

  public loginInfoControl: FormGroup;

  constructor(private validatorService: ValidatorService) { }

  ngOnInit() {
    this.loginInfoControl = new FormGroup({
      email: new FormControl('', [Validators.required, this.validatorService.emailValidator]),
      password: new FormControl('', [Validators.required, this.validatorService.passwordValidator])
    });
  }

  showingPassword(visibilityInput: HTMLInputElement): void {
    visibilityInput.checked ? this.passwordType = 'text' : this.passwordType = 'password';
  }

  onSubmit(emailTarget: HTMLInputElement, passwordTarget: HTMLInputElement, remembranceTarget: HTMLInputElement): void {

    if (this.loginInfoControl.controls.password.valid && this.loginInfoControl.controls.email.valid) {

      const userInfo = {
        email: emailTarget.value,
        password: passwordTarget.value
      }

      if (remembranceTarget.checked) {
        localStorage.setItem('log', JSON.stringify(userInfo))
      }

      alert(`email: ${userInfo.email}\npassword: ${userInfo.password}`);
      emailTarget.value = '';
      passwordTarget.value = '';
    }
  }
}
