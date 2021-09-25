import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  user: '';
  constructor(private activatedRoute: ActivatedRoute, private router : Router) {}
  ngOnInit(){
    this.activatedRoute.queryParams.subscribe(params => {
      this.user = this.router.getCurrentNavigation().extras.state.user.usuario;
  });
  }

}
