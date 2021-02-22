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
    firstName : new FormControl('', [Validators.required, Validators.minLength(5)]),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ])
  });
  constructor(private heroService: HeroService, private router: Router) { }

  get firstName(): AbstractControl | null{
    return this.form.get('firstName');
  }

  get lastName(): AbstractControl | null{
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
    // alert(JSON.stringify(this.form.value));
    this.heroService.createUser(this.form.value).subscribe(
      data => {
        alert(JSON.stringify(data));
        setTimeout(() => {
          this.router.navigate(['/heroes']);
        }, 2000);
      },
      error => {console.log('oops', error);
                this.router.navigate(['/dashboard']);
    });
  }
}
