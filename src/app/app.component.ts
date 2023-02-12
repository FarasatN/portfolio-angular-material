import { Component, OnInit } from '@angular/core';
import { Router }  from "@angular/router";
// import AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  currentSection = 'section1';
  currentYear?:number;


  constructor(public router: Router){
  }

  ngOnInit(): void {
    this.currentYear=new Date().getFullYear();
    // AOS.init()
  }

  
  title = 'portfolio-angular-material';
  showFiller = false;

  languages: string[] = ['English', 'Русский', 'Azərbaycan'];

  selectedLanguage: number = 0;

  radioButtonChange(index:number){
    this.selectedLanguage = index;
    console.log(index);
  }



  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
  }

  scrollTo(section) {
    document.querySelector('#' + section)
    .scrollIntoView();
  }

}
