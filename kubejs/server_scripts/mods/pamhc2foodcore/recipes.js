// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
    allthemods.replaceInput({ id: 'pamhc2foodcore:tool_roller' }, '#minecraft:logs', '#c:stripped_logs')
    allthemods.replaceInput({ id: 'pamhc2foodcore:tool_skillet' }, '#c:ingots/copper', '#c:plates/copper')

    allthemods.replaceInput({ id: 'pamhc2foodcore:flour_x1_flour_plants' }, '#c:flour_plants',
        Ingredient.of('#c:flour_plants').except([
            'herbsandharvest:corn', 'minecolonies:corn', 'pamhc2crops:cornitem', 'pamhc2crops:peanutitem',
            'pamhc2foodcore:sunflowerseedsitem', 'pamhc2trees:almonditem', 'pamhc2trees:cashewitem', 'pamhc2trees:chestnutitem',
            'pamhc2trees:hazelnutitem', 'pamhc2trees:pecanitem', 'pamhc2trees:pistachioitem', 'pamhc2trees:walnutitem'
        ]))
    allthemods.replaceInput({ id: 'pamhc2foodcore:p8juiceitem' }, '#c:vegetables',
        Ingredient.of('#c:vegetables').except('minecraft:carrot'))
    allthemods.replaceInput({ id: 'pamhc2foodcore:cookingoilitem_x2_vegetables' }, '#c:vegetables',
        Ingredient.of('#c:vegetables').except('pamhc2crops:whitemushroomitem'))
    allthemods.replaceInput({ id: 'pamhc2foodcore:boiledeggitem' }, '#c:egg',
        Ingredient.of('#c:egg').except(['herbsandharvest:avocado', 'pamhc2trees:avocadoitem', 'pamhc2trees:bananaitem', 'sushigocrafting:avocado']))
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
