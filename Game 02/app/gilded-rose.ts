/*Goblin code do NOT alter*/
export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateQuality() {
        for (let i = 0; i < this.items.length; i++) {
            /*In this first if statement, by default to all items in the array the quality of the item will be reduced by 1 and by 2 in the case 
            of conjured items*/
            if (this.items[i].quality>0) {
                this.items[i].quality-=1
                if(this.items[i].name=='Conjured'){
                    this.items[i].quality-=1
                }
            }
            /*Then we take into acount the lengendary and the products that actually get better with time, and we add the quality 
            point that was taken in the first staement.
            The we check if they meet the criteria of quality under 50, and also add the extra quality point 
            and in the case of the concert we add also the extra 2 or 3 quality point that are given due to the date of the concert */
            if (this.items[i].name == 'Aged Brie' || this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert' ||  this.items[i].name =='Sulfuras, Hand of Ragnaros') {
                this.items[i].quality+=1
                if(this.items[i].quality<50){
                    this.items[i].quality+=1
                    if(this.items[i].sellIn<11 && this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert'){
                        this.items[i].quality+=1
                        if(this.items[i].sellIn<6){
                            this.items[i].quality+=1
                        }
                    }
                }
            }
            /*In this final set of conditionals, we check the sellIn dates and reduce them acordingly to the 
            product specifications, in the case of 'Sulfuras, no date will be reduce since this is the legenday item
            otherwise the date will be reduced by 1, and since we are checking the dates, we also reduce the quality of the products
            that are expired and also place the concert to 0 if the date has passed.*/
            if (this.items[i].name !='Sulfuras, Hand of Ragnaros') {
                this.items[i].sellIn-=1
                if(this.items[i].sellIn<0 && this.items[i].quality>0){
                    this.items[i].quality-=1
                    if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
                        this.items[i].quality=0
                    }
                    
                }
            }            
        }
        /*Here we give back the full array with the new specifications of quality and selling dates. */
        return this.items;
    }
}
