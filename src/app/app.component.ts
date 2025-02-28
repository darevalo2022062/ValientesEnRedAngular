import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SafeSpaceComponent } from './components/safe-space/safe-space.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SafeSpaceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'valientesEnRed2';
}
