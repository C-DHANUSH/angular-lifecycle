import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-docheck',
  templateUrl: './docheck.component.html',
  styleUrls: ['./docheck.component.scss']
})
export class DocheckComponent implements OnInit {
  @Input() value: any;
   private oldValue: any;

  ngDoCheck() {
    if (this.value !== this.oldValue) {
      console.log(`Value changed: ${this.oldValue} → ${this.value}`);
      this.oldValue = this.value;
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
