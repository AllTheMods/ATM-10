// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
    // Tools
    allthemods.remove({ id: 'mekanismtools:steel/tools/sword'})
    allthemods.remove({ id: 'railcraft:steel_sword'})
    allthemods.remove({ id: 'immersiveengineering:crafting/sword_steel'})
    allthemods.remove({ id: 'mekanismtools:steel/tools/pickaxe'})
    allthemods.remove({ id: 'railcraft:steel_pickaxe'})
    allthemods.remove({ id: 'immersiveengineering:crafting/pickaxe_steel'})
    allthemods.remove({ id: 'mekanismtools:steel/tools/axe'})
    allthemods.remove({ id: 'railcraft:steel_axe'})
    allthemods.remove({ id: 'immersiveengineering:crafting/axe_steel'})
    allthemods.remove({ id: 'mekanismtools:steel/tools/shovel'})
    allthemods.remove({ id: 'railcraft:steel_shovel'})
    allthemods.remove({ id: 'immersiveengineering:crafting/shovel_steel'})
    allthemods.remove({ id: 'mekanismtools:steel/tools/hoe'})
    allthemods.remove({ id: 'railcraft:steel_hoe'})
    allthemods.remove({ id: 'immersiveengineering:crafting/hoe_steel'})
    allthemods.remove({ id: 'mekanismtools:steel/tools/paxel'})

    allthemods.shaped('mekanismtools:steel_sword', [' S ', ' S ', ' R '], {
        S: '#c:ingots/steel',
        R: '#c:rods/wooden'
    }).id('allthemods:mekanismtools/steel_sword')
    allthemods.shaped('mekanismtools:steel_pickaxe', ['SSS', ' R ', ' R '], {
        S: '#c:ingots/steel',
        R: '#c:rods/wooden'
    }).id('allthemods:mekanismtools/steel_pickaxe')
    allthemods.shaped('mekanismtools:steel_axe', ['SS ', 'SR ', ' R '], {
        S: '#c:ingots/steel',
        R: '#c:rods/wooden'
    }).id('allthemods:mekanismtools/steel_axe')
    allthemods.shaped('mekanismtools:steel_shovel', [' S ', ' R ', ' R '], {
        S: '#c:ingots/steel',
        R: '#c:rods/wooden'
    }).id('allthemods:mekanismtools/steel_shovel')
    allthemods.shaped('mekanismtools:steel_hoe', ['SS ', ' R ', ' R '], {
        S: '#c:ingots/steel',
        R: '#c:rods/wooden'
    }).id('allthemods:mekanismtools/steel_hoe')
    allthemods.shaped('mekanismtools:steel_paxel', ['APS', ' R ', ' R '], {
        A: 'mekanismtools:steel_axe',
        P: 'mekanismtools:steel_pickaxe',
        S: 'mekanismtools:steel_shovel',
        R: '#c:rods/wooden'
    }).id('allthemods:mekanismtools/steel_paxel')

    // Armor
    allthemods.remove({ id: 'immersiveengineering:crafting/armor_steel_helmet'})
    allthemods.remove({ id: 'immersiveengineering:crafting/armor_steel_chestplate'})
    allthemods.remove({ id: 'immersiveengineering:crafting/armor_steel_leggings'})
    allthemods.remove({ id: 'immersiveengineering:crafting/armor_steel_boots'})
    allthemods.remove({ id: 'railcraft:steel_helmet'})
    allthemods.remove({ id: 'railcraft:steel_chestplate'})
    allthemods.remove({ id: 'railcraft:steel_leggings'})
    allthemods.remove({ id: 'railcraft:steel_boots'})

    // Shields
    allthemods.remove({ id: 'the_bumblezone:honey_crystal_shield'})
    allthemods.remove({ id: 'twilightforest:equipment/knightmetal_shield'})
    allthemods.remove({ id: 'undergarden:cloggrum_shield'})

    allthemods.shaped('the_bumblezone:honey_crystal_shield', ['HSH', 'HHH', ' H '], {
        S: 'minecraft:shield',
        H: 'the_bumblezone:honey_crystal_shards'
    }).id('allthemods:the_bumblezone/honey_crystal_shield')
    allthemods.shaped('twilightforest:knightmetal_shield', ['KSK', 'KKK', ' K '], {
        S: 'minecraft:shield',
        K: '#c:ingots/knightmetal'
    }).id('allthemods:twilightforest/knightmetal_shield')
    allthemods.shaped('undergarden:cloggrum_shield', ['CSC', 'CCC', ' C '], {
        S: 'minecraft:shield',
        C: '#c:ingots/cloggrum'
    }).id('allthemods:undergarden/cloggrum_shield')
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.