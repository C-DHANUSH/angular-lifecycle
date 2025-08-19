import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-onchange-parent',
  templateUrl: './onchange-parent.component.html',
  styleUrls: ['./onchange-parent.component.scss']
})
export class OnchangeParentComponent implements OnInit {
  parentData :  any = "";

  constructor() { }

  ngOnInit(): void {
  }

}
