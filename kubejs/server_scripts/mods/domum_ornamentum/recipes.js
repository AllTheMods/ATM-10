// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
    allthemods.remove({ id: 'domum_ornamentum:blockbarreldeco_standing' })
    allthemods.shapeless('domum_ornamentum:blockbarreldeco_standing', ['domum_ornamentum:blockbarreldeco_onside'])
        .id('domum_ornamentum:blockbarreldeco_standing')
    allthemods.shapeless('domum_ornamentum:blockbarreldeco_onside', ['domum_ornamentum:blockbarreldeco_standing'])
        .id('domum_ornamentum:blockbarreldeco_onside_from_standing')
    allthemods.shaped('4x domum_ornamentum:cream_bricks', ['SS', 'BB'], {
        S: 'minecraft:sandstone',
        B: 'minecraft:brick'
    }).id('domum_ornamentum:cream_bricks')
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
