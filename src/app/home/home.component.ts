import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';
import AOS from 'aos';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var options = {
      strings: ['','Front End', 'Back End', 'Web','Mobile','Full-Stack'],
      typeSpeed: 120,
      backSpeed: 100,
      loop: true,
    };
    
    var typed = new Typed('.typed', options);
    typed.reset(true)

    AOS.init()
  }

}
