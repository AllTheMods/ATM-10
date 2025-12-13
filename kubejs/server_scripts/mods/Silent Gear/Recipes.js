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
    //	MEKANISM
    //	LAPIS LAZULI TOOLS
    //	PAXEL
    allthemods.custom(
        { "type": "silentgear:salvaging",
            "ingredient": {"item":"mekanismtools:lapis_lazuli_paxel" },
            "results": [{"count":2, "id": "minecraft:lapis_lazuli" }, {"count":1,"id":"minecraft:stick"}]
        }
    )
    //	SWORD
    allthemods.custom(
        { "type": "silentgear:salvaging",
            "ingredient": {"item":"mekanismtools:lapis_lazuli_sword" },
            "results": [{"count":2, "id": "minecraft:lapis_lazuli" }, {"count":1,"id":"minecraft:stick"}]
        }
    );
    //	PICKAXE
    allthemods.custom(
        { "type": "silentgear:salvaging",
            "ingredient": {"item":"mekanismtools:lapis_lazuli_pickaxe" },
            "results": [{"count":3, "id": "minecraft:lapis_lazuli" }, {"count":2,"id":"minecraft:stick"}]
        }
    );
    //	AXE
    allthemods.custom(
        { "type": "silentgear:salvaging",
            "ingredient": {"item":"mekanismtools:lapis_lazuli_axe" },
            "results": [{"count":3, "id": "minecraft:lapis_lazuli" }, {"count":2,"id":"minecraft:stick"}]
        }
    );
    //	SHOVEL
    allthemods.custom(
        { "type": "silentgear:salvaging",
            "ingredient": {"item":"mekanismtools:lapis_lazuli_shovel" },
            "results": [{"count":1, "id": "minecraft:lapis_lazuli" }, {"count":2,"id":"minecraft:stick"}]
        }
    );
    //	HOE
    allthemods.custom(
        { "type": "silentgear:salvaging",
            "ingredient": {"item":"mekanismtools:lapis_lazuli_hoe" },
            "results": [{"count":2, "id": "minecraft:lapis_lazuli" }, {"count":2,"id":"minecraft:stick"}]
        }
    );

    //	LAPIS LAZULI ARMOR
    //	HELMET
    allthemods.custom(
        { "type": "silentgear:salvaging",
            "ingredient": {"item":"mekanismtools:lapis_lazuli_helmet" },
            "results": [{"count":5, "id": "minecraft:lapis_lazuli" }]
        }
    );
    //	CHESTPLATE
    allthemods.custom(
        { "type": "silentgear:salvaging",
            "ingredient": {"item":"mekanismtools:lapis_lazuli_chestplate" },
            "results": [{"count":8, "id": "minecraft:lapis_lazuli" }]
        }
    );
    //	LEGGINS
    allthemods.custom(
        { "type": "silentgear:salvaging",
            "ingredient": {"item":"mekanismtools:lapis_lazuli_leggings" },
            "results": [{"count":7, "id": "minecraft:lapis_lazuli" }]
        }
    );
    //	BOOTS
    allthemods.custom(
        { "type": "silentgear:salvaging",
            "ingredient": {"item":"mekanismtools:lapis_lazuli_boots" },
            "results": [{"count":4, "id": "minecraft:lapis_lazuli" }]
        }
    );

    // BRONZE TOOLS
    allthemods.custom(
        { "type": "silentgear:salvaging",
            "ingredient": {"item":"mekanismtools:bronze_paxel" },
            "results": [{"count":2, "id": "alltheores:bronze_ingot" }, {"count":1,"id":"minecraft:stick"}]
        }
    );
    //	SWORD
    allthemods.custom(
        { "type": "silentgear:salvaging",
            "ingredient": {"item":"mekanismtools:bronze_sword" },
            "results": [{"count":2, "id": "alltheores:bronze_ingot" }, {"count":1,"id":"minecraft:stick"}]
        }
    );
    //	PICKAXE
    allthemods.custom(
        { "type": "silentgear:salvaging",
            "ingredient": {"item":"mekanismtools:bronze_pickaxe" },
            "results": [{"count":3, "id": "alltheores:bronze_ingot" }, {"count":2,"id":"minecraft:stick"}]
        }
    );
    //	AXE
    allthemods.custom(
        { "type": "silentgear:salvaging",
            "ingredient": {"item":"mekanismtools:bronze_axe" },
            "results": [{"count":3, "id": "alltheores:bronze_ingot" }, {"count":2,"id":"minecraft:stick"}]
        }
    );
    //	SHOVEL
    allthemods.custom(
        { "type": "silentgear:salvaging",
            "ingredient": {"item":"mekanismtools:bronze_shovel" },
            "results": [{"count":1, "id": "alltheores:bronze_ingot" }, {"count":2,"id":"minecraft:stick"}]
        }
    );
    //	HOE
    allthemods.custom(
        { "type": "silentgear:salvaging",
            "ingredient": {"item":"mekanismtools:bronze_hoe" },
            "results": [{"count":2, "id": "alltheores:bronze_ingot" }, {"count":2,"id":"minecraft:stick"}]
        }
    );

    // BRONZE ARMOR
    //	HELMET
    allthemods.custom(
        { "type": "silentgear:salvaging",
            "ingredient": {"item":"mekanismtools:bronze_helmet" },
            "results": [{"count":5, "id": "alltheores:bronze_ingot" }]
        }
    );
    //	CHESTPLATE
    allthemods.custom(
        { "type": "silentgear:salvaging",
            "ingredient": {"item":"mekanismtools:bronze_chestplate" },
            "results": [{"count":8, "id": "alltheores:bronze_ingot" }]
        }
    );
    //	LEGGINS
    allthemods.custom(
        { "type": "silentgear:salvaging",
            "ingredient": {"item":"mekanismtools:bronze_leggings" },
            "results": [{"count":7, "id": "alltheores:bronze_ingot" }]
        }
    );
    //	BOOTS
    allthemods.custom(
        { "type": "silentgear:salvaging",
            "ingredient": {"item":"mekanismtools:bronze_boots" },
            "results": [{"count":4, "id": "alltheores:bronze_ingot" }]
        }
    );


    // OSMIUM TOOLS
    allthemods.custom(
        { "type": "silentgear:salvaging",
            "ingredient": {"item":"mekanismtools:osmium_paxel" },
            "results": [{"count":2, "id": "alltheores:osmium_ingot" }, {"count":1,"id":"minecraft:stick"}]
        }
    );
    //	SWORD
    allthemods.custom(
        { "type": "silentgear:salvaging",
            "ingredient": {"item":"mekanismtools:osmium_sword" },
            "results": [{"count":2, "id": "alltheores:osmium_ingot" }, {"count":1,"id":"minecraft:stick"}]
        }
    );
    //	PICKAXE
    allthemods.custom(
        { "type": "silentgear:salvaging",
            "ingredient": {"item":"mekanismtools:osmium_pickaxe" },
            "results": [{"count":3, "id": "alltheores:osmium_ingot" }, {"count":2,"id":"minecraft:stick"}]
        }
    );
    //	AXE
    allthemods.custom(
        { "type": "silentgear:salvaging",
            "ingredient": {"item":"mekanismtools:osmium_axe" },
            "results": [{"count":3, "id": "alltheores:osmium_ingot" }, {"count":2,"id":"minecraft:stick"}]
        }
    );
    //	SHOVEL
    allthemods.custom(
        { "type": "silentgear:salvaging",
            "ingredient": {"item":"mekanismtools:osmium_shovel" },
            "results": [{"count":1, "id": "alltheores:osmium_ingot" }, {"count":2,"id":"minecraft:stick"}]
        }
    );
    //	HOE
    allthemods.custom(
        { "type": "silentgear:salvaging",
            "ingredient": {"item":"mekanismtools:osmium_hoe" },
            "results": [{"count":2, "id": "alltheores:osmium_ingot" }, {"count":2,"id":"minecraft:stick"}]
        }
    );

    // OSMIUM ARMOR
    //	HELMET
    allthemods.custom(
        { "type": "silentgear:salvaging",
            "ingredient": {"item":"mekanismtools:osmium_helmet" },
            "results": [{"count":5, "id": "alltheores:osmium_ingot" }]
        }
    );
    //	CHESTPLATE
    allthemods.custom(
        { "type": "silentgear:salvaging",
            "ingredient": {"item":"mekanismtools:osmium_chestplate" },
            "results": [{"count":8, "id": "alltheores:osmium_ingot" }]
        }
    );
    //	LEGGINS
    allthemods.custom(
        { "type": "silentgear:salvaging",
            "ingredient": {"item":"mekanismtools:osmium_leggings" },
            "results": [{"count":7, "id": "alltheores:osmium_ingot" }]
        }
    );
    //	BOOTS
    allthemods.custom(
        { "type": "silentgear:salvaging",
            "ingredient": {"item":"mekanismtools:osmium_boots" },
            "results": [{"count":4, "id": "alltheores:osmium_ingot" }]
        }
    );


    // REFINED OBSIDIAN TOOLS
    allthemods.custom(
        { "type": "silentgear:salvaging",
            "ingredient": {"item":"mekanismtools:refined_obsidian_paxel" },
            "results": [{"count":2, "id": "mekanism:ingot_refined_obsidian" }, {"count":1,"id":"minecraft:stick"}]
        }
    );
    //	SWORD
    allthemods.custom(
        { "type": "silentgear:salvaging",
            "ingredient": {"item":"mekanismtools:refined_obsidian_sword" },
            "results": [{"count":2, "id": "mekanism:ingot_refined_obsidian" }, {"count":1,"id":"minecraft:stick"}]
        }
    );
    //	PICKAXE
    allthemods.custom(
        { "type": "silentgear:salvaging",
            "ingredient": {"item":"mekanismtools:refined_obsidian_pickaxe" },
            "results": [{"count":3, "id": "mekanism:ingot_refined_obsidian" }, {"count":2,"id":"minecraft:stick"}]
        }
    );
    //	AXE
    allthemods.custom(
        { "type": "silentgear:salvaging",
            "ingredient": {"item":"mekanismtools:refined_obsidian_axe" },
            "results": [{"count":3, "id": "mekanism:ingot_refined_obsidian" }, {"count":2,"id":"minecraft:stick"}]
        }
    );
    //	SHOVEL
    allthemods.custom(
        { "type": "silentgear:salvaging",
            "ingredient": {"item":"mekanismtools:refined_obsidian_shovel" },
            "results": [{"count":1, "id": "mekanism:ingot_refined_obsidian" }, {"count":2,"id":"minecraft:stick"}]
        }
    );
    //	HOE
    allthemods.custom(
        { "type": "silentgear:salvaging",
            "ingredient": {"item":"mekanismtools:refined_obsidian_hoe" },
            "results": [{"count":2, "id": "mekanism:ingot_refined_obsidian" }, {"count":2,"id":"minecraft:stick"}]
        }
    );

    // REFINED OBSIDIAN ARMOR
    //	HELMET
    allthemods.custom(
        { "type": "silentgear:salvaging",
            "ingredient": {"item":"mekanismtools:refined_obsidian_helmet" },
            "results": [{"count":5, "id": "mekanism:ingot_refined_obsidian" }]
        }
    );
    //	CHESTPLATE
    allthemods.custom(
        { "type": "silentgear:salvaging",
            "ingredient": {"item":"mekanismtools:refined_obsidian_chestplate" },
            "results": [{"count":8, "id": "mekanism:ingot_refined_obsidian" }]
        }
    );
    //	LEGGINS
    allthemods.custom(
        { "type": "silentgear:salvaging",
            "ingredient": {"item":"mekanismtools:refined_obsidian_leggings" },
            "results": [{"count":7, "id": "mekanism:ingot_refined_obsidian" }]
        }
    );
    //	BOOTS
    allthemods.custom(
        { "type": "silentgear:salvaging",
            "ingredient": {"item":"mekanismtools:refined_obsidian_boots" },
            "results": [{"count":4, "id": "mekanism:ingot_refined_obsidian" }]
        }
    );

    // REFINED GLOWSTONE TOOLS
    allthemods.custom(
        { "type": "silentgear:salvaging",
            "ingredient": {"item":"mekanismtools:refined_glowstone_paxel" },
            "results": [{"count":2, "id": "mekanism:ingot_refined_glowstone" }, {"count":1,"id":"minecraft:stick"}]
        }
    );
    //	SWORD
    allthemods.custom(
        { "type": "silentgear:salvaging",
            "ingredient": {"item":"mekanismtools:refined_glowstone_sword" },
            "results": [{"count":2, "id": "mekanism:ingot_refined_glowstone" }, {"count":1,"id":"minecraft:stick"}]
        }
    );
    //	PICKAXE
    allthemods.custom(
        { "type": "silentgear:salvaging",
            "ingredient": {"item":"mekanismtools:refined_glowstone_pickaxe" },
            "results": [{"count":3, "id": "mekanism:ingot_refined_glowstone" }, {"count":2,"id":"minecraft:stick"}]
        }
    );
    //	AXE
    allthemods.custom(
        { "type": "silentgear:salvaging",
            "ingredient": {"item":"mekanismtools:refined_glowstone_axe" },
            "results": [{"count":3, "id": "mekanism:ingot_refined_glowstone" }, {"count":2,"id":"minecraft:stick"}]
        }
    );
    //	SHOVEL
    allthemods.custom(
        { "type": "silentgear:salvaging",
            "ingredient": {"item":"mekanismtools:refined_glowstone_shovel" },
            "results": [{"count":1, "id": "mekanism:ingot_refined_glowstone" }, {"count":2,"id":"minecraft:stick"}]
        }
    );
    //	HOE
    allthemods.custom(
        { "type": "silentgear:salvaging",
            "ingredient": {"item":"mekanismtools:refined_glowstone_hoe" },
            "results": [{"count":2, "id": "mekanism:ingot_refined_glowstone" }, {"count":2,"id":"minecraft:stick"}]
        }
    );

    // REFINED GLOWSTONE ARMOR
    //	HELMET
    allthemods.custom(
        { "type": "silentgear:salvaging",
            "ingredient": {"item":"mekanismtools:refined_glowstone_helmet" },
            "results": [{"count":5, "id": "mekanism:ingot_refined_glowstone" }]
        }
    );
    //	CHESTPLATE
    allthemods.custom(
        { "type": "silentgear:salvaging",
            "ingredient": {"item":"mekanismtools:refined_glowstone_chestplate" },
            "results": [{"count":8, "id": "mekanism:ingot_refined_glowstone" }]
        }
    );
    //	LEGGINS
    allthemods.custom(
        { "type": "silentgear:salvaging",
            "ingredient": {"item":"mekanismtools:refined_glowstone_leggings" },
            "results": [{"count":7, "id": "mekanism:ingot_refined_glowstone" }]
        }
    );
    //	BOOTS
    allthemods.custom(
        { "type": "silentgear:salvaging",
            "ingredient": {"item":"mekanismtools:refined_glowstone_boots" },
            "results": [{"count":4, "id": "mekanism:ingot_refined_glowstone" }]
        }
    );

    // STEEL GLOWSTONE TOOLS
    //	PAXEL
    allthemods.custom(
        { "type": "silentgear:salvaging",
            "ingredient": {"item":"mekanismtools:steel_paxel" },
            "results": [{"count":2, "id": "mekanism:ingot_steel" }, {"count":1,"id":"minecraft:stick"}]
        }
    );
    //	SWORD
    allthemods.custom(
        { "type": "silentgear:salvaging",
            "ingredient": {"item":"mekanismtools:steel_sword" },
            "results": [{"count":2, "id": "mekanism:ingot_steel" }, {"count":1,"id":"minecraft:stick"}]
        }
    );
    //	PICKAXE
    allthemods.custom(
        { "type": "silentgear:salvaging",
            "ingredient": {"item":"mekanismtools:steel_pickaxe" },
            "results": [{"count":3, "id": "mekanism:ingot_steel" }, {"count":2,"id":"minecraft:stick"}]
        }
    );
    //	AXE
    allthemods.custom(
        { "type": "silentgear:salvaging",
            "ingredient": {"item":"mekanismtools:steel_axe" },
            "results": [{"count":3, "id": "mekanism:ingot_steel" }, {"count":2,"id":"minecraft:stick"}]
        }
    );
    //	SHOVEL
    allthemods.custom(
        { "type": "silentgear:salvaging",
            "ingredient": {"item":"mekanismtools:steel_shovel" },
            "results": [{"count":1, "id": "mekanism:ingot_steel" }, {"count":2,"id":"minecraft:stick"}]
        }
    );
    //	HOE
    allthemods.custom(
        { "type": "silentgear:salvaging",
            "ingredient": {"item":"mekanismtools:steel_hoe" },
            "results": [{"count":2, "id": "mekanism:ingot_steel" }, {"count":2,"id":"minecraft:stick"}]
        }
    );

    // STEEL ARMOR
    //	HELMET
    allthemods.custom(
        { "type": "silentgear:salvaging",
            "ingredient": {"item":"mekanismtools:steel_helmet" },
            "results": [{"count":5, "id": "mekanism:ingot_steel" }]
        }
    );
    //	CHESTPLATE
    allthemods.custom(
        { "type": "silentgear:salvaging",
            "ingredient": {"item":"mekanismtools:steel_chestplate" },
            "results": [{"count":8, "id": "mekanism:ingot_steel" }]
        }
    );
    //	LEGGINS
    allthemods.custom(
        { "type": "silentgear:salvaging",
            "ingredient": {"item":"mekanismtools:steel_leggings" },
            "results": [{"count":7, "id": "mekanism:ingot_steel" }]
        }
    );
    //	BOOTS
    allthemods.custom(
        { "type": "silentgear:salvaging",
            "ingredient": {"item":"mekanismtools:steel_boots" },
            "results": [{"count":4, "id": "mekanism:ingot_steel" }]
        }
    );
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
