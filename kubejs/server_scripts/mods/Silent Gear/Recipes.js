// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
    allthemods.custom(
        {
            "type": "farmingforblockheads:market",
            "category": "farmingforblockheads:seeds",
            "preset": "minecraft:seeds",
            "result": {
                "count": 1,
                "item": "silentgear:fluffy_seeds"
            }
        }
    )

    allthemods.custom(
        {
            "type": "farmingforblockheads:market",
            "category": "farmingforblockheads:seeds",
            "preset": "minecraft:seeds",
            "result": {
                "count": 1,
                "item": "silentgear:flax_seeds"
            }
        }
    )
    //adds a salvage for the shield
    allthemods.custom(
        { "type": "silentgear:salvaging",
            "ingredient": { "item":"minecraft:shield"},
            "results": [{ "count": 6, "id": "minecraft:oak_planks"}, {"count": 1, "id": "minecraft:iron_ingot"}]
        }
    )
    //adds a chainmail salvage, mirroring the crafting recipe from MineColonies, which uses vanilla Iron items rather than Modern Industrialization Iron Rings
    //Chainmail Helmet
    allthemods.custom(
	    { "type": "silentgear:salvaging",
		    "ingredient": {"item":"minecraft:chainmail_helmet" },
		    "results": [{"count": 5, "id": "minecraft:iron_nugget" }, {"count":1,"id":"minecraft:iron_ingot"}]
	    }
    )
    //Chainmail Chestplate
    allthemods.custom(
	    { "type": "silentgear:salvaging",
		    "ingredient": {"item":"minecraft:chainmail_chestplate" },
		    "results": [{"count": 6, "id": "minecraft:iron_nugget" }, {"count":2,"id":"minecraft:iron_ingot"}]
	    }
    )
    //Chainmail Leggings
    allthemods.custom(
	    { "type": "silentgear:salvaging",
		    "ingredient": {"item":"minecraft:chainmail_leggings" },
		    "results": [{"count": 4, "id": "minecraft:iron_nugget" }, {"count":3,"id":"minecraft:iron_ingot"}]
	    }
    )
    //Chainmail Boots
    allthemods.custom(
	    { "type": "silentgear:salvaging",
		    "ingredient": {"item":"minecraft:chainmail_boots" },
		    "results": [{"count": 2, "id": "minecraft:iron_nugget" }, {"count":2,"id":"minecraft:iron_ingot"}]
	    }
    )
    //Adds Pneumaticraft's Compressed Iron Armor to the Salvager
    //Compressed Iron Helmet
    allthemods.custom(
	    { "type": "silentgear:salvaging",
		    "ingredient": {"item":"pneumaticcraft:compressed_iron_helmet" },
		    "results": [{"count": 5, "id": "minecraft:leather" }, {"count":5,"id":"pneumaticcraft:ingot_iron_compressed"}]
	    }
    )
    //Compressed Iron Chestplate
    allthemods.custom(
	    { "type": "silentgear:salvaging",
		    "ingredient": {"item":"pneumaticcraft:compressed_iron_chestplate" },
		    "results": [{"count": 8, "id": "minecraft:leather" }, {"count":8,"id":"pneumaticcraft:ingot_iron_compressed"}]
	    }
    )
    //Compressed Iron Leggings
    allthemods.custom(
	    { "type": "silentgear:salvaging",
		    "ingredient": {"item":"pneumaticcraft:compressed_iron_leggings" },
		    "results": [{"count": 7, "id": "minecraft:leather" }, {"count":7,"id":"pneumaticcraft:ingot_iron_compressed"}]
	    }
    )
    //Compressed Iron Boots
    allthemods.custom(
	    { "type": "silentgear:salvaging",
		    "ingredient": {"item":"pneumaticcraft:compressed_iron_boots" },
		    "results": [{"count": 4, "id": "minecraft:leather" }, {"count":4,"id":"pneumaticcraft:ingot_iron_compressed"}]
	    }
    )
	//adds Everything is Copper gear to the Salvager
	//Copper Pickaxe
    allthemods.custom(
	    {
		    "type": "silentgear:salvaging",
		    "ingredient": {
			    "item": "everythingcopper:copper_pickaxe" },
		    "results": [
			    { "count": 3,
			      "id": "minecraft:copper_ingot" },
			    { "count": 2,
			      "id": "minecraft:stick" }
		    ]
	    }
    )
	//Copper Horse Armor
    allthemods.custom(
	    { "type": "silentgear:salvaging",
		    "ingredient": { "item": "everythingcopper:copper_horse_armor" },
		    "results": [{"count": 6, "id": "minecraft:copper_ingot" }, {"count": 1, "id": "minecraft:leather"}]
	    }
    )
	//Copper Sword
    allthemods.custom(
	    { "type": "silentgear:salvaging",
		    "ingredient": { "item": "everythingcopper:copper_sword" },
		    "results": [{"count": 2, "id": "minecraft:copper_ingot" }, {"count": 1, "id": "minecraft:stick" }]
	    }
    )
	//Copper Axe
    allthemods.custom(
	    { "type": "silentgear:salvaging",
		    "ingredient": { "item": "everythingcopper:copper_axe" },
		    "results": [{"count": 3, "id": "minecraft:copper_ingot" }, {"count": 2, "id": "minecraft:stick" }]
	    }
    )
    //Copper Helmet
    allthemods.custom(
	    { "type": "silentgear:salvaging",
		    "ingredient": {"item":"everythingcopper:copper_helmet" },
		    "results": [{"count": 5, "id": "minecraft:copper_ingot" }]
	    }
    )
	//Copper Chestplate
    allthemods.custom(
	    { "type": "silentgear:salvaging",
		    "ingredient": {"item":"everythingcopper:copper_chestplate" },
		    "results": [{"count": 8, "id": "minecraft:copper_ingot" }]
	    }
    )
	//Copper Leggings
    allthemods.custom(
	    { "type": "silentgear:salvaging",
		    "ingredient": {"item":"everythingcopper:copper_leggings" },
		    "results": [{"count":7, "id": "minecraft:copper_ingot" }]
	    }
    )
    //Copper Boots
    allthemods.custom(
	    { "type": "silentgear:salvaging",
		    "ingredient": {"item":"everythingcopper:copper_boots" },
		    "results": [{"count":4, "id": "minecraft:copper_ingot" }]
	    }
    )
    //Copper Hoe
    allthemods.custom(
	    { "type": "silentgear:salvaging",
		    "ingredient": {"item":"everythingcopper:copper_hoe" },
		    "results": [{"count":2, "id": "minecraft:copper_ingot" }, {"count":2,"id":"minecraft:stick"}]
	    }
    )
    //Copper Shovel
    allthemods.custom(
	    { "type": "silentgear:salvaging",
		    "ingredient": {"item":"everythingcopper:copper_shovel" },
		    "results": [{"count":1, "id": "minecraft:copper_ingot" }, {"count":2,"id":"minecraft:stick"}]
	    }
    )
