import { Component, Input } from '@angular/core';

@Component({
  selector: 'shaded-bar-component',
  templateUrl: './shaded-bar.component.html',
  styleUrls: ['./shaded-bar.component.css']
})
export class ShadedBarComponent { 
  @Input() barTitle: string = '';
}