import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-btn-come-back',
  templateUrl: './btn-come-back.component.html',
  styleUrls: ['./btn-come-back.component.scss'],
})
export class BtnComeBackComponent {
  constructor(private route: Router) {}

  public routingToMainPage(): void {
    this.route.navigate(['']);
  }
}
