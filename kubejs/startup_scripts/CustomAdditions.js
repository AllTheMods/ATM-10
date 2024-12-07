// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

const $BuiltInRegistries = Java.loadClass("net.minecraft.core.registries.BuiltInRegistries")

StartupEvents.registry('block', allthemods => {
    allthemods.create('magical_soil').displayName('§bMagical Soil').grassSoundType().mapColor('grass').hardness(0.6);

    allthemods.create('air_essence_block').displayName('Air Essence Block').stoneSoundType().mapColor('stone').hardness(0.6).renderType('translucent').notSolid();
    allthemods.create('earth_essence_block').displayName('Earth Essence Block').stoneSoundType().mapColor('stone').hardness(0.6).renderType('translucent').notSolid();
    allthemods.create('fire_essence_block').displayName('Fire Essence Block').stoneSoundType().mapColor('stone').hardness(0.6).renderType('translucent').notSolid();
    allthemods.create('water_essence_block').displayName('Water Essence Block').stoneSoundType().mapColor('stone').hardness(0.6).renderType('translucent').notSolid();

    allthemods.create('blaze_powder_block').displayName('Blaze Powder Block').stoneSoundType().mapColor('stone').hardness(1);
    // allthemods.create('blaze_block').displayName('Blaze Block').stoneSoundType().mapColor('stone').hardness(1);
})

StartupEvents.registry('item', allthemods => {
    allthemods.create('starlight_prediction').displayName('Generalized Starlight Prediction');

    allthemods.create('silent_allthemodium_plate').displayName('Silent Allthemodium Plate').glow(true);
    allthemods.create('silent_vibranium_plate').displayName('Silent Vibranium Plate').glow(true);
    allthemods.create('silent_unobtainium_plate').displayName('Silent Unobtainium Plate').glow(true);

    allthemods.create('atm_star_shard_1').displayName('ATM Star Fragment')
    allthemods.create('atm_star_shard_2').displayName('ATM Star Fragment')
    allthemods.create('atm_star_shard_3').displayName('ATM Star Fragment')
    allthemods.create('atm_star_shard_4').displayName('ATM Star Fragment')
    allthemods.create('atm_star_shard_5').displayName('ATM Star Fragment')
    allthemods.create('modularium_plate').color(0xe64200).texture('alltheores:item/iron_plate')
})

StartupEvents.registry('fluid', allthemods => {
    allthemods.create('liquid_souls', 'thin')
        .tint(0xc9eaff)
        .displayName('Liquid Souls')
        .noBlock()

    allthemods.create('unrefined_liquid_souls', 'thin')
        .tint(0xccebff)
        .displayName('Unrefined Liquid Souls')
        .noBlock()

    allthemods.create('liquid_aureal', 'thin')
        .tint(0x7abaff)
        .displayName('Liquid Aureal')
        .noBlock()
})

StartupEvents.modifyCreativeTab('ironfurnaces:ironfurnaces_tab', allthemods => {
    allthemods.add('ironfurnaces:allthemodium_furnace')
    allthemods.add('ironfurnaces:vibranium_furnace')
    allthemods.add('ironfurnaces:unobtainium_furnace')
    allthemods.add('ironfurnaces:upgrade_allthemodium')
    allthemods.add('ironfurnaces:upgrade_vibranium')
    allthemods.add('ironfurnaces:upgrade_unobtainium')
})

StartupEvents.postInit((allthemods) => {
  $BuiltInRegistries.BLOCK.addAlias("kubejs:blaze_block", "allthecompressed:blaze_rod_block")
  $BuiltInRegistries.ITEM.addAlias("kubejs:blaze_block", "allthecompressed:blaze_rod_block")
})


// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
