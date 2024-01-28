import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-btn-signin-header',
  templateUrl: './btn-signin-header.component.html',
  styleUrls: ['./btn-signin-header.component.scss']
})
export class BtnSigninHeaderComponent {
  constructor(private route: Router) {}
  public routingToAuth() {
    this.route.navigate(['auth']);
  }

}
