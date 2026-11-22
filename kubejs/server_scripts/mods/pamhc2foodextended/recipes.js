// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
    ;['chocolatemilkitem', 'carrotjuiceitem', 'chickennoodlesoupitem', 'powdereddonutitem']
        .forEach(id => allthemods.remove({ id: `pamhc2foodextended:${id}` }))
    allthemods.replaceInput({ id: 'pamhc2foodextended:heartybreakfastitem' }, 'pamhc2foodextended:chocolatemilkitem', 'pamhc2foodcore:chocolatemilkitem')

    allthemods.shapeless('pamhc2foodextended:peachcobbleritem',
        ['#c:tool_bakeware', '#c:crops/peach', '#c:sugar', '#c:dough', '#c:butter']).id('pamhc2foodextended:peachcobbleritem')
    allthemods.shapeless('pamhc2foodextended:blackberrycobbleritem',
        ['#c:tool_bakeware', '#c:crops/blackberry', '#c:sugar', '#c:dough', '#c:butter']).id('pamhc2foodextended:blackberrycobbleritem')
    allthemods.shapeless('pamhc2foodextended:figbaritem',
        ['#c:tool_bakeware', '#c:crops/fig', '#c:sugar', '#c:dough', '#c:butter']).id('pamhc2foodextended:figbaritem')
    allthemods.shapeless('pamhc2foodextended:candiedlemonitem',
        ['#c:tool_saucepan', '#c:sugar', '#c:sugar', '#c:crops/lemon']).id('pamhc2foodextended:candiedlemonitem')
    allthemods.shapeless('pamhc2foodextended:pralinesitem',
        ['#c:tool_saucepan', '#c:sugar', '#c:crops/pecan', '#c:butter']).id('pamhc2foodextended:pralinesitem')
    allthemods.shapeless('pamhc2foodextended:popcornitem',
        ['#c:tool_pot', '#c:cookingoil', '#c:butter', '#c:dusts/salt', '#c:crops/corn']).id('pamhc2foodextended:popcornitem')
    allthemods.shapeless('pamhc2foodextended:chocovoxelsitem',
        ['#c:tool_mixingbowl', '#c:milk', 'minecraft:cookie', '#c:cocoapowder']).id('pamhc2foodextended:chocovoxelsitem')

    allthemods.replaceInput({ id: 'pamhc2foodextended:mixedsaladitem' }, '#c:vegetables',
        Ingredient.of('#c:vegetables').except('#c:crops/lettuce'))
    allthemods.replaceInput({ id: 'pamhc2foodextended:sprinklescupcakeitem' }, '#c:dyes',
        Ingredient.of('#c:dyes').except('#c:dyes/red'))
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
