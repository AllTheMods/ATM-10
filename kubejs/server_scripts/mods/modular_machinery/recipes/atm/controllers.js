// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

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