import { map } from 'rxjs/operators';

export class Data {

    productName: String[] = new Array();
    description: Map<String, Object> = new Map()
    shortDetails: Map<String, String> = new Map()

    constructor() {

    }

    getProductName():String[] 
    {
        this.productName[0]="p1";
        this.productName[1]="p2";
        this.productName[2]="p3";
        this.productName[3]="p4";
        this.productName[4]="p5";
        this.productName[5]="p6";

        return this.productName;
    }

    getDescription(): Map<String, Object> {

        let p1Map=new Map();
        p1Map.set("size","100cm")
        p1Map.set("weight","25kg")
        p1Map.set("colour","white")

        this.description.set("p1", p1Map);
        this.description.set("p2", p1Map);
        this.description.set("p3", p1Map);
        this.description.set("p4", p1Map);
        this.description.set("p5", p1Map);
        this.description.set("p6", p1Map);

        return this.description;
    }

    getShortDetails(): Map<String, String> {

        this.shortDetails.set("p1", "p1 short details");
        this.shortDetails.set("p2", "p2 short details");
        this.shortDetails.set("p3", "p3 short details");
        this.shortDetails.set("p4", "p4 short details");
        this.shortDetails.set("p5", "p5 short details");
        this.shortDetails.set("p6", "p6 short details");

        return this.shortDetails;
    }
}