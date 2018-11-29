import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kc-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  autor: string;
  empresa: string;
  lugar: string;
  fecha: Date;

  constructor() { }

  ngOnInit() {
    this.autor = 'nauel G.';
    this.empresa = 'Keep Coding';
    this.lugar = 'Girona';
    this.fecha = new Date();
  }

}
