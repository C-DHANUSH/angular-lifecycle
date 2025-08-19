import { Component, OnInit , AfterContentInit, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-aftercontentinit',
  templateUrl: './aftercontentinit.component.html',
  styleUrls: ['./aftercontentinit.component.scss']
})
export class AftercontentinitComponent implements AfterContentInit, AfterContentChecked {
  ngAfterContentInit() {
    console.log('ngAfterContentInit - Content initialized');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked - Projected content checked');
  }
  constructor() { }

  ngOnInit(): void {
  }

}
