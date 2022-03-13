import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//enums
import { Routing } from '@enums/routing.enum'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  message: string = 'Demo';

  constructor(private router: Router) {
    
  }

  clickToUserPage() {
    this.router.navigate([`/${Routing.User}`])
  }

  // changeTitleHome(title: string){
  //   this.message = title;
  // }

}
