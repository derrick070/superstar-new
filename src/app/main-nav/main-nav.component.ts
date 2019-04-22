import { Component, HostListener } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {Router} from '@angular/router';
@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {
  header:boolean;
  hdr: String = "header";

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver,private router: Router) {}

  @HostListener("window:scroll", [])
  onWindowScroll() {

    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number < 50) {
      // this.header=false;
      this.hdr="header";
      // console.log('You are <50px from the top to bottom');
    } else {
      this.hdr="headerDark mat-elevation-z8";
      // this.header=true;
      // console.log('You are >50 from the top to bottom');
    
    }

    
}
scrollTo(className: string):void {
  const elementList = document.querySelectorAll('.' + className);
  const element = elementList[0] as HTMLElement;
  element.scrollIntoView({ behavior: 'smooth',inline:'start', block:'start'});
}

}
