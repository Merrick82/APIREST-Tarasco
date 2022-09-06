import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { Session } from 'src/app/models/session';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  public form!: FormGroup;
  public submitted: boolean = false;
  public error!: string;

  constructor(private fb: FormBuilder, public authService: AuthService, private router: Router) { 
    authService.getSession().subscribe((session) => {
      this.error = session.error ? session.error?.message : '';
    });
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  ngOnDestroy(): void {
    this.submitted = false;
  }

  public submit() {
    this.submitted = true;

    if (this.form.valid) {
      const user: User = {
        admin: true,
        username: this.form.value.username,
        password: this.form.value.password,
        id: '1'
      }

      this.authService.login(user);
    }
  }
}
