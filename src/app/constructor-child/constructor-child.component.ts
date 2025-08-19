import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-constructor-child',
  templateUrl: './constructor-child.component.html',
  styleUrls: ['./constructor-child.component.scss']
})
export class ConstructorChildComponent implements OnInit {
@Input() message!: string;
newMessage: any = '';
newone: any = '';

  constructor() {
    console.log('Constructor called');
    console.log('Message in constructor:', this.message); 
    this.newMessage = `Message in constructor: ${this.message}`;
  }
  ngOnInit() {
    console.log('ngOnInit called');
    console.log('Message in ngOnInit:', this.message); 
    this.newone = `Message in ngOnInit: ${this.message}`;
  }

}
