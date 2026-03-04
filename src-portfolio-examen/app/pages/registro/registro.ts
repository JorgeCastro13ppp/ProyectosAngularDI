import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './registro.html',
  styleUrl: './registro.scss',
})
export class Registro implements OnInit{
form!: FormGroup; // declaración sin inicializar


submitted = false;
  constructor(private fb: FormBuilder, private router: Router) {}

  //En el ngOnInit utilizamos los validators necesarios que pide el enunciado
ngOnInit() {
  this.form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(5)]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    email: ['', [Validators.required, Validators.email]],

  });
}

//Utilizamos el método submit para comunicarnos con el localStorage de manera bidireccional
submit(): void {
  if (this.form.valid) {

    const name = this.form.value.name;
    const email = this.form.value.email;

    localStorage.setItem('name', name);
    localStorage.setItem('email', email);

    console.log(this.form.value);

    this.submitted = true;

    //Una vez hecho vamos al home
    this.router.navigate(['/home']);
    //Resetamos el formulario
    this.form.reset();

  } else {
    this.form.markAllAsTouched();
  }
}
}
