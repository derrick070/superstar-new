import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Data } from 'src/assets/data';

export interface DialogData {
  name: string;
}
@Component({
  selector: 'app-detailed-products',
  templateUrl: './detailed-products.component.html',
  styleUrls: ['./detailed-products.component.css']
})
export class DetailedProductsComponent implements OnInit {

  name: string = "ABC";
  // detailedProductDescription:Map<String,String> = new Data().;
  // detailedProductShortDetails:Map<String,String>
  detailedProductProductName: String[];
  detailedProductSpecification: Map<String, Object>
  showArrow: boolean = false;

  constructor(public dialog: MatDialog) {

    this.detailedProductProductName = new Data().getProductName();
    // this.detailedProductShortDetails = new Data().getShortDetails();
    this.detailedProductSpecification = new Data().getSpecification();

  }

  @HostListener("window:scroll", [])
  onWindowScroll() {

    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number > 360) {
      this.showArrow = true;
    }
    else {
      this.showArrow = false;
    }


  }


  openDialog(): void {
    const dialogRef = this.dialog.open(ProductDialog, {
      width: '450px',
      data: { name: this.name }
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
    });
  }

  ngOnInit() {
    window.scrollTo(0, 0)
  }

  scrollToUp(className: string): void {
    document.querySelector('#title').scrollIntoView({ behavior: 'smooth' });
  
  }

}


@Component({
  selector: 'dialog-box',
  templateUrl: 'dialog-box.html',
})
export class ProductDialog {

  constructor(
    public dialogRef: MatDialogRef<ProductDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}








