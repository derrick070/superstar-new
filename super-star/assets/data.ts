import { map } from 'rxjs/operators';

export class Data {

    productName: String[] = new Array();
    // description: Map<String, Object> = new Map()
    specification:Map<String, Object> = new Map()
    shortDetails: Map<String, String> = new Map()

    constructor() {

    }

    getProductName():String[] 
    {
        this.productName[0]="Deep Freezer Single Door";
        this.productName[1]="Deep Freezer 2 Door";
        this.productName[2]="Deep Freezer 3 Door";
        this.productName[3]="Deep Freezer 4 Door";
        this.productName[4]="2 Door Vertical";
        this.productName[5]="4 Door Vertical";
        this.productName[6]="Water Cooler 50";
        this.productName[7]="Water Cooler 80";
        this.productName[8]="Water Cooler 100";
        this.productName[9]="Water Cooler 200";


        return this.productName;
    }

    getSpecification(): Map<String, Object> {

        let p1Map=new Map();
        p1Map.set("Type","1 Door")
        p1Map.set("Dimensions","24*24*36")
        p1Map.set("Capacity","100 Ltr.")

        let p2Map=new Map();
        p2Map.set("Type","2 Door Top")
        p2Map.set("Dimensions","36*24*36")
        p2Map.set("Capacity","200 Ltr.")

        let p3Map=new Map();
        p3Map.set("Type","3 Door Top Model")
        p3Map.set("Dimensions","56*24*36")
        p3Map.set("Capacity","400 Ltr.")

        let p4Map=new Map();
        p4Map.set("Type","4 Door Top Model")
        p4Map.set("Dimensions","72*24*36")
        p4Map.set("Capacity","500 Ltr.")

        let p5Map=new Map();
        p5Map.set("Type","Vertical Freezer")
        p5Map.set("Dimensions","82*26*26")
        p5Map.set("Capacity","196 Bottles")

        let p6Map=new Map();
        p6Map.set("Type","Vertical Freezer")
        p6Map.set("Dimensions","82*26*45")
        p6Map.set("Capacity","288 Bottles")

        let p7Map=new Map();
        p7Map.set("Type","Water Cooler")
        p7Map.set("Dimensions","18*18*55")
        p7Map.set("Capacity","50 ltr.")

        let p8Map=new Map();
        p8Map.set("Type","Water Cooler")
        p8Map.set("Dimensions","20*20*55")
        p8Map.set("Capacity","80 ltr.")

        let p9Map=new Map();
        p9Map.set("Type","Water Cooler")
        p9Map.set("Dimensions","23*23*55")
        p9Map.set("Capacity","100 ltr.")

        let p10Map=new Map();
        p10Map.set("Type","Water Cooler")
        p10Map.set("Dimensions","36*28*55")
        p10Map.set("Capacity","200 ltr.")
        

        this.specification.set("Deep Freezer Single Door", p1Map);
        this.specification.set("Deep Freezer 2 Door", p2Map);
        this.specification.set("Deep Freezer 3 Door", p3Map);
        this.specification.set("Deep Freezer 4 Door", p4Map);
        this.specification.set("2 Door Vertical", p5Map);
        this.specification.set("4 Door Vertical", p6Map);
        this.specification.set("Water Cooler 50", p7Map);
        this.specification.set("Water Cooler 80", p8Map);
        this.specification.set("Water Cooler 100", p9Map);
        this.specification.set("Water Cooler 200", p10Map);

        return this.specification;
    }

    // getShortDetails(): Map<String, String> {

    //     this.shortDetails.set("Deep Freezer Single Door", "p1 short details");
    //     this.shortDetails.set("Deep Freezer 2 Door", "p2 short details");
    //     this.shortDetails.set("Deep Freezer 3 Door", "p3 short details");
    //     this.shortDetails.set("Deep Freezer 4 Door", "p4 short details");
    //     this.shortDetails.set("2 Door Vertical", "p5 short details");
    //     this.shortDetails.set("4 Door Vertical", "p6 short details");

    //     return this.shortDetails;
    // }
}