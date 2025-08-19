import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-onchange-child',
  templateUrl: './onchange-child.component.html',
  styleUrls: ['./onchange-child.component.scss']
})
export class OnchangeChildComponent {
  @Input() data: any;
}
