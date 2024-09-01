// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {

    function fluidizer(input, inamount, output, outamount, id) {
        allthemods.custom(
            {
                type: "bigreactors:fluidizersolid",
                ingredient: {
                    count: inamount,
                    ingredient: {
                        type: "neoforge:components",
                        components: {
                            "minecraft:attribute_modifiers": {
                                modifiers: []
                            },
                            "minecraft:enchantments": {
                                levels: {}
                            },
                            "minecraft:lore": [],
                            "minecraft:max_stack_size": 64,
                            "minecraft:rarity": "common",
                            "minecraft:repair_cost": 0
                        },
                        items: input,
                        strict: true
                    }
                },
                result: {
                    amount: outamount,
                    id: output
                }
            }
        ).id(`allthemods:fluidizersolid/${id}`)
    }

    fluidizer('#c:ingots/yellorium', 1 , 'bigreactors:yellorium', 1000, 'ingot_yellorium')
    fluidizer('#c:storage_blocks/yellorium', 1 , 'bigreactors:yellorium', 9000, 'block_yellorium')
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.