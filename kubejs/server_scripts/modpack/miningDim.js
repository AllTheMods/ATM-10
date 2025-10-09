// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

var miningDimOres = [
    {path: 'runic_stone',                       id:'allthemodium:runic_stone',                   min:65,  max:250,size:4, count:1,   stoneReplaces:"forbidden_arcanus:runic_stone",              deepslateReplaces:"forbidden_arcanus:runic_deepslate",                   endStoneReplaces:null,                                             netherrackReplaces:null},
    {path: 'arcane_crystal_ore',                id:'allthemodium:arcane_crystal_ore',            min:65,  max:250,size:4, count:1,   stoneReplaces:"forbidden_arcanus:arcane_crystal_ore",       deepslateReplaces:"forbidden_arcanus:deepslate_arcane_crystal_ore",      endStoneReplaces:null,                                             netherrackReplaces:null},
    {path: 'dark_ore',                          id:'allthemodium:dark_ore',                      min:65,  max:129,size:2, count:1,   stoneReplaces:"evilcraft:dark_ore",                         deepslateReplaces:"evilcraft:dark_ore_deepslate",                        endStoneReplaces:null,                                             netherrackReplaces:null},
    {path: 'uraninite_ore',                     id:'allthemodium:uraninite_ore',                 min:65,  max:250,size:8, count:8,   stoneReplaces:"powah:uraninite_ore",                        deepslateReplaces:"powah:deepslate_uraninite_ore",                       endStoneReplaces:null,                                             netherrackReplaces:null},
    {path: 'inferium_ore',                      id:'allthemodium:inferium_ore',                  min:65,  max:250,size:8, count:16,  stoneReplaces:"mysticalagriculture:inferium_ore",           deepslateReplaces:"mysticalagriculture:deepslate_inferium_ore",          endStoneReplaces:null,                                             netherrackReplaces:null},
    {path: 'aggra_inferium_ore',                id:'allthemodium:aggra_inferium_ore',            min:-63, max:63, size:8, count:16,  stoneReplaces:null,                                         deepslateReplaces:null,                                                  endStoneReplaces:"mysticalagradditions:end_inferium_ore",          netherrackReplaces:"mysticalagradditions:nether_inferium_ore"},
    {path: 'aggra_prosperity_ore',              id:'allthemodium:aggra_prosperity_ore',          min:-63, max:63, size:8, count:8,   stoneReplaces:null,                                         deepslateReplaces:null,                                                  endStoneReplaces:"mysticalagradditions:end_prosperity_ore",        netherrackReplaces:"mysticalagradditions:nether_prosperity_ore"},
    {path: 'prosperity_ore',                    id:'allthemodium:prosperity_ore',                min:65,  max:250,size:8, count:8,   stoneReplaces:"mysticalagriculture:prosperity_ore",         deepslateReplaces:"mysticalagriculture:deepslate_prosperity_ore",        endStoneReplaces:null,                                             netherrackReplaces:null},
    {path: 'soulium_ore',                       id:'allthemodium:soulium_ore',                   min:-63, max:250,size:6, count:3,   stoneReplaces:"mysticalagriculture:soulium_ore",            deepslateReplaces:"mysticalagriculture:soulium_ore",                     endStoneReplaces:"mysticalagriculture:soulium_ore",                netherrackReplaces:"mysticalagriculture:soulium_ore"},
    {path: 'mithril_ore',                       id:'allthemodium:mithril_ore',                   min:65,  max:250,size:2, count:1,   stoneReplaces:"irons_spellbooks:mithril_ore",               deepslateReplaces:"irons_spellbooks:deepslate_mithril_ore",              endStoneReplaces:null,                                             netherrackReplaces:null},
    {path: 'antimony_ore',                      id:'allthemodium:antimony_ore',                  min:65,  max:250,size:5, count:20,  stoneReplaces:"modern_industrialization:antimony_ore",      deepslateReplaces:"modern_industrialization:deepslate_antimony_ore",     endStoneReplaces:null,                                             netherrackReplaces:null},
    {path: 'iridium_ore',                       id:'allthemodium:iridium_ore',                   min:65,  max:146,size:1, count:10,  stoneReplaces:"modern_industrialization:iridium_ore",       deepslateReplaces:"modern_industrialization:deepslate_iridium_ore",      endStoneReplaces:null,                                             netherrackReplaces:null},
    {path: 'lignite_coal_ore',                  id:'allthemodium:lignite_coal_ore',              min:65,  max:250,size:17,count:25,  stoneReplaces:"modern_industrialization:lignite_coal_ore",  deepslateReplaces:"modern_industrialization:deepslate_lignite_coal_ore", endStoneReplaces:null,                                             netherrackReplaces:null},
    {path: 'monazite_ore',                      id:'allthemodium:monazite_ore',                  min:65,  max:154,size:3, count:10,  stoneReplaces:"modern_industrialization:monazite_ore",      deepslateReplaces:"modern_industrialization:deepslate_monazite_ore",     endStoneReplaces:null,                                             netherrackReplaces:null},
    {path: 'tungsten_ore',                      id:'allthemodium:tungsten_ore',                  min:65,  max:154,size:5, count:6,   stoneReplaces:"modern_industrialization:tungsten_ore",      deepslateReplaces:"modern_industrialization:deepslate_tungsten_ore",     endStoneReplaces:null,                                             netherrackReplaces:null},
    {path: 'titanium_ore',                      id:'allthemodium:titanium_ore',                  min:65,  max:250,size:6, count:2,   stoneReplaces:"theurgy:sal_ammoniac_ore",                   deepslateReplaces:"theurgy:deepslate_sal_ammoniac_ore",                  endStoneReplaces:null,                                             netherrackReplaces:null},
    {path: 'xychorium_ore_blue',                id:'allthemodium:xychorium_ore_blue',            min:65,  max:250,size:5, count:2,   stoneReplaces:"xycraft_world:xychorium_ore_stone_blue",     deepslateReplaces:"xycraft_world:xychorium_ore_deepslate_blue",          endStoneReplaces:null,                                             netherrackReplaces:null},
    {path: 'xychorium_ore_red',                 id:'allthemodium:xychorium_ore_red',             min:65,  max:250,size:5, count:2,   stoneReplaces:"xycraft_world:xychorium_ore_stone_red",      deepslateReplaces:"xycraft_world:xychorium_ore_deepslate_red",           endStoneReplaces:null,                                             netherrackReplaces:null},
    {path: 'xychorium_ore_dark',                id:'allthemodium:xychorium_ore_dark',            min:65,  max:250,size:5, count:2,   stoneReplaces:"xycraft_world:xychorium_ore_stone_dark",     deepslateReplaces:"xycraft_world:xychorium_ore_deepslate_dark",          endStoneReplaces:null,                                             netherrackReplaces:null},
    {path: 'xychorium_ore_green',               id:'allthemodium:xychorium_ore_green',           min:65,  max:250,size:5, count:2,   stoneReplaces:"xycraft_world:xychorium_ore_stone_green",    deepslateReplaces:"xycraft_world:xychorium_ore_deepslate_green",         endStoneReplaces:null,                                             netherrackReplaces:null},
    {path: 'xychorium_ore_light',               id:'allthemodium:xychorium_ore_light',           min:65,  max:250,size:5, count:2,   stoneReplaces:"xycraft_world:xychorium_ore_stone_light",    deepslateReplaces:"xycraft_world:xychorium_ore_deepslate_light",         endStoneReplaces:null,                                             netherrackReplaces:null},
    {path: 'black_quartz_ore',                  id:'allthemodium:black_quartz_ore',              min:65,  max:250,size:6, count:8,   stoneReplaces:"actuallyadditions:black_quartz_ore",         deepslateReplaces:null,                                                  endStoneReplaces:null,                                             netherrackReplaces:null},
    {path: 'sulfur_ore',                        id:'allthemodium:sulfur_ore',                    min:-63, max:250,size:8, count:3,   stoneReplaces:"alltheores:sulfur_ore",                      deepslateReplaces:"alltheores:deepslate_sulfur_ore",                     endStoneReplaces:"alltheores:end_sulfur_ore",                      netherrackReplaces:"alltheores:nether_sulfur_ore"},
    {path: 'fluorite_ore',                      id:'allthemodium:fluorite_ore',                  min:-63, max:250,size:8, count:3,   stoneReplaces:"alltheores:fluorite_ore",                    deepslateReplaces:"alltheores:deepslate_fluorite_ore",                   endStoneReplaces:"alltheores:end_fluorite_ore",                    netherrackReplaces:"alltheores:nether_fluorite_ore"},
    {path: 'cinnabar_ore',                      id:'allthemodium:cinnabar_ore',                  min:-63, max:250,size:8, count:2,   stoneReplaces:"alltheores:cinnabar_ore",                    deepslateReplaces:"alltheores:deepslate_cinnabar_ore",                   endStoneReplaces:"alltheores:end_cinnabar_ore",                    netherrackReplaces:"alltheores:nether_cinnabar_ore"},
    {path: 'salt_ore',                          id:'allthemodium:salt_ore',                      min:-63, max:250,size:6, count:8,   stoneReplaces:"alltheores:salt_ore",                        deepslateReplaces:"alltheores:deepslate_salt_ore",                       endStoneReplaces:"alltheores:end_salt_ore",                        netherrackReplaces:"alltheores:nether_salt_ore"},
    {path: 'sal_ammoniac_ore',                  id:'allthemodium:sal_ammoniac_ore',              min:65,  max:250,size:8, count:3,   stoneReplaces:"modern_industrialization:titanium_ore",      deepslateReplaces:null,                                                  endStoneReplaces:null,                                             netherrackReplaces:null},
    {path: 'stella_arcanum',                    id:'allthemodium:stella_arcanum',                min:-63, max:250,size:2, count:1,   stoneReplaces:"forbidden_arcanus:stella_arcanum",           deepslateReplaces:"forbidden_arcanus:stella_arcanum",                    endStoneReplaces:"forbidden_arcanus:stella_arcanum",               netherrackReplaces:"forbidden_arcanus:stella_arcanum"},
    {path: 'dimensionalshard',                  id:'allthemodium:dimensionalshard',              min:-63, max:250,size:12,count:2,   stoneReplaces:"rftoolsbase:dimensionalshard_overworld",     deepslateReplaces:null,                                                  endStoneReplaces:"rftoolsbase:dimensionalshard_end",               netherrackReplaces:"rftoolsbase:dimensionalshard_nether"},
    {path: 'crimson_iron_ore',                  id:'allthemodium:crimson_iron_ore',              min:-63, max:63, size:8, count:3,   stoneReplaces:null,                                         deepslateReplaces:null,                                                  endStoneReplaces:null,                                             netherrackReplaces:"silentgear:crimson_iron_ore"},
    {path: 'azure_silver_ore',                  id:'allthemodium:azure_silver_ore',              min:-63, max:63, size:8, count:3,   stoneReplaces:null,                                         deepslateReplaces:null,                                                  endStoneReplaces:"silentgear:azure_silver_ore",                    netherrackReplaces:null},
    {path: 'draconium_ore',                     id:'allthemodium:draconium_ore',                 min:-63, max:250,size:4,count:8,    stoneReplaces:"draconicevolution:overworld_draconium_ore",  deepslateReplaces:null,                                                  endStoneReplaces:null,                                             netherrackReplaces:null}
]

