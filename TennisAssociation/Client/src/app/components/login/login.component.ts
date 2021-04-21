import { UserService } from '../../services/user.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { maxPasswordLength, maxUsernameLength, minPasswordLength, minUsernameLength } from 'src/app/shared/constants';
import { Pages } from 'src/app/shared/pages';
@Component({
  selector: 'app-home',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  Pages = Pages;

  loginForm: FormGroup;
  isError$ = new BehaviorSubject(false);
  minPasswordLength = minPasswordLength;
  returnUrl: string;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) { 
    this.loginForm = this.formBuilder.group({
      username: [null, [Validators.required, Validators.minLength(minUsernameLength), Validators.maxLength(maxUsernameLength)]],
      password: [null, [Validators.required, Validators.minLength(minPasswordLength), Validators.maxLength(maxPasswordLength)]]
    });
  }
  
  ngOnInit() {
    this.userService.logout();
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    console.log(this.loginForm.value);
    
    this.userService.login(this.loginForm.value)
      .subscribe(
        data => {
          this.returnUrl = '/players';
          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.isError$.next(true);
          setTimeout(() => {
            this.isError$.next(false);
          }, 3000);
        });  
  }
}
