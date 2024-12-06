// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
    let atmController = [
        {
            id: 'auto_hepheastus_forge',
            aureal: 50000,
            blood: 50000,
            souls: 1000,
            xp: 25000,
            main: 'forbidden_arcanus:hephaestus_forge_tier_5',
            secondary: 'alltheores:enderium_gear'
        },
        {
            id: 'runic_star_altar',
            aureal: 200000,
            blood: 1000000,
            souls: 10000,
            xp: 75000,
            main: 'eternal_starlight:loot_bag[eternal_starlight:loot_table="eternal_starlight:bosses/lunar_monstrosity"]',
            secondary: 'alltheores:enderium_gear'
        },
        {
            id: 'runic_crucible',
            aureal: 100000,
            blood: 25000,
            souls: 1000,
            xp: 10000,
            main: 'ars_nouveau:enchanting_apparatus',
            secondary: 'ars_nouveau:arcane_core'
        },
        {
            id: 'runic_enchanter',
            aureal: 100000,
            blood: 1000,
            souls: 1000,
            xp: 50000,
            main: 'minecraft:enchanting_table',
            secondary: 'apothic_enchanting:treasure_shelf'
        }
    ]

    for (let item of atmController) {
        allthemods.recipes.modular_machinery_reborn.machine_recipe('atm:auto_hepheastus_forge', 300)
            .requireEnergy(12288, 8, 18)
            .requireFluid(`${item.aureal}x kubejs:liquid_aureal`, 31, 8)
            .requireFluid(`${item.souls}x kubejs:liquid_souls`, 31, 27)
            .requireFluid(`${item.blood}x evilcraft:blood`, 31, 46)
            .requireFluid(`${item.xp}x justdirethings:xp_fluid_source`, 31, 65)
            .requireItem('modular_machinery_reborn:casing_plain', 54, 18)
            .requireItem(item.main, 54, 37)
            .requireItem('2x enderio:z_logic_controller', 54, 56)
            .requireItem(`2x ${item.secondary}`, 73, 18)
            .requireItem('2x forbidden_arcanus:mundabitur_dust', 73, 37)
            .requireItem('forbidden_arcanus:quantum_injector', 73, 56)
            .progressX(109)
            .progressY(37)
            .produceItem(`modular_machinery_reborn:controller[modular_machinery_reborn:machine="atm:${item.id}"]`, 149, 37)
            .width(172)
            .height(106)
    }

})

