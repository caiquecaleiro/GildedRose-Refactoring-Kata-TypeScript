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
					2,
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
});
