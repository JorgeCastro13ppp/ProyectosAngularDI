import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserProfile } from '../models/user-profile';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { UserInputField } from '../user-input-field/user-input-field';

@Component({
  selector: 'app-user-profile-form',
  standalone: true,
  imports: [FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    UserInputField],
  templateUrl: './user-profile-form.html',
  styleUrl: './user-profile-form.css'
})
export class UserProfileForm {

  user: UserProfile = {
    firstName: '',
    lastName: '',
    email: '',
    age: 0,
    city: ''
  };

  guardado = false;

  guardar() {
    console.log(this.user);
    this.guardado = true;
  }

  reset() {
    this.user = {
      firstName: '',
      lastName: '',
      email: '',
      age: 0,
      city: ''
    };
    this.guardado = false;
  }
}