ServerEvents.generateData('after_mods', allthemods => {
    allthemods.json('atm:forbidden_arcanus/hephaestus_forge/ritual/auto_hephaestus_forge.json',
        {
            enhancers: [
                'forbidden_arcanus:artisan_relic',
                'forbidden_arcanus:elementarium',
                'forbidden_arcanus:divine_pact'
            ],
            essences: {
                aureal: 5000,
                blood: 5000,
                souls: 100,
                experience: 2500
            },
            forge_tier: 5,
            inputs: [
                {
                    amount: 1,
                    ingredient: {
                        item: 'forbidden_arcanus:hephaestus_forge_tier_5'
                    }
                },
                {
                    amount: 1,
                    ingredient: {
                        item: 'enderio:z_logic_controller'
                    }
                },
                {
                    amount: 1,
                    ingredient: {
                        item: 'alltheores:enderium_gear'
                    }
                },
                {
                    amount: 1,
                    ingredient: {
                        item: 'forbidden_arcanus:mundabitur_dust'
                    }
                },
                {
                    amount: 1,
                    ingredient: {
                        item: 'forbidden_arcanus:quantum_injector'
                    }
                },
                {
                    amount: 1,
                    ingredient: {
                        item: 'enderio:z_logic_controller'
                    }
                },
                {
                    amount: 1,
                    ingredient: {
                        item: 'alltheores:enderium_gear'
                    }
                },
                {
                    amount: 1,
                    ingredient: {
                        item: 'forbidden_arcanus:mundabitur_dust'
                    }
                }
            ],
            magic_circle: 'forbidden_arcanus:create_item',
            main_ingredient: {
                item: 'modular_machinery_reborn:casing_plain'
            },
            result: {
                type: 'forbidden_arcanus:create_item',
                result_item: Item.of('modular_machinery_reborn:controller[modular_machinery_reborn:machine="atm:auto_hepheastus_forge"]').toJson()
            }
        }
    )   

    allthemods.json('atm:forbidden_arcanus/hephaestus_forge/ritual/runic_star_forge.json',
        {
            enhancers: [
                'forbidden_arcanus:artisan_relic',
                'forbidden_arcanus:elementarium',
                'forbidden_arcanus:divine_pact',
                'forbidden_arcanus:maledictus_pact'
            ],
            essences: {
                aureal: 20000,
                blood: 100000,
                souls: 1000,
                experience: 7500
            },
            forge_tier: 5,
            inputs: [
                {
                    amount: 1,
                    ingredient: Ingredient.of('eternal_starlight:loot_bag[eternal_starlight:loot_table="eternal_starlight:bosses/lunar_monstrosity"]').toJson()
                },
                {
                    amount: 1,
                    ingredient: {
                        item: 'enderio:z_logic_controller'
                    }
                },
                {
                    amount: 1,
                    ingredient: {
                        item: 'alltheores:enderium_gear'
                    }
                },
                {
                    amount: 1,
                    ingredient: {
                        item: 'forbidden_arcanus:mundabitur_dust'
                    }
                },
                {
                    amount: 1,
                    ingredient: {
                        item: 'forbidden_arcanus:quantum_injector'
                    }
                },
                {
                    amount: 1,
                    ingredient: {
                        item: 'enderio:z_logic_controller'
                    }
                },
                {
                    amount: 1,
                    ingredient: {
                        item: 'alltheores:enderium_gear'
                    }
                },
                {
                    amount: 1,
                    ingredient: {
                        item: 'forbidden_arcanus:mundabitur_dust'
                    }
                }
            ],
            magic_circle: 'forbidden_arcanus:create_item',
            main_ingredient: {
                item: 'modular_machinery_reborn:casing_plain'
            },
            result: {
                type: 'forbidden_arcanus:create_item',
                result_item: Item.of('modular_machinery_reborn:controller[modular_machinery_reborn:machine="atm:runic_star_altar"]').toJson()
            }
        }
    )

    allthemods.json('atm:forbidden_arcanus/hephaestus_forge/ritual/runic_crucible.json',
        {
            enhancers: [
                'forbidden_arcanus:artisan_relic',
                'forbidden_arcanus:elementarium',
                'forbidden_arcanus:divine_pact'
            ],
            essences: {
                aureal: 10000,
                blood: 2500,
                souls: 100,
                experience: 1000
            },
            forge_tier: 5,
            inputs: [
                {
                    amount: 1,
                    ingredient: {
                        item: 'ars_nouveau:enchanting_apparatus'
                    }
                },
                {
                    amount: 1,
                    ingredient: {
                        item: 'enderio:z_logic_controller'
                    }
                },
                {
                    amount: 1,
                    ingredient: {
                        item: 'ars_nouveau:arcane_core'
                    }
                },
                {
                    amount: 1,
                    ingredient: {
                        item: 'forbidden_arcanus:mundabitur_dust'
                    }
                },
                {
                    amount: 1,
                    ingredient: {
                        item: 'forbidden_arcanus:quantum_injector'
                    }
                },
                {
                    amount: 1,
                    ingredient: {
                        item: 'enderio:z_logic_controller'
                    }
                },
                {
                    amount: 1,
                    ingredient: {
                        item: 'ars_nouveau:arcane_core'
                    }
                },
                {
                    amount: 1,
                    ingredient: {
                        item: 'forbidden_arcanus:mundabitur_dust'
                    }
                }
            ],
            magic_circle: 'forbidden_arcanus:create_item',
            main_ingredient: {
                item: 'modular_machinery_reborn:casing_plain'
            },
            result: {
                type: 'forbidden_arcanus:create_item',
                result_item: Item.of('modular_machinery_reborn:controller[modular_machinery_reborn:machine="atm:runic_crucible"]').toJson()
            }
        }
    )

    allthemods.json('atm:forbidden_arcanus/hephaestus_forge/ritual/runic_enchanter.json',
        {
            enhancers: [
                'forbidden_arcanus:artisan_relic',
                'forbidden_arcanus:elementarium',
                'forbidden_arcanus:divine_pact'
            ],
            essences: {
                aureal: 10000,
                blood: 100,
                souls: 100,
                experience: 5000
            },
            forge_tier: 5,
            inputs: [
                {
                    amount: 1,
                    ingredient: {
                        item: 'minecraft:enchanting_table'
                    }
                },
                {
                    amount: 1,
                    ingredient: {
                        item: 'enderio:z_logic_controller'
                    }
                },
                {
                    amount: 1,
                    ingredient: {
                        item: 'apothic_enchanting:treasure_shelf'
                    }
                },
                {
                    amount: 1,
                    ingredient: {
                        item: 'forbidden_arcanus:mundabitur_dust'
                    }
                },
                {
                    amount: 1,
                    ingredient: {
                        item: 'forbidden_arcanus:quantum_injector'
                    }
                },
                {
                    amount: 1,
                    ingredient: {
                        item: 'enderio:z_logic_controller'
                    }
                },
                {
                    amount: 1,
                    ingredient: {
                        item: 'apothic_enchanting:treasure_shelf'
                    }
                },
                {
                    amount: 1,
                    ingredient: {
                        item: 'forbidden_arcanus:mundabitur_dust'
                    }
                }
            ],
            magic_circle: 'forbidden_arcanus:create_item',
            main_ingredient: {
                item: 'modular_machinery_reborn:casing_plain'
            },
            result: {
                type: 'forbidden_arcanus:create_item',
                result_item: Item.of('modular_machinery_reborn:controller[modular_machinery_reborn:machine="atm:runic_enchanter"]').toJson()
            }
        }
    )
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.