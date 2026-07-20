import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Required for [(ngModel)]

@Component({
  selector: 'app-databinding',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './databinding.html',
  styleUrl: './databinding.css'
})
export class Databinding {
  userName: string = '';
  gender: string = 'Female';

  onSubmit(): void {
    alert('Welcome to Angular');
  }
}