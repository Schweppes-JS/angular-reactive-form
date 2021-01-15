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

  loginInfoControl: FormGroup;

  constructor(private validatorService: ValidatorService) { }

  ngOnInit() {
    this.loginInfoControl = new FormGroup({
      email: new FormControl('', [Validators.required, this.validatorService.emailValidator]),
      password: new FormControl('', [Validators.required, this.validatorService.passwordValidator])
    });
  }

  onSubmit(emailTarget: HTMLInputElement, passwordTarget: HTMLInputElement): void {
    if (this.loginInfoControl.controls.password.valid && this.loginInfoControl.controls.email.valid) {
      alert(`email: ${emailTarget.value}\npassword: ${passwordTarget.value}`);
      emailTarget.value = '';
      passwordTarget.value = '';
    }
  }
}
