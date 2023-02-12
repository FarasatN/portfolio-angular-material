import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThemePalette } from '@angular/material/core';
import AOS from 'aos';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public router: Router,
    // @Inject(ConfigToken) public config: Config,
    // @Inject(DOCUMENT) private document: any,
    // private i18nService: I18nService
    ){
  }
  
  color: ThemePalette = "primary";

  screenWidth = 0;
  currentYear?:number;

  ngOnInit(): void {
    this.currentYear=new Date().getFullYear();
    this.screenWidth = window.innerWidth;
    AOS.init()
  }

  
  title = 'portfolio-angular-material';
  showFiller = false;

  languages: string[] = ['English', 'Русский', 'Azərbaycan'];

  selectedLanguage: number = 0;

  radioButtonChange(index:number){
    this.selectedLanguage = index;
    console.log(index);
  }


  scrollTo(section) {
    document.querySelector('#' + section)
    .scrollIntoView();
  }



  // @Input() sidenav: MatSidenav;

  setLanguage(language: string) {
    // this.i18nService.language = language;
  }

  // get currentLanguage(): string {
  //   return this.i18nService.language;
  // }

  // get languages(): string[] {
  //   return this.i18nService.supportedLanguages;
  // }

  scrollToElementByID(id: string): void {
    // document.getElementById(id).scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  }

}
