import { Injectable } from '@angular/core';
import { NgModel, NgForm } from "@angular/forms";

@Injectable()
export class FormHelperService {

  constructor() { }

  static hasError(field: NgModel, form: NgForm, validationName?: string) {
    let hasError = field.errors && (field.dirty || form.submitted);
    if (hasError && validationName) {
      return !!field.errors[validationName];
    }
    return hasError;
  }
}
