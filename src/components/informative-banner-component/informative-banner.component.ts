import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'informative-banner-component',
  templateUrl: './informative-banner.component.html',
  styleUrls: ['informative-banner.component.css']
})
export class InformativeBannerComponent {
  @Input() title: string = '';
  @Input() content: string = '';
}
