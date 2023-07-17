import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-status',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent {
  date = new Date();
  agent = navigator.userAgent;
  language = navigator.language;
  cookie = navigator.cookieEnabled;
  cpu = navigator.hardwareConcurrency;
  touch = navigator.maxTouchPoints;
}
