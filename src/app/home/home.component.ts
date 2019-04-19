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
    this.imageUrls=["http://www.pngmart.com/files/7/Refrigerator-PNG-File.png","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRKHueRmiH4LlewXDlj9PFkRrtpL_DPJNtfWq7n1HnYUC4xPMh","http://www.pngmart.com/files/7/Refrigerator-PNG-File.png"];
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
