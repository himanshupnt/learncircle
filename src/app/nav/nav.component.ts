import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-component',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
    displayAskQuestion = false;
    onAskQuestion () {
        this.displayAskQuestion = true;
        console.log('hey')
    }
}
