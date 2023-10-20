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

// Questions/Findings
// TODO: Sulfuras is said to be "Legendary, does this mean there might have more legendary items and this should be a class of its own?
// TODO: Conjured similar to Sulfuras, it does sounds like it does has many items under it, not just the mana cake.
// TODO: Aged Brie does increase in quality twice as fast when sell in has passed. Is this expected?

// Constants
const MAX_QUALITY = 50;
const MIN_QUALITY = 0;

export const ItemName = {
	AgedBrie: "Aged Brie",
	BackstagePasses: "Backstage passes to a TAFKAL80ETC concert",
	Sulfuras: "Sulfuras, Hand of Ragnaros",
	ConjuredManaCake: "Conjured Mana Cake",
};

// Gilded Rose
export class GildedRose {
	items: Array<GildedRoseItem>;

	constructor(items: Item[]) {
		this.items = items.map(({ name, sellIn, quality }) =>
			ItemFactory.createItem(name, sellIn, quality)
		);
	}

	updateQuality() {
		for (const item of this.items) {
			item.update();
		}
	}
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

abstract class GildedRoseItem extends Item {
	abstract update(): void;

	protected decrementSellIn() {
		this.sellIn--;
	}

	protected adjustQuality(amount: number) {
		this.quality = Math.min(
			Math.max(this.quality + amount, MIN_QUALITY),
			MAX_QUALITY
		);
	}
}

// Items classes
class AgedBrie extends GildedRoseItem {
	update(): void {
		this.decrementSellIn();
		this.adjustQuality(1);

		if (this.sellIn < 0) {
			this.adjustQuality(1); // Increase quality twice as fast when sellIn is negative
		}
	}
}

class BackstagePasses extends GildedRoseItem {
	update(): void {
		this.decrementSellIn();

		if (this.sellIn < 0) {
			this.quality = 0;
		} else if (this.sellIn <= 5) {
			this.adjustQuality(3);
		} else if (this.sellIn <= 10) {
			this.adjustQuality(2);
		} else {
			this.adjustQuality(1);
		}
	}
}

class NormalItem extends GildedRoseItem {
	update(): void {
		this.decrementSellIn();
		this.adjustQuality(-1);

		if (this.sellIn < 0) {
			this.adjustQuality(-1);
		}
	}
}

class Sulfuras extends GildedRoseItem {
	update(): void {
		// Sulfuras doesn't degrade in quality or sellIn
	}
}

class Conjured extends GildedRoseItem {
	update(): void {
		this.decrementSellIn();
		this.adjustQuality(-2);

		if (this.sellIn < 0) {
			this.adjustQuality(-2);
		}
	}
}
