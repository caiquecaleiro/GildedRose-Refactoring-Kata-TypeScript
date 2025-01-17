import { Item, GildedRose } from "../app/gilded-rose";

const items = [
	new Item("+5 Dexterity Vest", 10, 20), //
	new Item("Aged Brie", 2, 0), //
	new Item("Elixir of the Mongoose", 5, 7), //
	new Item("Sulfuras, Hand of Ragnaros", 0, 80), //
	new Item("Sulfuras, Hand of Ragnaros", -1, 80),
	new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
	new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49),
	new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49),
	// this conjured item does not work properly yet
	new Item("Conjured Mana Cake", 3, 6),
];

const gildedRose = new GildedRose(items);

let days: number = 2;
if (process.argv.length > 2) {
	days = +process.argv[2];
}

for (let i = 0; i < days; i++) {
	console.log("-------- day " + i + " --------");
	console.log("name, sellIn, quality");
	items.forEach((element) => {
		console.log(
			element.name + " " + element.sellIn + " " + element.quality
		);
	});
	console.log();
	gildedRose.updateQuality();
}

// Test reference from existing code 11 days
// -------- day 0 --------
// name, sellIn, quality
// +5 Dexterity Vest 10 20
// Aged Brie 2 0
// Elixir of the Mongoose 5 7
// Sulfuras, Hand of Ragnaros 0 80
// Sulfuras, Hand of Ragnaros -1 80
// Backstage passes to a TAFKAL80ETC concert 15 20
// Backstage passes to a TAFKAL80ETC concert 10 49
// Backstage passes to a TAFKAL80ETC concert 5 49
// Conjured Mana Cake 3 6

// -------- day 1 --------
// name, sellIn, quality
// +5 Dexterity Vest 9 19
// Aged Brie 1 1
// Elixir of the Mongoose 4 6
// Sulfuras, Hand of Ragnaros 0 80
// Sulfuras, Hand of Ragnaros -1 80
// Backstage passes to a TAFKAL80ETC concert 14 21
// Backstage passes to a TAFKAL80ETC concert 9 50
// Backstage passes to a TAFKAL80ETC concert 4 50
// Conjured Mana Cake 2 5

// -------- day 2 --------
// name, sellIn, quality
// +5 Dexterity Vest 8 18
// Aged Brie 0 2
// Elixir of the Mongoose 3 5
// Sulfuras, Hand of Ragnaros 0 80
// Sulfuras, Hand of Ragnaros -1 80
// Backstage passes to a TAFKAL80ETC concert 13 22
// Backstage passes to a TAFKAL80ETC concert 8 50
// Backstage passes to a TAFKAL80ETC concert 3 50
// Conjured Mana Cake 1 4

// -------- day 3 --------
// name, sellIn, quality
// +5 Dexterity Vest 7 17
// Aged Brie -1 4
// Elixir of the Mongoose 2 4
// Sulfuras, Hand of Ragnaros 0 80
// Sulfuras, Hand of Ragnaros -1 80
// Backstage passes to a TAFKAL80ETC concert 12 23
// Backstage passes to a TAFKAL80ETC concert 7 50
// Backstage passes to a TAFKAL80ETC concert 2 50
// Conjured Mana Cake 0 3

// -------- day 4 --------
// name, sellIn, quality
// +5 Dexterity Vest 6 16
// Aged Brie -2 6
// Elixir of the Mongoose 1 3
// Sulfuras, Hand of Ragnaros 0 80
// Sulfuras, Hand of Ragnaros -1 80
// Backstage passes to a TAFKAL80ETC concert 11 24
// Backstage passes to a TAFKAL80ETC concert 6 50
// Backstage passes to a TAFKAL80ETC concert 1 50
// Conjured Mana Cake -1 1

// -------- day 5 --------
// name, sellIn, quality
// +5 Dexterity Vest 5 15
// Aged Brie -3 8
// Elixir of the Mongoose 0 2
// Sulfuras, Hand of Ragnaros 0 80
// Sulfuras, Hand of Ragnaros -1 80
// Backstage passes to a TAFKAL80ETC concert 10 26
// Backstage passes to a TAFKAL80ETC concert 5 50
// Backstage passes to a TAFKAL80ETC concert 0 50
// Conjured Mana Cake -2 0

// -------- day 6 --------
// name, sellIn, quality
// +5 Dexterity Vest 4 14
// Aged Brie -4 10
// Elixir of the Mongoose -1 0
// Sulfuras, Hand of Ragnaros 0 80
// Sulfuras, Hand of Ragnaros -1 80
// Backstage passes to a TAFKAL80ETC concert 9 28
// Backstage passes to a TAFKAL80ETC concert 4 50
// Backstage passes to a TAFKAL80ETC concert -1 0
// Conjured Mana Cake -3 0

// -------- day 7 --------
// name, sellIn, quality
// +5 Dexterity Vest 3 13
// Aged Brie -5 12
// Elixir of the Mongoose -2 0
// Sulfuras, Hand of Ragnaros 0 80
// Sulfuras, Hand of Ragnaros -1 80
// Backstage passes to a TAFKAL80ETC concert 8 30
// Backstage passes to a TAFKAL80ETC concert 3 50
// Backstage passes to a TAFKAL80ETC concert -2 0
// Conjured Mana Cake -4 0

// -------- day 8 --------
// name, sellIn, quality
// +5 Dexterity Vest 2 12
// Aged Brie -6 14
// Elixir of the Mongoose -3 0
// Sulfuras, Hand of Ragnaros 0 80
// Sulfuras, Hand of Ragnaros -1 80
// Backstage passes to a TAFKAL80ETC concert 7 32
// Backstage passes to a TAFKAL80ETC concert 2 50
// Backstage passes to a TAFKAL80ETC concert -3 0
// Conjured Mana Cake -5 0

// -------- day 9 --------
// name, sellIn, quality
// +5 Dexterity Vest 1 11
// Aged Brie -7 16
// Elixir of the Mongoose -4 0
// Sulfuras, Hand of Ragnaros 0 80
// Sulfuras, Hand of Ragnaros -1 80
// Backstage passes to a TAFKAL80ETC concert 6 34
// Backstage passes to a TAFKAL80ETC concert 1 50
// Backstage passes to a TAFKAL80ETC concert -4 0
// Conjured Mana Cake -6 0

// -------- day 10 --------
// name, sellIn, quality
// +5 Dexterity Vest 0 10
// Aged Brie -8 18
// Elixir of the Mongoose -5 0
// Sulfuras, Hand of Ragnaros 0 80
// Sulfuras, Hand of Ragnaros -1 80
// Backstage passes to a TAFKAL80ETC concert 5 37
// Backstage passes to a TAFKAL80ETC concert 0 50
// Backstage passes to a TAFKAL80ETC concert -5 0
// Conjured Mana Cake -7 0

// -------- day 11 --------
// name, sellIn, quality
// +5 Dexterity Vest -1 8
// Aged Brie -9 20
// Elixir of the Mongoose -6 0
// Sulfuras, Hand of Ragnaros 0 80
// Sulfuras, Hand of Ragnaros -1 80
// Backstage passes to a TAFKAL80ETC concert 4 40
// Backstage passes to a TAFKAL80ETC concert -1 0
// Backstage passes to a TAFKAL80ETC concert -6 0
// Conjured Mana Cake -8 0
