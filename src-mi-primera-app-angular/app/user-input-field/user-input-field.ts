import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-user-input-field',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule],
  templateUrl: './user-input-field.html'
})
export class UserInputField {

  @Input() label!: string;
  @Input() value!: string | number;
  @Input() type: string = 'text';

  @Output() valueChange = new EventEmitter<string>();

  emitirCambio(valor: string) {
    this.valueChange.emit(valor);
  }
}
