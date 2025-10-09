// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
    let prediction_convert = (output, input) => {
        allthemods.shapeless(output, ['kubejs:starlight_prediction', input])
    }

    prediction_convert('16x eternal_starlight:grimstone', 'minecraft:stone')
    prediction_convert('16x eternal_starlight:cobbled_grimstone', 'minecraft:cobblestone')
    prediction_convert('16x eternal_starlight:voidstone', 'minecraft:deepslate')
    prediction_convert('16x eternal_starlight:cobbled_voidstone', 'minecraft:cobbled_deepslate')
    prediction_convert('16x eternal_starlight:eternal_ice', 'minecraft:ice')
    prediction_convert('16x eternal_starlight:nightfall_dirt', 'minecraft:dirt')
    prediction_convert('16x eternal_starlight:nightfall_grass_block', 'minecraft:grass_block')
    prediction_convert('16x eternal_starlight:lunar_berries', 'minecraft:glow_berries')
    prediction_convert('16x eternal_starlight:twilight_sand', 'minecraft:sand')
    prediction_convert('16x eternal_starlight:twilight_sandstone', 'minecraft:sandstone')
    prediction_convert('16x eternal_starlight:nightfall_mud', 'minecraft:mud')
    prediction_convert('16x eternal_starlight:dusted_gravel', 'minecraft:gravel')
    prediction_convert('16x eternal_starlight:abyssal_fruit', 'minecraft:kelp')
    prediction_convert('16x eternal_starlight:jingling_pickle', 'minecraft:sea_pickle')
    prediction_convert('16x eternal_starlight:orbflora', 'minecraft:big_dripleaf')
    prediction_convert('16x eternal_starlight:orbflora_light', 'minecraft:shroomlight')
    prediction_convert('16x eternal_starlight:tentacles_coral_block', 'minecraft:fire_coral_block')
    prediction_convert('16x eternal_starlight:tentacles_coral_fan', 'minecraft:fire_coral_fan')
    prediction_convert('16x eternal_starlight:tentacles_coral', 'minecraft:fire_coral')
    prediction_convert('16x eternal_starlight:golden_coral_block', 'minecraft:horn_coral_block')
    prediction_convert('16x eternal_starlight:golden_coral_fan', 'minecraft:horn_coral_fan')
    prediction_convert('16x eternal_starlight:golden_coral', 'minecraft:horn_coral')
    prediction_convert('16x eternal_starlight:crystallum_coral_block', 'minecraft:tube_coral_block')
    prediction_convert('16x eternal_starlight:crystallum_coral_fan', 'minecraft:tube_coral_fan')
    prediction_convert('16x eternal_starlight:crystallum_coral', 'minecraft:tube_coral')
    prediction_convert('16x eternal_starlight:orbflora_light', 'minecraft:shroomlight')
    prediction_convert('16x eternal_starlight:lunaris_cactus', 'minecraft:cactus')
    prediction_convert('16x eternal_starlight:dead_lunar_bush', 'minecraft:dead_bush')
    prediction_convert('16x eternal_starlight:glowing_mushroom', ['minecraft:brown_mushroom', 'minecraft:red_mushroom'])
    prediction_convert('16x eternal_starlight:icicle', 'minecraft:pointed_dripstone')
    prediction_convert('4x eternal_starlight:swamp_silver_ingot', '#c:ingots/silver')
    prediction_convert('4x eternal_starlight:glacite', 'minecraft:blue_ice')
    prediction_convert('2x eternal_starlight:oxidized_golem_steel_ingot', '#c:ingots/steel')
    prediction_convert('eternal_starlight:raw_aethersent', '#c:gems/diamond')
    prediction_convert('16x eternal_starlight:springstone', 'minecraft:blackstone')
    prediction_convert('8x eternal_starlight:thermal_springstone', 'minecraft:gilded_blackstone')

    allthemods.shapeless('8x eternal_starlight:red_starlight_crystal_block', [
        'kubejs:starlight_prediction',
        'minecraft:amethyst_block',
        '#c:dyes/red'
    ])
    allthemods.shapeless('8x eternal_starlight:red_starlight_crystal_cluster', [
        'kubejs:starlight_prediction',
        'minecraft:amethyst_cluster',
        '#c:dyes/red'
    ])
    allthemods.shapeless('16x eternal_starlight:red_starlight_crystal_shard', [
        'kubejs:starlight_prediction',
        'minecraft:amethyst_shard',
        '#c:dyes/red'
    ])
    allthemods.shapeless('8x eternal_starlight:blue_starlight_crystal_block', [
        'kubejs:starlight_prediction',
        'minecraft:amethyst_block',
        '#c:dyes/blue'
    ])
    allthemods.shapeless('8x eternal_starlight:blue_starlight_crystal_cluster', [
        'kubejs:starlight_prediction',
        'minecraft:amethyst_cluster',
        '#c:dyes/blue'
    ])
    allthemods.shapeless('16x eternal_starlight:blue_starlight_crystal_shard', [
        'kubejs:starlight_prediction',
        'minecraft:amethyst_shard',
        '#c:dyes/blue'
    ])

})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
