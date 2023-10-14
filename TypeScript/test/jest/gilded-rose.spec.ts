import { Item, GildedRose } from "@/gilded-rose";

describe("Gilded Rose", () => {
	describe("Aged Brie", () => {
		describe("should increase quality", () => {
			it("by 1 when getting older", () => {
				const agedBrie = new Item("Aged Brie", 2, 0);
				const gildedRose = new GildedRose([agedBrie]);

				gildedRose.updateQuality();

				const [updatedAgedBrie] = gildedRose.items;

				expect(updatedAgedBrie.quality).toBe(1);
			});

			// Double check if this is intentional or bug, current code does that.
			it("by 2 when sell in has passed (negative)", () => {
				const agedBrie = new Item("Aged Brie", 0, 5);
				const gildedRose = new GildedRose([agedBrie]);

				gildedRose.updateQuality();

				const [updatedAgedBrie] = gildedRose.items;

				expect(updatedAgedBrie.quality).toBe(7);
			});

			it("up to the limit of 50", () => {
				const agedBrie = new Item("Aged Brie", 1, 50);
				const gildedRose = new GildedRose([agedBrie]);

				gildedRose.updateQuality();

				const [updatedAgedBrie] = gildedRose.items;

				expect(updatedAgedBrie.quality).toBe(50);
			});
		});

		describe("should decrease sell in", () => {
			it("by 1 when getting older", () => {
				const agedBrie = new Item("Aged Brie", 2, 0);
				const gildedRose = new GildedRose([agedBrie]);

				gildedRose.updateQuality();

				const [updatedAgedBrie] = gildedRose.items;

				expect(updatedAgedBrie.sellIn).toBe(1);
			});
		});
	});

	describe("Backstage passes", () => {
		describe("should increase quality", () => {
			it("by 1 when sell in is over 10 days", () => {
				const backstagePasses = new Item(
					"Backstage passes to a TAFKAL80ETC concert",
					12,
					1
				);
				const gildedRose = new GildedRose([backstagePasses]);

				gildedRose.updateQuality();

				const [updatedBackagePasses] = gildedRose.items;

				expect(updatedBackagePasses.quality).toBe(2);
			});

			it("by 2 when sell in is between 6 and 10 days", () => {
				const backstagePasses = new Item(
					"Backstage passes to a TAFKAL80ETC concert",
					11,
					0
				);
				const gildedRose = new GildedRose([backstagePasses]);

				gildedRose.updateQuality();

				const [updatedBackagePasses] = gildedRose.items;

				expect(updatedBackagePasses.quality).toBe(2);
			});

			it("by 3 when sell in is 5 days or less", () => {
				const backstagePasses = new Item(
					"Backstage passes to a TAFKAL80ETC concert",
					6,
					0
				);
				const gildedRose = new GildedRose([backstagePasses]);

				gildedRose.updateQuality();

				const [updatedBackagePasses] = gildedRose.items;

				expect(updatedBackagePasses.quality).toBe(3);
			});

			it("up to the limit of 50", () => {
				const backstagePasses = new Item(
					"Backstage passes to a TAFKAL80ETC concert",
					1,
					50
				);
				const gildedRose = new GildedRose([backstagePasses]);

				gildedRose.updateQuality();

				const [updatedBackagePasses] = gildedRose.items;

				expect(updatedBackagePasses.quality).toBe(50);
			});
		});

		describe("should decrease quality", () => {
			it("to 0 when sell in has passed (negative)", () => {
				const backstagePasses = new Item(
					"Backstage passes to a TAFKAL80ETC concert",
					0,
					50
				);
				const gildedRose = new GildedRose([backstagePasses]);

				gildedRose.updateQuality();

				const [updatedBackagePasses] = gildedRose.items;

				expect(updatedBackagePasses.quality).toBe(0);
			});
		});

		describe("should decrease sell in", () => {
			it("by 1 when getting older", () => {
				const backstagePasses = new Item(
					"Backstage passes to a TAFKAL80ETC concert",
					2,
					3
				);
				const gildedRose = new GildedRose([backstagePasses]);

				gildedRose.updateQuality();

				const [updatedBackagePasses] = gildedRose.items;

				expect(updatedBackagePasses.sellIn).toBe(1);
			});
		});
	});

	describe("Normal items", () => {
		describe("should decrease quality", () => {
			it("by 1 when getting older with positive sell in days", () => {
				const normalItem = new Item("Spike Sword", 3, 5);
				const gildedRose = new GildedRose([normalItem]);

				gildedRose.updateQuality();

				const [updatedNormalItem] = gildedRose.items;
				expect(updatedNormalItem.quality).toBe(4);
			});

			it("by 2 when sell in has passed", () => {
				const normalItem = new Item("Mastermind Shield", 0, 3);
				const gildedRose = new GildedRose([normalItem]);

				gildedRose.updateQuality();

				const [updatedNormalItem] = gildedRose.items;

				expect(updatedNormalItem.quality).toBe(1);
			});

			it("by 0 when quality reaches 0", () => {
				const normalItem = new Item("Obsidian Knife", 0, 0);
				const gildedRose = new GildedRose([normalItem]);

				gildedRose.updateQuality();

				const [updatedNormalItem] = gildedRose.items;

				expect(updatedNormalItem.quality).toBe(0);
			});
		});

		describe("should decrease sell in", () => {
			it("by 1 when getting older", () => {
				const normalItem = new Item("Royal Helmet", 2, 0);
				const gildedRose = new GildedRose([normalItem]);

				gildedRose.updateQuality();

				const [updatedNormalItem] = gildedRose.items;

				expect(updatedNormalItem.sellIn).toBe(1);
			});

			it("by 1 when sell in has already passed", () => {
				const normalItem = new Item("Golden Armor", 0, 0);
				const gildedRose = new GildedRose([normalItem]);

				gildedRose.updateQuality();

				const [updatedNormalItem] = gildedRose.items;

				expect(updatedNormalItem.sellIn).toBe(-1);
			});
		});
	});

	describe("Legendary items", () => {
		it("should not decrease sell in or quality", () => {
			const legendaryItem = new Item("Sulfuras, Hand of Ragnaros", 0, 80);
			const gildedRose = new GildedRose([legendaryItem]);

			gildedRose.updateQuality();

			const [updatedLegendaryItem] = gildedRose.items;

			expect(updatedLegendaryItem.sellIn).toBe(0);
			expect(updatedLegendaryItem.quality).toBe(80);
		});
	});

	describe("Conjured Items", () => {
		describe("should decrease quality", () => {
			it("by 2 when getting older with positive sell in days", () => {
				const conjuredItem = new Item("Conjured Mana Cake", 10, 10);
				const gildedRose = new GildedRose([conjuredItem]);

				gildedRose.updateQuality();

				const [updatedConjuredItem] = gildedRose.items;

				expect(updatedConjuredItem.quality).toBe(8);
			});

			it("by 4 when sell in has passed", () => {
				const conjuredItem = new Item("Conjured Mana Cake", 0, 10);
				const gildedRose = new GildedRose([conjuredItem]);

				gildedRose.updateQuality();

				const [updatedConjuredItem] = gildedRose.items;

				expect(updatedConjuredItem.quality).toBe(6);
			});
		});
	});
});
