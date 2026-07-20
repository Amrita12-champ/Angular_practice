import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Databinding } from './databinding/databinding';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Databinding],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-databindingDemo');
}