import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html'
})
export class Contact {

  form!: FormGroup; // declaración sin inicializar
submitted = false;
  constructor(private fb: FormBuilder) {}

ngOnInit() {
  this.form = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required]
  });
}




submit(): void {
  if (this.form.valid) {
    console.log(this.form.value);
    this.submitted = true;
    this.form.reset();
  } else {
    this.form.markAllAsTouched();
  }
}

}
