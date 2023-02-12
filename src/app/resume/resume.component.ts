import { Component, OnInit } from '@angular/core';
import AOS from 'aos';


@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init()
  }

}
