import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

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
