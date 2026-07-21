// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
   if (Item.exists("apotheosis:god_fused_pearl")) {
    allthemods
      .shaped(Item.of(`create_enchantment_industry:infuser`), [" B ", " S ", "NGN"], {
        B: `#c:plates/brass`,
		S: `create:spout`,
		N: `create:nixie_tube`,
		G: `apotheosis:god_fused_pearl`
      })
      .id("create_enchantment_industry:crafting/infuser")
    }
	else { 
		allthemods.custom({
			"type": "apothic_enchanting:infusion",
			"input": {
				"item": "create:spout"
			},
			"max_requirements": {
				"arcana": 60.0,
				"eterna": 100.0,
				"quanta": 11.0
			},
			"requirements": {
				"arcana": 58.75,
				"eterna": 100.0,
				"quanta": 9.65
			},
			"result": {
				"count": 1,
				"id": "create_enchantment_industry:infuser"
			}
		}).id("create_enchantment_industry:crafting/infuser")
	}
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.