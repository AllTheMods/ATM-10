// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
    allthemods.replaceInput({ id: 'pamhc2crops:bread_grain' }, '#c:grain',
        Ingredient.of('#c:grain').except(['#c:foods/barley', '#c:foods/rye']))
    allthemods.replaceInput({ id: 'pamhc2crops:string_fiber' }, '#c:fiber',
        Ingredient.of('#c:fiber').except('#c:crops/flax'))
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
