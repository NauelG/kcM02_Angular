import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title:string;
  logo: string;

  constructor() { }

  ngOnInit() {
    this.title = 'kcM02-Angular';
    this.logo = '../assets/logo.svg';
  }

}