//Adds the Twilight Forest gear to the Salvager
//Steeleaf Pickaxe
    allthemods.custom(
	    { "type": "silentgear:salvaging",
		    "ingredient": {"item":"twilightforest:steeleaf_pickaxe" },
		    "results": [{"count":3, "id": "twilightforest:steeleaf_ingot" }, {"count":2,"id":"minecraft:stick"}]
	    }
    )
//Steeleaf Shovel
    allthemods.custom(
	    { "type": "silentgear:salvaging",
		    "ingredient": {"item":"twilightforest:steeleaf_shovel" },
		    "results": [{"count":1, "id": "twilightforest:steeleaf_ingot" }, {"count":2,"id":"minecraft:stick"}]
	    }
    )
//Steeleaf Sword
    allthemods.custom(
	    { "type": "silentgear:salvaging",
		    "ingredient": {"item":"twilightforest:steeleaf_sword" },
		    "results": [{"count":2, "id": "twilightforest:steeleaf_ingot" }, {"count":1,"id":"minecraft:stick"}]
	    }
    )
//Steeleaf Axe
    allthemods.custom(
	    { "type": "silentgear:salvaging",
		    "ingredient": {"item":"twilightforest:steeleaf_axe" },
		    "results": [{"count":3, "id": "twilightforest:steeleaf_ingot" }, {"count":2,"id":"minecraft:stick"}]
	    }
    )
