// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {


    //AE2

        allthemods.custom(
            {
                type: 'powah:energizing',
                energy: 2147483647,
                ingredients: [
                    Ingredient.of('megacells:mega_energy_cell').toJson(),
                    Ingredient.of('megacells:mega_energy_cell').toJson(),
                    Ingredient.of('allthetweaks:atm_star').toJson(),
                    Ingredient.of('megacells:mega_energy_cell').toJson(),
                    Ingredient.of('megacells:mega_energy_cell').toJson()
                ],
                result: {
                    count: 1,
                    id: 'ae2:creative_energy_cell'
                }
            }
        ).id('allthemods:energizing/ae2_creative_energy_cell')

    //Ars Noveau

        allthemods.recipes.kubejs.shaped('allthearcanistgear:creative_spell_book', 
            [
                'BSG', 
                'GGE', 
                'EER'
            ],
            {
                B: 'ars_nouveau:archmage_spell_book',
                S: 'allthetweaks:atm_star',
                G: 'ars_nouveau:source_gem_block',
                E: 'minecraft:ender_eye',
                R: 'occultism:soul_gem'
            }
        )

        allthemods.custom(
            {
                type: 'ars_nouveau:enchanting_apparatus',
                keepNbtOfReagent: false,
                pedestalItems: [
                    Ingredient.of('ars_nouveau:source_gem_block').toJson(),
                    Ingredient.of('allthemodium:allthemodium_source_jar[ars_nouveau:block_fill_contents=100000]').toJson(),
                    Ingredient.of('ars_nouveau:source_gem_block').toJson(),
                    Ingredient.of('allthemodium:allthemodium_source_jar[ars_nouveau:block_fill_contents=100000]').toJson(),
                    Ingredient.of('ars_nouveau:source_gem_block').toJson(),
                    Ingredient.of('allthemodium:allthemodium_source_jar[ars_nouveau:block_fill_contents=100000]').toJson(),
                    Ingredient.of('ars_nouveau:source_gem_block').toJson(),
                    Ingredient.of('allthemodium:allthemodium_source_jar[ars_nouveau:block_fill_contents=100000]').toJson()
                ],
                reagent: [
                    Ingredient.of('allthetweaks:atm_star').toJson()
                ],
                result: {
                    count: 1,
                    id: 'ars_nouveau:creative_source_jar'
                },
                sourceCost: 0
            }
        ).id('allthemods:enchanting_apparatus/creative_source_jar')

    //EvilCraft

        allthemods.recipes.kubejs.shaped('evilcraft:creative_blood_drop', 
            [
                'BCB', 
                'DAE', 
                'BFB'
            ],
            {
                A: 'allthetweaks:atm_star',
                B: 'evilcraft:promise_tier_3',
                C: 'evilcraft:flesh_rejuvenated[cyclopscore:fluid_content={amount:10000,id:"evilcraft:blood"}]',
                D: 'evilcraft:mace_of_distortion[cyclopscore:fluid_content={amount:4000,id:"evilcraft:blood"}]',
                E: 'evilcraft:necromancer_staff[cyclopscore:fluid_content={amount:10000,id:"evilcraft:blood"}]',
                F: 'evilcraft:broom[cyclopscore:fluid_content={amount:10000,id:"evilcraft:blood"}]',
    }
)
    //Integrated Dynamics
        
        allthemods.custom(
            {
                type: 'powah:energizing',
                energy: 2147483647,
                ingredients: [
                    Ingredient.of('integrateddynamics:energy_battery').toJson(),
                    Ingredient.of('integrateddynamics:energy_battery').toJson(),
                    Ingredient.of('allthetweaks:atm_star').toJson(),
                    Ingredient.of('integrateddynamics:energy_battery').toJson(),
                    Ingredient.of('integrateddynamics:energy_battery').toJson()
                ],
                result: {
                    count: 1,
                    id: 'integrateddynamics:energy_battery_creative'
                }
            }
        ).id('allthemods:energizing/integrateddynamics_energy_battery_creative')

    //Iron Jetpacks

        allthemods.recipes.kubejs.shaped('ironjetpacks:cell[ironjetpacks:jetpack_id="ironjetpacks:creative",rarity="epic"]',
            [
                ' A ',
                'BCB',
                ' A ' 
            ],
            {
                A: '#c:storage_blocks/redstone',
                B: 'allthemodium:unobtainium_block',
                C: 'powah:battery_nitro' 
            }
        ).id('allthemods:ironjetpacks_creative_cell')

        allthemods.recipes.kubejs.shaped('ironjetpacks:thruster[ironjetpacks:jetpack_id="ironjetpacks:creative",rarity="epic"]',
            [
                'ABA',
                'BCB',
                'ADA' 
            ],
            {
                A: 'allthemodium:unobtainium_block',
                B: 'powah:nitro_crystal_block',
                C: 'ironjetpacks:cell[ironjetpacks:jetpack_id="ironjetpacks:creative"]',
                D: 'ironfurnaces:unobtainium_furnace' 
            }
        ).id('allthemods:ironjetpacks_creative_thruster')

        allthemods.recipes.kubejs.shaped('ironjetpacks:capacitor[ironjetpacks:jetpack_id="ironjetpacks:creative",rarity="epic"]',
            [
                'ACA',
                'BDB',
                'AEA'
            ],
            {
                A: 'allthemodium:unobtainium_block',
                B: 'mekanism:sps_casing',
                C: 'powah:reactor_nitro',
                D: 'mekanism:ultimate_induction_cell',
                E: 'powah:reactor_nitro'
            }
        ).id('allthemods:ironjetpacks_creative_capacator')            
            
        allthemods.recipes.kubejs.shaped('ironjetpacks:jetpack[ironjetpacks:jetpack_id="ironjetpacks:creative",rarity="epic"]',
            [
                'ACA',
                'BFB',
                'DED'
            ],
            {
                A: 'mysticalagradditions:creative_essence',
                B: 'allthemodium:vibranium_allthemodium_alloy_block',
                C: 'ironjetpacks:capacitor[ironjetpacks:jetpack_id="ironjetpacks:creative"]',
                D: 'ironjetpacks:thruster[ironjetpacks:jetpack_id="ironjetpacks:creative"]',
                E: 'allthetweaks:atm_star',
                F: 'ironjetpacks:jetpack[ironjetpacks:jetpack_id="ironjetpacks:unobtainium"]'
            }
        ).id('allthemods:ironjetpacks_creative_jetpack')

    //Mekanism

        allthemods.recipes.kubejs.shaped('mekanism:creative_chemical_tank',
            [
                'TUT',
                'USU',
                'TUT'
            ],
            {
                T: 'mekanism:ultimate_chemical_tank',
                U: 'allthemodium:unobtainium_ingot',
                S: 'allthetweaks:atm_star_block',
            }
        ).id('allthemods:mekanism/creative_chemical_tank')

        allthemods.recipes.kubejs.shaped('mekanism:creative_fluid_tank',
            [
                'TUT',
                'USU',
                'TUT'
            ],
            {
                T: 'mekanism:ultimate_fluid_tank',
                U: 'allthemodium:unobtainium_ingot',
                S: 'allthetweaks:atm_star_block',
            }
        ).id('allthemods:mekanism/creative_fluid_tank')

        allthemods.recipes.kubejs.shaped('mekanism:creative_energy_cube',
            [
                'ATA', 
                'UCU', 
                'ATA'
            ],
            {
                A: 'mekanism:alloy_atomic',
                T: 'mekanism:energy_tablet',
                U: 'allthemodium:unobtainium_block',
                C: 'mekanism:ultimate_energy_cube'
            }
        ).id('allthemods:mekanism/creative_energy_cube')

        allthemods.custom(
            {
                type: 'powah:energizing',
                energy: 2147483647,
                ingredients: [
                    Ingredient.of('mekanism:creative_energy_cube',).toJson(),
                    Ingredient.of('mekanism:creative_energy_cube',).toJson(),
                    Ingredient.of('allthetweaks:atm_star').toJson(),
                    Ingredient.of('mekanism:creative_energy_cube',).toJson(),
                    Ingredient.of('mekanism:creative_energy_cube',).toJson()
                ],
                result: 
                    Item.of(
                        "mekanism:creative_energy_cube[mekanism:energy={energy_containers:[L;9223372036854775807L]}]"
                    ).toJson()
            }
        ).id('allthemods:energizing/mekanism_creative_energy_cube')
    
    //Powah

        allthemods.custom(
            {
                type: 'powah:energizing',
                energy: 2147483647,
                ingredients: [
                    Ingredient.of('powah:energy_cell_nitro').toJson(),
                    Ingredient.of('powah:energy_cell_nitro').toJson(),
                    Ingredient.of('allthetweaks:atm_star').toJson(),
                    Ingredient.of('powah:energy_cell_nitro').toJson(),
                    Ingredient.of('powah:energy_cell_nitro').toJson()
                ],
                result: Item.of('powah:energy_cell_creative').toJson()
            }
        ).id('allthemods:energizing/powah_creative_energy_cell')

    //PNC

        let pressureChamber = (psi, output, outcount, inputs) => {
            allthemods.custom(
                {
                    type: 'pneumaticcraft:pressure_chamber',
                    inputs: 
                        inputs
                    ,
                    pressure: psi,
                    results: [
                        {
                            count: outcount,
                            id: output
                        }
                    ]
                }
            ).id(`allthemods:pressure/${output.replace(':', '/')}`)
        }

        pressureChamber(4.9, 'pneumaticcraft:creative_compressor', 1,
            [
                {count: 64, item:'pneumaticcraft:advanced_pressure_tube'},
                {count: 1, item: 'pneumaticcraft:electrostatic_compressor'},
                {count: 64, item:'pneumaticcraft:advanced_pressure_tube'},
                {count: 1, item: 'pneumaticcraft:flux_compressor'},
                {count: 1, item: 'allthetweaks:atm_star'},
                {count: 1, item: 'pneumaticcraft:advanced_air_compressor'},
                {count: 64, item:'pneumaticcraft:advanced_pressure_tube'},
                {count: 1, item: 'pneumaticcraft:advanced_liquid_compressor'},
                {count: 64, item:'pneumaticcraft:advanced_pressure_tube'}
            ]
        )

        pressureChamber(4.9, 'pneumaticcraft:creative_compressed_iron_block', 1,
            [
                {count: 64, item:'pneumaticcraft:compressed_iron_block'},
                {count: 64, item:'pneumaticcraft:compressed_iron_block'},
                {count: 64, item:'pneumaticcraft:compressed_iron_block'},
                {count: 64, item:'pneumaticcraft:compressed_iron_block'},
                {count: 1, item: 'allthetweaks:atm_star'},
                {count: 64, item:'pneumaticcraft:compressed_iron_block'},
                {count: 64, item:'pneumaticcraft:compressed_iron_block'},
                {count: 64, item:'pneumaticcraft:compressed_iron_block'},
                {count: 64, item:'pneumaticcraft:compressed_iron_block'}
            ]
        )
    //Railcraft

        allthemods.recipes.kubejs.shaped('railcraft:creative_locomotive', 
            [
                'EF ', 
                'CAC', 
                'BDB'
            ],
            {
                A: 'allthetweaks:atm_star_shard',
                B: 'allthemodium:unobtainium_gear',
                C: 'railcraft:charge_motor',
                D: 'minecraft:minecart',
                E: 'minecraft:redstone_lamp',
                F: 'minecraft:netherite_ingot'
        }
    )

    // Create
    allthemods.custom({
        "type": "create:mechanical_crafting",
        "accept_mirrored": false,
        "category": "misc",
        "key": {
            "A": {
            "item": 'pamhc2foodextended:lemondrizzlecakeitem'
            },
            "B": {
            "item": 'pamhc2foodcore:pumpkincheesecakeitem'
            },
            "C": {
            "item": 'pamhc2foodextended:fruitcakeitem'
            },
            "D": {
            "item": 'pamhc2foodextended:chocolatesprinklecakeitem'
            },
            "E": {
            "item": 'pamhc2foodextended:holidaycakeitem'
            },
            "F": {
            "item": 'pamhc2foodextended:mochicakeitem'
            },
            "G": {
            "item": 'pamhc2foodcore:chocolatecakeitem'
            },
            "H": {
            "item": 'allthetweaks:atm_star'
            },
            "I": {
            "item": 'pamhc2foodcore:carrotcakeitem'
            },
            "J": {
            "item": 'pamhc2foodcore:cheesecakeitem'
            },
            "K": {
            "item": 'pamhc2foodextended:pineappleupsidedowncakeitem'
            },
            "L": {
            "item": 'create_enchantment_industry:experience_cake'
            },
            "M": {
            "item": 'createaddition:honey_cake'
            },
            "N": {
            "item": 'createaddition:chocolate_cake'
            },
            "O": {
            "item": 'create:blaze_cake'
            }
        },
        "pattern": [
            "ABCDE",
            "FGHIJ",
            "KLMNO"
        ],
        "result": {
            "count": 1,
            "id": 'create:creative_blaze_cake'
        },
        "show_notification": false
    }).id("allthemods:create/creative_blaze_cake")
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
