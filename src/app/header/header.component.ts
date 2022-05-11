import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router ) { } 
  route = ""
  scroll= false

  @HostListener('window:scroll', ['$event'])
    onScroll() {
      if(window.scrollY >= 40) {
        this.scroll = true
      } else if(window.scrollY <= 40) {
        this.scroll = false
      }
    }
    
  ngOnInit(): void {
    this.route = this.router.url;
  }
  
}
