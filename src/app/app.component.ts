import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  emailControl: FormControl;
  passwordControl: FormControl;

  ngOnInit() {
    this.emailControl = new FormControl();
    this.passwordControl = new FormControl();
  }
}
