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
            /*We use a swithc case with the names of each element, and we add or substract the qualitid acodingly to the product and the sellin time */
            switch (this.items[i].name) {
                case 'Conjured':
                    this.items[i].quality-=2
                    if(this.items[i].sellIn<0){
                        this.items[i].quality-=2
                    }
                    break;

                case 'Aged Brie':
                    if(this.items[i].quality<50){
                        this.items[i].quality+=1
                    }
                    break;   

                case 'Sulfuras, Hand of Ragnaros':
                    break;  

                case 'Backstage passes to a TAFKAL80ETC concert':
                    if(this.items[i].sellIn>0){
                        this.items[i].quality+=1
                        if (this.items[i].sellIn<11) {
                            this.items[i].quality+=1
                            if (this.items[i].sellIn<6) {
                                this.items[i].quality+=1
                            }
                        }
                    }else{
                        this.items[i].quality=0
                    }
                    break;  

                default:
                    this.items[i].quality-=1
                    if(this.items[i].sellIn<0){
                        this.items[i].quality-=1
                    }
                    break;
            }        
        }
        /*Here we give back the full array with the new specifications of quality and selling dates. */
        return this.items;
    }
}
