import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../shared/auth.service";
import {LoginDto} from "../shared/login.dto";
import {Subscription} from "rxjs";
import {throwIfEmpty} from "rxjs/operators";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = this._fb.group({
    username: new FormControl('',
      [
        Validators.required,
        Validators.minLength(3)
      ]
    ),
    password: new FormControl('',
      Validators.required),
  });
  err: string | undefined;

  constructor(private _fb: FormBuilder,
              private _auth: AuthService,
              private _router: Router) { }

  ngOnInit(): void { }

  get username() {return this.loginForm.get('username');}
  get password() {return this.loginForm.get('password');}

  login() {
    const loginDto = this.loginForm.value as LoginDto;
    this._auth.login(loginDto)
      .subscribe(token => {
        if (token && token.jwt) {
          this.err = undefined;
          this._router.navigateByUrl('admin');
        } else if (token && token.message) {
          this.err = token.message
        }
      });
  }
}
