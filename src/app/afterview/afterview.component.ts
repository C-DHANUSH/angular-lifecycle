import { Component, OnInit, AfterViewInit, AfterViewChecked, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-afterview',
  templateUrl: './afterview.component.html',
  styleUrls: ['./afterview.component.scss']
})
export class AfterviewComponent implements OnInit , AfterViewInit, AfterViewChecked {
   @ViewChild('title') titleElement!: ElementRef;

  ngAfterViewInit() {
    console.log('ngAfterViewInit - Title Text:', this.titleElement.nativeElement.innerText);
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked - View checked again');
  }
  constructor() { }

  ngOnInit(): void {
  }

}
