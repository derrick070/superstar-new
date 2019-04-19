import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Data } from 'src/assets/data';
import { CssSelector } from '@angular/compiler';

export interface DialogData {
  name: string;
}



@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.css']
})
export class FeaturedProductsComponent implements OnInit {

  name: string ="ABC";
  // featuredProductDescription:Map<String,String> = new Data().;
  featuredProductShortDetails:Map<String,String>
  featuredProductProductName:String[];
  featuredProductDescription:Map<String,Object>

  constructor(public dialog: MatDialog) {
     
    this.featuredProductProductName = new Data().getProductName();
    this.featuredProductShortDetails = new Data().getShortDetails();
    this.featuredProductDescription = new Data().getDescription();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(Dialog, {
      width: '450px',
      data: {name: this.name}
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
    });
  }

  scrollTo(className: string):void {
    const elementList = document.querySelectorAll('.' + className);
    const element = elementList[0] as HTMLElement;
    element.scrollIntoView({ behavior: 'smooth' });
 }

  ngOnInit() {
  
  }

}


@Component({
  selector: 'dialog-box',
  templateUrl: 'dialog-box.html',
})
export class Dialog {

  constructor(
    public dialogRef: MatDialogRef<Dialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}