//Steeleaf Hoe
    allthemods.custom(
	    { "type": "silentgear:salvaging",
		    "ingredient": {"item":"twilightforest:steeleaf_hoe" },
		    "results": [{"count":2, "id": "twilightforest:steeleaf_ingot" }, {"count":2,"id":"minecraft:stick"}]
	    }
    )
//Steeleaf Helmet
    allthemods.custom(
	    { "type": "silentgear:salvaging",
		    "ingredient": {"item":"twilightforest:steeleaf_helmet" },
		    "results": [{"count":5, "id": "twilightforest:steeleaf_ingot" }]
	    }
    )
//Steeleaf Chestplate
    allthemods.custom(
	    { "type": "silentgear:salvaging",
		    "ingredient": {"item":"twilightforest:steeleaf_chestplate" },
		    "results": [{"count":8, "id": "twilightforest:steeleaf_ingot" }]
	    }
    )
//Steeleaf Leggings
    allthemods.custom(
	    { "type": "silentgear:salvaging",
		    "ingredient": {"item":"twilightforest:steeleaf_leggings" },
		    "results": [{"count":7, "id": "twilightforest:steeleaf_ingot" }]
	    }
    )
//Steeleaf Boots
    allthemods.custom(
	    { "type": "silentgear:salvaging",
		    "ingredient": {"item":"twilightforest:steeleaf_boots" },
		    "results": [{"count":4, "id": "twilightforest:steeleaf_ingot" }]
	    }
    )
//Knightmetal Helmet
    allthemods.custom(
	    { "type": "silentgear:salvaging",
		    "ingredient": {"item":"twilightforest:knightmetal_helmet" },
		    "results": [{"count":5, "id": "twilightforest:knightmetal_ingot" }]
	    }
    )
//Knightmetal Chestplate
    allthemods.custom(
	    { "type": "silentgear:salvaging",
		    "ingredient": {"item":"twilightforest:knightmetal_chestplate" },
		    "results": [{"count":8, "id": "twilightforest:knightmetal_ingot" }]
	    }
    )
//Knightmetal Greaves
    allthemods.custom(
	    { "type": "silentgear:salvaging",
		    "ingredient": {"item":"twilightforest:knightmetal_leggings" },
		    "results": [{"count":7, "id": "twilightforest:knightmetal_ingot" }]
	    }
    )
//Knightmetal Boots
    allthemods.custom(
	    { "type": "silentgear:salvaging",
		    "ingredient": {"item":"twilightforest:knightmetal_boots" },
		    "results": [{"count":4, "id": "twilightforest:knightmetal_ingot" }]
	    }
    )
//Knightmetal Sword
    allthemods.custom(
	    { "type": "silentgear:salvaging",
		    "ingredient": {"item":"twilightforest:knightmetal_sword" },
		    "results": [{"count":2, "id": "twilightforest:knightmetal_ingot" }, {"count":1,"id":"minecraft:stick"}]
	    }
    )
//Knightmetal Pickaxe
    allthemods.custom(
	    { "type": "silentgear:salvaging",
		    "ingredient": {"item":"twilightforest:knightmetal_pickaxe" },
		    "results": [{"count":3, "id": "twilightforest:knightmetal_ingot" }, {"count":2,"id":"minecraft:stick"}]
	    }
    )
//Knightmetal Axe
    allthemods.custom(
	    { "type": "silentgear:salvaging",
		    "ingredient": {"item":"twilightforest:knightmetal_axe" },
		    "results": [{"count":3, "id": "twilightforest:knightmetal_ingot" }, {"count":2,"id":"minecraft:stick"}]
	    }
    )
