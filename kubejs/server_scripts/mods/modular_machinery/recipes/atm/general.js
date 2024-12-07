// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
    //Modularium Plates
        allthemods.recipes.modern_industrialization.compressor(2, 200)
            .itemIn('modular_machinery_reborn:modularium')
            .itemOut('kubejs:modularium_plate')

        allthemods.custom(
            {
                type: 'immersiveengineering:metal_press',
                energy: 2400,
                input: {
                  item: 'modular_machinery_reborn:modularium'
                },
                mold: 'immersiveengineering:mold_plate',
                result: {
                  item: 'kubejs:modularium_plate'
                }
            }
        )

        allthemods.shaped('modular_machinery_reborn:blueprint', 
            [
                'plp',
                'pwp',
                'ppp'
            ],
            {
                p: 'kubejs:modularium_plate',
                l: 'actuallyadditions:lens_of_color',
                w: 'actuallyadditions:laser_wrench'
            }
        )

        allthemods.custom(
            {
                type: 'industrialforegoing:fluid_extractor',
                breakChance: 0.05,
                defaultRecipe: false,
                input: {
                  item: 'productivetrees:soul_tree_log'
                },
                output: {
                  amount: 2,
                  id: 'kubejs:unrefined_liquid_souls'
                },
                result: {
                  Name: 'productivetrees:soul_tree_stripped_log',
                  Properties: {
                    axis: 'y'
                  }
                }
            }
        )
    
        allthemods.custom(
            {
                type: 'industrialforegoing:fluid_extractor',
                breakChance: 0.1,
                defaultRecipe: false,
                input: {
                  item: 'productivetrees:soul_tree_stripped_log',
                },
                output: {
                  amount: 1,
                  id: 'kubejs:unrefined_liquid_souls'
                },
                result: {
                  Name: 'minecraft:air'
                }
            }
        )

    //Removal
        allthemods.remove({id: /modular_machinery_reborn:.*input.*/})
        allthemods.remove({id: /modular_machinery_reborn:.*output.*/})
        allthemods.remove({id: /modular_machinery_reborn:casing.*/})
        allthemods.remove({id: /modular_machinery_reborn:.*ingot/})
        allthemods.remove({id: /modular_machinery_reborn_ars:.*input.*/})
        allthemods.remove({id: /modular_machinery_reborn_ars:.*output.*/})
        allthemods.remove({id: /modular_machinery_reborn_mekanism:.*input.*/})
        allthemods.remove({id: /modular_machinery_reborn_mekanism:.*output.*/})
})


ServerEvents.generateData('after_mods', allthemods => {
    allthemods.json('atm:forbidden_arcanus/hephaestus_forge/ritual/modularium.json',
        {
            enhancers: [
                'forbidden_arcanus:artisan_relic',
                'forbidden_arcanus:elementarium'
            ],
            essences: {
                aureal: 500,
                blood: 500,
                souls: 100,
                experience: 100
            },
            forge_tier: 5,
            inputs: [
                {
                    amount: 1,
                    ingredient: {
                        item: 'forbidden_arcanus:deorum_ingot'
                    }
                },
                {
                    amount: 1,
                    ingredient: {
                        item: 'enderio:end_steel_ingot'
                    }
                },
                {
                    amount: 1,
                    ingredient: {
                        item: 'forbidden_arcanus:deorum_ingot'
                    }
                },
                {
                    amount: 1,
                    ingredient: {
                        item: 'enderio:end_steel_ingot'
                    }
                },
                {
                    amount: 1,
                    ingredient: {
                        item: 'forbidden_arcanus:deorum_ingot'
                    }
                },
                {
                    amount: 1,
                    ingredient: {
                        item: 'enderio:end_steel_ingot'
                    }
                },
                {
                    amount: 1,
                    ingredient: {
                        item: 'forbidden_arcanus:deorum_ingot'
                    }
                },
                {
                    amount: 1,
                    ingredient: {
                        item: 'enderio:end_steel_ingot'
                    }
                }
            ],
            magic_circle: 'forbidden_arcanus:create_item',
            main_ingredient: {
                item: 'allthemodium:allthemodium_ingot'
            },
            result: {
                type: 'forbidden_arcanus:create_item',
                result_item: {
                    count: 24,
                    id: 'modular_machinery_reborn:modularium'
                }
            }
        }
    )
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.