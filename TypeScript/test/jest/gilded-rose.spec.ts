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
});
