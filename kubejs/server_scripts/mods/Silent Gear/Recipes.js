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
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
