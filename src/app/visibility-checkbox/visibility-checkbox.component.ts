import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-visibility-checkbox',
  templateUrl: './visibility-checkbox.component.html',
  styleUrls: ['./visibility-checkbox.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => VisibilityCheckboxComponent),
    multi: true
  }]
})
export class VisibilityCheckboxComponent implements ControlValueAccessor {

  private _currentState: boolean = false;
  private propagateChange: Function;
  private propagateTouch: Function;

  constructor() { }

  writeValue(checked: boolean): void {
    this._currentState = checked;
  }

  get currentState() {
    return this._currentState;
  }

  set currentState(checked: boolean) {
    this._currentState = checked;
    this.propagateChange(checked);
    this.propagateTouch(checked);
  }

  registerOnChange(fn: any) {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any) {
    this.propagateTouch = fn;
  }

  public toggleVisibility() {
    this.currentState = !this.currentState;
  }
}
