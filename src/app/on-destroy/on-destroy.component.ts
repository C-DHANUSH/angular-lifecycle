import { Component, OnDestroy  } from '@angular/core';

@Component({
  selector: 'app-on-destroy',
  templateUrl: './on-destroy.component.html',
  styleUrls: ['./on-destroy.component.scss']
})
export class OnDestroyComponent implements OnDestroy {
  interval: any;

  constructor() {
    this.interval = setInterval(() => {
      console.log('Timer tick...');
    }, 1000);
  }

  ngOnDestroy() {
    console.log('ngOnDestroy - Clearing Timer');
    clearInterval(this.interval);
  }

}
