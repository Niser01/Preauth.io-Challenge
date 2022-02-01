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
                /*Since conjured degrades twice as fast under normal circunstances thats why quality is reduced by 2, but if the seling date has passed 
                it decreses twice as fast */
                case 'Conjured':
                    this.items[i].quality-=2
                    this.items[i].sellIn-=1
                    if(this.items[i].sellIn<0){
                        this.items[i].quality-=2
                    }
                    break;

                case 'Aged Brie':
                    /*The cheese will never loose quality, but it can not be more then 50 */
                    this.items[i].sellIn-=1
                    if(this.items[i].quality<50){
                        this.items[i].quality+=1
                    }
                    break;   

                case 'Sulfuras, Hand of Ragnaros':
                    /*Since sulfuras is a lengendary item, it will not loose quality or hace a selling date */
                    break;  

                case 'Backstage passes to a TAFKAL80ETC concert':
                    /*The concert will gain quality for each day that is closer to the concert date, if its less thn 10 days it will cost
                    double or if its less than 5 days it will triple the value, but it the date has passed the quality will be 0 */
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
                    this.items[i].sellIn-=1
                    break;  

                default:
                    /*All the other items will have a regular degration of quality and selling time, but if the selling date has passed, the value 
                    will be reduced by 2 */
                    this.items[i].quality-=1
                    this.items[i].sellIn-=1
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
