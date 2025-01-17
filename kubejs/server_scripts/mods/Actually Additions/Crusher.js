// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
    function addAACrusher(input, output, num, bonus) {
        if(bonus !== 0){
        allthemods.custom(
            {
                type: 'actuallyadditions:crushing',
                ingredient: Ingredient.of(input).toJson(),
                result: [
                    {
                        result: {
                            count: num,
                            id: output
                        }
                    },
                    {
                        chance: bonus,
                        result: {
                            count: 1,
                            id: output
                        }
                    }
                ]
            }
        )}
        else{
        allthemods.custom(
            {
                type: 'actuallyadditions:crushing',
                ingredient: Ingredient.of(input).toJson(),
                result: [
                    {
                        result: {
                            count: num,
                            id: output
                        }
                    },
                    {
                        chance: bonus,
                        result: {}
                    }
                ]
            }
        )}        
    }

    //addAACrusher(input, output, num, bonus)

    //Minecraft
    addAACrusher('minecraft:raw_iron', 'alltheores:iron_dust', 1, 0.5)
    addAACrusher('minecraft:raw_copper', 'alltheores:copper_dust', 1, 0.5)
    addAACrusher('minecraft:raw_gold', 'alltheores:gold_dust', 1, 0.5)
    addAACrusher('minecraft:clay', 'minecraft:clay_ball', 4, 0)
    addAACrusher('minecraft:stone', 'minecraft:cobblestone', 1, 0)

    //AE2
    addAACrusher('#ae2:all_certus_quartz', 'ae2:certus_quartz_dust', 1, 0.5)
    addAACrusher('ae2:fluix_crystal', 'ae2:fluix_dust', 1, 0.5)
    addAACrusher('ae2:sky_stone_block', 'ae2:sky_dust', 1, 0.5)
    addAACrusher('#c:ender_pearls', 'ae2:ender_dust', 1, 0.5)

    //Silent Gear
    addAACrusher('silentgear:raw_crimson_iron', 'silentgear:crimson_iron_dust', 1, 0.5)
    addAACrusher('silentgear:raw_azure_silver', 'silentgear:azure_silver_dust', 1, 0.5)
    addAACrusher('#c:ores/bort', 'silentgear:bort', 3, 0.5)

    //Occultism
    addAACrusher('occultism:raw_iesnium', 'occultism:iesnium_dust', 1, 0.5)

    //Modern Industrialization
    addAACrusher('modern_industrialization:raw_antimony', 'modern_industrialization:antimony_dust', 1, 0.5)
    addAACrusher('modern_industrialization:raw_tungsten', 'modern_industrialization:tungsten_dust', 1, 0.5)

    //ATO
    addAACrusher('#c:ores/sulfur', 'alltheores:sulfur', 4, 0.5)
    addAACrusher('#c:ores/salt', 'alltheores:salt', 4, 0.5)

    //Mystical Agriculture
    addAACrusher('#c:ores/prosperity', 'mysticalagriculture:prosperity_shard', 3, 0.5)
    addAACrusher('#c:ores/inferium', 'mysticalagriculture:inferium_essence', 3, 0.5)

    //Theurgy
    addAACrusher('#c:ores/sal_ammoniac', 'theurgy:sal_ammoniac_crystal', 3, 0.5)

    //Powah
    addAACrusher('#c:ores/uraninite_poor', 'powah:uraninite_raw', 2, 0)
    addAACrusher('#c:ores/uraninite_regular', 'powah:uraninite_raw', 4, 0)
    addAACrusher('#c:ores/uraninite_dense', 'powah:uraninite_raw', 6, 0)

    //Iron's Spellbooks
    addAACrusher('#c:ores/mithril', 'irons_spellbooks:raw_mithril', 4, 0.5)

    //Xycraft World
    global.xycraftColours.forEach(colour => {
        addAACrusher(`#c:ores/xychorium_${colour}`, `xycraft_world:xychorium_gem_${colour}`, 4, 0)
      })
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.