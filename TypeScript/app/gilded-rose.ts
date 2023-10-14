// ** Do not touch due to Goblin
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
// ** Do not touch due to Goblin ENDS

// TODO: Sulfuras is said to be "Legendary, does this mean there might have more legendary items and this should be a class of its own?
// TODO: Conjured similar to Sulfuras, it does sounds like it does has many items under it, not just the mana cake.
// TODO: Aged Brie does increase in quality twice as fast when sell in has passed. Is this expected?

// Constants
export const ItemName = {
	AgedBrie: "Aged Brie",
	BackstagePasses: "Backstage passes to a TAFKAL80ETC concert",
	Sulfuras: "Sulfuras, Hand of Ragnaros",
	ConjuredManaCake: "Conjured Mana Cake",
};
interface GildedRoseItem {
	update(): void;
}

class ItemFactory {
	static createItem(
		name: string,
		sellIn: number,
		quality: number
	): GildedRoseItem {
		switch (name) {
			case ItemName.AgedBrie:
				return new AgedBrie(name, sellIn, quality);
			case ItemName.BackstagePasses:
				return new BackstagePasses(name, sellIn, quality);
			case ItemName.Sulfuras:
				return new Sulfuras(name, sellIn, quality);
			case ItemName.ConjuredManaCake:
				return new Conjured(name, sellIn, quality);
			default:
				return new NormalItem(name, sellIn, quality);
		}
	}
}

// Items classes
class AgedBrie extends Item {
	update(): void {}
}

class BackstagePasses extends Item {
	update(): void {}
}

class Sulfuras extends Item {
	update(): void {}
}

class Conjured extends Item {
	update(): void {}
}

class NormalItem extends Item {
	update(): void {}
}

// Existing working code
export class GildedRose {
	items: Array<Item>;

	constructor(items = [] as Array<Item>) {
		this.items = items;
	}

	updateQuality() {
		for (let i = 0; i < this.items.length; i++) {
			if (this.items[i].name != "Sulfuras, Hand of Ragnaros") {
				this.items[i].sellIn = this.items[i].sellIn - 1;
			}

			if (
				this.items[i].name != "Aged Brie" &&
				this.items[i].name !=
					"Backstage passes to a TAFKAL80ETC concert"
			) {
				if (this.items[i].quality > 0) {
					if (this.items[i].name != "Sulfuras, Hand of Ragnaros") {
						this.items[i].quality = this.items[i].quality - 1;
					}
				}
			} else {
				if (this.items[i].quality < 50) {
					this.items[i].quality = this.items[i].quality + 1;
					if (
						this.items[i].name ==
						"Backstage passes to a TAFKAL80ETC concert"
					) {
						if (this.items[i].quality < 50) {
							if (
								this.items[i].sellIn > 5 &&
								this.items[i].sellIn < 11
							) {
								this.items[i].quality =
									this.items[i].quality + 1;
							} else if (this.items[i].sellIn < 6) {
								this.items[i].quality =
									this.items[i].quality + 2;
							}
						}
					}
				}
			}

			if (this.items[i].sellIn < 0) {
				if (this.items[i].name != "Aged Brie") {
					if (
						this.items[i].name !=
						"Backstage passes to a TAFKAL80ETC concert"
					) {
						if (this.items[i].quality > 0) {
							if (
								this.items[i].name !=
								"Sulfuras, Hand of Ragnaros"
							) {
								this.items[i].quality =
									this.items[i].quality - 1;
							}
						}
					} else {
						this.items[i].quality =
							this.items[i].quality - this.items[i].quality;
					}
				} else {
					if (this.items[i].quality < 50) {
						this.items[i].quality = this.items[i].quality + 1;
					}
				}
			}
		}

		return this.items;
	}
}
