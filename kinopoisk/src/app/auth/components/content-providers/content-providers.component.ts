import { Component } from '@angular/core';

@Component({
  selector: 'app-content-providers',
  templateUrl: './content-providers.component.html',
  styleUrls: ['./content-providers.component.scss'],
})
export class ContentProvidersComponent {
  public redirectToVK(): void {
    window.location.href = 'https://vk.com';
  }
}
