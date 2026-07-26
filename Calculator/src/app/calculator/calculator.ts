// src/app/calculator/calculator.component.ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculator.html',    // <--- Remove '.component' if your HTML file is named calculator.html
  styleUrl: './calculator.css'        // <--- Remove '.component' if your CSS file is named calculator.css
})
export class CalculatorComponent {
  num1: number = 0;
  num2: number = 0;
  operator: string = '+';
  result: number = 0;

  onInputChange() {
    if (this.operator === '+') this.result = this.num1 + this.num2;
    if (this.operator === '-') this.result = this.num1 - this.num2;
    if (this.operator === '*') this.result = this.num1 * this.num2;
    if (this.operator === '/') this.result = this.num2 !== 0 ? this.num1 / this.num2 : 0;
  }
}
