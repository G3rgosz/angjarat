/*
* File: register.component.ts
* Author: Szivák Gergő
* Copyright: 2022, Szivák Gergő
* Group: Szoft II/N
* Date: 2022-02-24
* Github: https://github.com/gergosz-2000/angjarat
* Licenc: GNU GPL
*/
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators  } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm !: FormGroup

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      mail: new FormControl('', [Validators.required, Validators.email]),
      user: new FormControl('', [Validators.required, Validators.pattern('[a-zéáűőúöüóA-ZÉÁŰŐÚÖÜÓ0-9]+')]),
      pass: new FormControl('', Validators.required),
      pass2: new FormControl('', Validators.required),
    });
  }
  register(){
    let mail = this.registerForm.value.mail;
    let user = this.registerForm.value.user;
    let pass = this.registerForm.value.pass;
    let pass2 = this.registerForm.value.pass2;

    this.auth.register(mail, user, pass, pass2)
    .subscribe(res => {
      console.log(res);
      if (res.token != 0) {
        alert("Sikeres regisztráció!");
        localStorage.setItem('currentUser', 
        JSON.stringify({token: res.token, name: res.name})
        );
        this.router.navigate(['vehicles']);
      }else{
        alert("A regisztráció sikertelen!");
      }
    })
  }
  logpage(){
    this.router.navigate(['login']);
  }
}
