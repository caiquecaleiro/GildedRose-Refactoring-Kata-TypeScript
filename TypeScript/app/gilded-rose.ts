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

// Questions/Findings
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
interface GildedRoseItem extends Item {
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
	update(): void {
		this.sellIn--;
		this.quality = Math.min(this.quality + 1, 50);

		// TODO: review this compared to the existing logic, might not be expected
		if (this.sellIn < 0) {
			// Increase quality twice as fast when sellIn is negative
			this.quality = Math.min(this.quality + 1, 50);
		}
	}
}

class BackstagePasses extends Item {
	update(): void {
		this.sellIn--;

		if (this.sellIn > 10) {
			this.quality = Math.min(this.quality + 1, 50);
		} else if (this.sellIn > 5 && this.sellIn <= 10) {
			this.quality = Math.min(this.quality + 2, 50);
		} else if (this.sellIn >= 0 && this.sellIn <= 5) {
			this.quality = Math.min(this.quality + 3, 50);
		} else {
			this.quality = 0;
		}
	}
}

class NormalItem extends Item {
	update(): void {
		this.sellIn--;
		this.quality = Math.max(this.quality - 1, 0);

		if (this.sellIn < 0) {
			this.quality = Math.max(this.quality - 1, 0);
		}
	}
}

class Sulfuras extends Item {
	update(): void {}
}

class Conjured extends Item {
	update(): void {
		this.sellIn--;
		this.quality = Math.max(this.quality - 2, 0);

		if (this.sellIn < 0) {
			this.quality = Math.max(this.quality - 2, 0);
		}
	}
}
