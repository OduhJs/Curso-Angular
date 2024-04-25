import { Component } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrl: './eventos.component.css'
})
export class EventosComponent {
  clickValue = false;
  click(): void {
    this.clickValue = !this.clickValue
  }
}
