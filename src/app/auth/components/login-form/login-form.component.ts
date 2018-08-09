import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Authenticate} from '../../model/auth.model';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styles: [
    `
    :host {
      display: flex;
      justify-content: center;
      margin: 72px 0;
    }

    .mat-form-field {
      width: 100%;
      min-width: 300px;
    }

    mat-card-title,
    mat-card-content {
      display: flex;
      justify-content: center;
    }

    .loginError {
      padding: 16px;
      width: 300px;
      color: white;
      background-color: red;
    }

    .loginButtons {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
    }
  `,
  ],
})
export class LoginFormComponent implements OnInit {
  @Output() submitted = new EventEmitter<Authenticate>();

  form: FormGroup;
  constructor() {
  }

  ngOnInit() {
    this.form = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
    });
  }

  submit() {
    if (this.form.valid) {
      this.submitted.emit(this.form.value);
    }
  }

}
