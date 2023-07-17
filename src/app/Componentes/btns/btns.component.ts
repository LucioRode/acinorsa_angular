import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-btns',
  templateUrl: './btns.component.html',
  styleUrls: ['./btns.component.css']
})
export class BtnsComponent implements OnInit {

  iconMenu : boolean = false;
  statusMenuCel : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  comision(): void {}

  menuCel(): void {}

}