//Knightmetal Shield
    allthemods.custom(
	    { "type": "silentgear:salvaging",
		    "ingredient": {"item":"twilightforest:knightmetal_shield" },
		    "results": [{"count":6, "id": "twilightforest:knightmetal_ingot" }, {"count":6,"id":"minecraft:oak_planks"}, {"count":1, "id": "minecraft:iron_ingot"}]
	    }
    )
//Ironwood Pickaxe
    allthemods.custom(
	    { "type": "silentgear:salvaging",
		    "ingredient": {"item":"twilightforest:ironwood_pickaxe" },
		    "results": [{"count":3, "id": "twilightforest:ironwood_ingot" }, {"count":2,"id":"minecraft:stick"}]
	    }
    )
//Ironwood Shovel
    allthemods.custom(
	    { "type": "silentgear:salvaging",
		    "ingredient": {"item":"twilightforest:ironwood_shovel" },
		    "results": [{"count":1, "id": "twilightforest:ironwood_ingot" }, {"count":2,"id":"minecraft:stick"}]
	    }
    )
//Ironwood Sword
    allthemods.custom(
	    { "type": "silentgear:salvaging",
		    "ingredient": {"item":"twilightforest:ironwood_sword" },
		    "results": [{"count":2, "id": "twilightforest:ironwood_ingot" }, {"count":1,"id":"minecraft:stick"}]
	    }
    )
//Ironwood Axe
    allthemods.custom(
	    { "type": "silentgear:salvaging",
		    "ingredient": {"item":"twilightforest:ironwood_sword" },
		    "results": [{"count":3, "id": "twilightforest:ironwood_ingot" }, {"count":2,"id":"minecraft:stick"}]
	    }
    )
//Ironwood Hoe
    allthemods.custom(
	    { "type": "silentgear:salvaging",
		    "ingredient": {"item":"twilightforest:ironwood_sword" },
		    "results": [{"count":2, "id": "twilightforest:ironwood_ingot" }, {"count":2,"id":"minecraft:stick"}]
	    }
    )
//Ironwood Helmet
    allthemods.custom(
	    { "type": "silentgear:salvaging",
		    "ingredient": {"item":"twilightforest:ironwood_helmet" },
		    "results": [{"count":5, "id": "twilightforest:ironwood_ingot" }]
	    }
    )
//Ironwood Chestplate
    allthemods.custom(
	    { "type": "silentgear:salvaging",
		    "ingredient": {"item":"twilightforest:ironwood_chestplate" },
		    "results": [{"count":8, "id": "twilightforest:ironwood_ingot" }]
	    }
    )
//Ironwood Leggings
    allthemods.custom(
	    { "type": "silentgear:salvaging",
		    "ingredient": {"item":"twilightforest:ironwood_leggings" },
		    "results": [{"count":7, "id": "twilightforest:ironwood_ingot" }]
	    }
    )
//Ironwood Boots
    allthemods.custom(
	    { "type": "silentgear:salvaging",
		    "ingredient": {"item":"twilightforest:ironwood_boots" },
		    "results": [{"count":4, "id": "twilightforest:ironwood_ingot" }]
	    }
    )
//Arctic Hood
    allthemods.custom(
	    { "type": "silentgear:salvaging",
		    "ingredient": {"item":"twilightforest:arctic_helmet" },
		    "results": [{"count":5, "id": "twilightforest:arctic_fur" }]
	    }
    )
//Arctic Jacket
    allthemods.custom(
	    { "type": "silentgear:salvaging",
		    "ingredient": {"item":"twilightforest:arctic_chestplate" },
		    "results": [{"count":8, "id": "twilightforest:arctic_fur" }]
	    }
    )
//Arctic Leggings
    allthemods.custom(
	    { "type": "silentgear:salvaging",
		    "ingredient": {"item":"twilightforest:arctic_leggings" },
		    "results": [{"count":7, "id": "twilightforest:arctic_fur" }]
	    }
    )
//Arctic Boots
    allthemods.custom(
	    { "type": "silentgear:salvaging",
		    "ingredient": {"item":"twilightforest:arctic_boots" },
		    "results": [{"count":4, "id": "twilightforest:arctic_fur" }]
	    }
    )
})
// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
