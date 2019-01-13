import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { first } from 'rxjs/operators';

import { Store } from '@ngrx/store';

//import { AlertService } from '@app/shared/alerts';

import { AuthenticationService } from '@app/core/auth';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {



    //loginForm: FormGroup;
    loginForm = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
    });
    loading = false;
    submitted = false;
    returnUrl: string;

    constructor(
        private store: Store<any>,
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router
                /*private authenticationService: AuthenticationService ,
        private alertService: AlertService*/
    ) {
        // redirect to home if already logged in
       /* if (this.authenticationService.currentUserValue) { 
            this.router.navigate(['/']);
        }*/
    }


    ngOnInit() {
        
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';/**/
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;
        /*this.authenticationService.login(this.f.username.value, this.f.password.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    //this.alertService.error(error);
                    this.loading = false;
                });*/
    }
}