ServerEvents.generateData('after_mods', allthemods => {
    let addMiningDimOre = (path, id, min, max, size, count, stoneReplaces, deepslateReplaces, endStoneReplaces, netherrackReplaces) => {
        
        let jsonPlaced = JsonIO.toObject({
            "feature": id,
            "placement": [
              {
                "count": count,
                "type": "minecraft:count"
              },
              {
                "type": "minecraft:in_square"
              },
              {
                "height": {
                  "min_inclusive": {
                    "absolute": min
                  },
                  "max_inclusive": {
                    "absolute": max
                  },
                  "type": "minecraft:trapezoid"
                },
                "type": "minecraft:height_range"
              },
              {
                "type": "minecraft:biome"
              }
            ]
          })
        let jsonConfigured = JsonIO.toObject({
            type: "minecraft:ore",
            config: {
              "size": size,
              "discard_chance_on_air_exposure": 0.0,
              "targets": []
            }
          })

        let jsonForge = JsonIO.toObject({
            type: "neoforge:add_features",
            biomes: "#allthemodium:mining_features/mining_biomes",
            "features": [id],
            "step": "underground_ores"
        })
        if(stoneReplaces!==null){
            jsonConfigured.config.targets.push(
              JsonIO.toObject({
                "target": {
                  "predicate_type": "minecraft:tag_match",
                  "tag": "minecraft:stone_ore_replaceables"
                },
                "state": {
                  "Name": stoneReplaces
                }
              }))
        }
        if(deepslateReplaces!==null){
          jsonConfigured.config.targets.push(
            JsonIO.toObject({
              "target": {
                "predicate_type": "minecraft:tag_match",
                "tag": "minecraft:deepslate_ore_replaceables"
              },
              "state": {
                "Name": deepslateReplaces
              }
            }))
        }
        if(endStoneReplaces!==null){
            jsonConfigured.config.targets.push(
                JsonIO.toObject({
                    "target": {
                    "predicate_type": "minecraft:block_match",
                    "block": "minecraft:end_stone"
                    },
                    "state": {
                        "Name": endStoneReplaces
                    }
                })
            )
        }
        if(netherrackReplaces!==null){
            jsonConfigured.config.targets.push(
            JsonIO.toObject({
                "target": {
                "predicate_type": "minecraft:block_match",
                "block": "minecraft:netherrack"
                },
                "state": {
                    "Name": netherrackReplaces
                }
            }))
        }  
        allthemods.json(`allthemodium:worldgen/placed_feature/${path}.json`, jsonPlaced)
        allthemods.json(`allthemodium:worldgen/configured_feature/${path}.json`, jsonConfigured)
        allthemods.json(`allthemodium:neoforge/biome_modifier/allthemodium/dim_ores/${path}.json`, jsonForge)
    }
    miningDimOres.forEach(ore=>{
        addMiningDimOre(ore.path,ore.id, ore.min, ore.max, ore.size, ore.count, ore.stoneReplaces, ore.deepslateReplaces, ore.endStoneReplaces, ore.netherrackReplaces);
    })
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
