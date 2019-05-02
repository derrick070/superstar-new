import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import { fade } from 'src/animation';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations:[
    fade
 ]
})
export class HomeComponent  {

  state = 'hide'

  imageUrls:String[]

  constructor(public el: ElementRef) { }

  ngOnInit(){
    this.imageUrls=["https://i.dlpng.com/static/png/291736_thumb.png","http://www.stickpng.com/assets/thumbs/585fd01acb11b227491c35cc.png","https://5.imimg.com/data5/ER/OQ/MY-5774620/western-deep-freezer-whf325h-500x500.png"];
  }

  @HostListener('window:scroll', [])
    checkScroll() {
      const componentPosition = this.el.nativeElement.offsetTop
      const scrollPosition = window.pageYOffset

      if (scrollPosition >= componentPosition) {
        this.state = 'show'
      } else {
        this.state = 'hide'
      }

    }
}
