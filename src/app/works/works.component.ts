import { Component, OnInit } from '@angular/core';
import AOS from 'aos';


@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

}
