import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  scrollToSecondScreen() {
    const element = document.getElementById('second-screen');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
  
}
