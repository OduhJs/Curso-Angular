import { Component } from '@angular/core';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrl: './teste.component.css'
})
export class TesteComponent {
  classes = ['effect__underline', 'color-darkred'];
  animation_text = 'text__animation';
  all_classes = [ this.classes[0], this.animation_text ];
}
