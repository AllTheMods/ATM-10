// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
    allthemods.shaped('functionalstorage:oak_1', ['PPP', 'PCP', 'PPP'], {
        P: Ingredient.of('#minecraft:planks').except([
            'minecraft:acacia_planks', 'minecraft:bamboo_planks', 'minecraft:birch_planks', 'minecraft:cherry_planks',
            'minecraft:crimson_planks', 'minecraft:dark_oak_planks', 'minecraft:jungle_planks', 'minecraft:mangrove_planks',
            'minecraft:spruce_planks', 'minecraft:warped_planks',
            'twilightforest:canopy_planks', 'twilightforest:dark_planks', 'twilightforest:mangrove_planks', 'twilightforest:mining_planks',
            'twilightforest:sorting_planks', 'twilightforest:time_planks', 'twilightforest:transformation_planks', 'twilightforest:twilight_oak_planks'
        ]),
        C: '#c:chests/wooden'
    }).id('functionalstorage:oak_1')
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
