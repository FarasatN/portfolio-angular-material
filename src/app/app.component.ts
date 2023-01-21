import { Component, OnInit } from '@angular/core';
import { Router }  from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(public router: Router){
  }

  currentYear?:number;
  ngOnInit(): void {
    this.currentYear=new Date().getFullYear();
  }

  
  title = 'portfolio-angular-material';
  showFiller = false;

  languages: string[] = ['English', 'Russian', 'Azerbaijan'];

  selectedLanguage: number = 0;

  radioButtonChange(index:number){
    this.selectedLanguage = index;
    console.log(index);
  }
}
