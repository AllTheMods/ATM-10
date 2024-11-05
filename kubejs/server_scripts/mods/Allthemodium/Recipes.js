// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {

    allthemods.shapeless(' 9x allthemodium:piglich_heart', ['allthemodium:piglich_heart_block']).id('allthemods:allthemodium/heart_decompression')
    allthemods.smithing(
        Item.of('kubejs:silent_allthemodium_plate'),
        '#c:plates/allthemodium',
        'allthemodium:allthemodium_upgrade_smithing_template',
        '#c:ingots/netherite'
    )
    allthemods.smithing(
        Item.of('kubejs:silent_vibranium_plate'),
        '#c:plates/vibranium',
        'allthemodium:vibranium_upgrade_smithing_template',
        '#c:ingots/allthemodium'
    )
    allthemods.smithing(
        Item.of('kubejs:silent_unobtainium_plate'),
        '#c:plates/unobtainium',
        'allthemodium:unobtainium_upgrade_smithing_template',
        '#c:ingots/vibranium'
    )
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.