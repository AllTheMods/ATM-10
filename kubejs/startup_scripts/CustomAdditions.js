// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

StartupEvents.registry('block', allthemods => {
    allthemods.create('magical_soil').displayName('§bMagical Soil').grassSoundType().mapColor('grass').hardness(0.6);

    allthemods.create('air_essence_block').displayName('Air Essence Block').stoneSoundType().mapColor('stone').hardness(0.6).renderType('translucent').notSolid();
    allthemods.create('earth_essence_block').displayName('Earth Essence Block').stoneSoundType().mapColor('stone').hardness(0.6).renderType('translucent').notSolid();
    allthemods.create('fire_essence_block').displayName('Fire Essence Block').stoneSoundType().mapColor('stone').hardness(0.6).renderType('translucent').notSolid();
    allthemods.create('water_essence_block').displayName('Water Essence Block').stoneSoundType().mapColor('stone').hardness(0.6).renderType('translucent').notSolid();

    allthemods.create('pink_slime_block').displayName('Pink Slime Block').soundType('slime_block').mapColor('slime').hardness(0).renderType('translucent').notSolid();
})

StartupEvents.modifyCreativeTab('ironfurnaces:ironfurnaces_tab', allthemods => {
    allthemods.add('ironfurnaces:allthemodium_furnace')
    allthemods.add('ironfurnaces:vibranium_furnace')
    allthemods.add('ironfurnaces:unobtainium_furnace')
    allthemods.add('ironfurnaces:upgrade_allthemodium')
    allthemods.add('ironfurnaces:upgrade_vibranium')
    allthemods.add('ironfurnaces:upgrade_unobtainium')
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.