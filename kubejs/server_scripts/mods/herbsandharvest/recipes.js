// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
    allthemods.shaped('4x herbsandharvest:dinner_plate', ['Q Q', 'QQQ'], { Q: 'minecraft:quartz' }).id('herbsandharvest:dinner_plate')
    allthemods.replaceInput({ id: 'herbsandharvest:guide_book' }, 'minecraft:blue_dye', '#c:seeds')
    allthemods.replaceInput({ id: 'herbsandharvest:barley_slice' }, '#c:foods/barley', 'herbsandharvest:barley_loaf')
    allthemods.replaceInput({ id: 'herbsandharvest:rye_slice' }, '#c:foods/rye', 'herbsandharvest:rye_loaf')
    allthemods.replaceInput({ id: 'herbsandharvest:bread_slice' }, '#c:foods/bread',
        Ingredient.of('#c:foods/bread').except(['herbsandharvest:pumpernickel_loaf', 'herbsandharvest:garlic_bread', 'herbsandharvest:barley_loaf', 'herbsandharvest:rye_loaf']))
    allthemods.shapeless('herbsandharvest:board', ['minecraft:spruce_slab', '#c:rods/wooden']).id('herbsandharvest:board')
    allthemods.replaceInput({ id: 'herbsandharvest:sweet_berry_muffin' }, '#c:foods/berries',
        Ingredient.of('#c:foods/berries').except('herbsandharvest:blueberry'))
    allthemods.remove({ id: 'herbsandharvest:eggs' })
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
