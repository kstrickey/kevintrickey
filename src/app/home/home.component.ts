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

  navigateToNYT() {
    window.open('https://www.nytimes.com/2022/03/24/crosswords/all-in-the-game-of-love.html', '_blank')
  }

  navigateToNPR() {
    window.open('https://www.npr.org/sections/health-shots/2023/06/21/1183484892/no-kill-meat-grown-from-animal-cells-is-now-approved-for-sale-in-the-u-s', '_blank')
  }

  navigateToFracking() {
    window.open('https://www.uchicagomedicine.org/forefront/research-and-discoveries-articles/increased-hospitalizations-for-heart-attacks', '_blank')
  }


}
