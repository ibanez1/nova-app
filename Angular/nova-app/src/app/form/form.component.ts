import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { HeroService } from '../hero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  form = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ])
   });

    constructor(private heroService: HeroService, private router: Router) { }

    get firstname(): AbstractControl{
      return this.form.get('firstName');
    }
    get lastName(): AbstractControl{
      return this.form.get('lastName');
    }
    get email(): AbstractControl{
      return this.form.get('email');
    }
    get password(): AbstractControl{
      return this.form.get('password');
    }
    ngOnInit(): void {
    }

    onSubmit(): void{
      debugger;
      // alert(JSON.stringify(this.form.value));
      this.heroService.createUser(this.form.value)
        .subscribe(reponse => {
          console.log('RESPONSE!!:', reponse);
        },
        error => {console.log('oops', error);
                  this.router.navigate(['/heroes']);
      });
    }

}
