import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ValidatorService } from './services/validator.service';
import { VisibilityCheckboxComponent } from './visibility-checkbox/visibility-checkbox.component';

@NgModule({
  declarations: [
    AppComponent,
    VisibilityCheckboxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ValidatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
