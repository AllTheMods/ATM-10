// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
    //Blocks
        //Casing
        allthemods.shaped('2x modular_machinery_reborn:casing_plain',
            [
                'ppp',
                'pcp',
                'ppp'
            ],
            {
                c: 'enderio:sentient_ender',
                p: 'kubejs:modularium_plate'
            }
        )

    //Vent
        allthemods.shaped('2x modular_machinery_reborn:casing_vent',
            [
                'vvc',
                'vpv',
                'cvv'
            ],
            {
                c: 'modular_machinery_reborn:casing_plain',
                p: 'pneumaticcraft:pressure_tube',
                v: 'pneumaticcraft:air_grate_module'
            }
        )

    //Firebox
        allthemods.shaped('4x modular_machinery_reborn:casing_firebox',
            [
                'csc',
                'shs',
                'csc'
            ],
            {
                c: 'modular_machinery_reborn:casing_vent',
                s: 'railcraft:refined_firestone',
                h: 'pneumaticcraft:heat_pipe'
            }
        )

    //Reinforced
        allthemods.shaped('4x modular_machinery_reborn:casing_reinforced',
            [
                'oco',
                'cdc',
                'oco'
            ],
            {
                c: 'modular_machinery_reborn:casing_plain',
                d: 'enderio:dark_steel_block',
                o: 'enderio:reinforced_obsidian_block'
            }
        )
    
    //Gearbox
        allthemods.shaped('modular_machinery_reborn:casing_gearbox',
            [
                'idi',
                'dcd',
                'idi'
            ],
            {
                c: 'modular_machinery_reborn:casing_plain',
                d: 'enderio:dark_bimetal_gear',
                i: 'alltheores:iron_gear'
            }
        )
    
    //Circuitry
        allthemods.shaped('4x modular_machinery_reborn:casing_circuitry',
            [
                'cbc',
                'ame',
                'cuc'
            ],
            {
                c: 'modular_machinery_reborn:casing_plain',
                a: 'mekanism:advanced_control_circuit',
                b: 'mekanism:basic_control_circuit',
                e: 'mekanism:elite_control_circuit',
                u: 'mekanism:ultimate_control_circuit',
                m: 'modern_industrialization:electronic_circuit'
            }
        )

    //Hatches
            let addMMRHatch = (output, casing, item1, item2) => {
                allthemods.shaped(output,
                    [
                        'pxp',
                        'pcp',
                        'pyp'
                    ],
                    {
                        p: 'kubejs:modularium_plate',
                        c: casing,
                        x: item1,
                        y: item2
                    }
                )
            }

            let upgradeMMRHatchInput = (output, casing, item1) => {
                allthemods.shaped(output,
                    [
                        'pxp',
                        'pcp',
                        'ppp'
                    ],
                    {
                        p: 'kubejs:modularium_plate',
                        c: casing,
                        x: item1
                    }
                )
            }

            let upgradeMMRHatchOutput = (output, casing, item1) => {
                allthemods.shaped(output,
                    [
                        'ppp',
                        'pcp',
                        'pxp'
                    ],
                    {
                        p: 'kubejs:modularium_plate',
                        c: casing,
                        x: item1
                    }
                )
            }
        //Input
            //Item
                addMMRHatch('modular_machinery_reborn:inputbus_tiny', 'modular_machinery_reborn:casing_plain', '#c:chests', 'enderio:impulse_hopper')
                upgradeMMRHatchInput('modular_machinery_reborn:inputbus_small', 'modular_machinery_reborn:inputbus_tiny', '#c:chests')
                upgradeMMRHatchInput('modular_machinery_reborn:inputbus_normal', 'modular_machinery_reborn:inputbus_small', 'sophisticatedstorage:copper_chest[sophisticatedstorage:wood_type="oak"]')
                addMMRHatch('modular_machinery_reborn:inputbus_reinforced', 'modular_machinery_reborn:casing_reinforced', 'sophisticatedstorage:iron_chest[sophisticatedstorage:wood_type="oak"]', 'enderio:impulse_hopper')
                upgradeMMRHatchInput('modular_machinery_reborn:inputbus_big', 'modular_machinery_reborn:inputbus_reinforced', 'sophisticatedstorage:gold_chest[sophisticatedstorage:wood_type="oak"]')
                upgradeMMRHatchInput('modular_machinery_reborn:inputbus_huge', 'modular_machinery_reborn:inputbus_big', 'sophisticatedstorage:diamond_chest[sophisticatedstorage:wood_type="oak"]')
                upgradeMMRHatchInput('modular_machinery_reborn:inputbus_ludicrous', 'modular_machinery_reborn:inputbus_huge', 'sophisticatedstorage:netherite_chest[sophisticatedstorage:wood_type="oak"]')
            //Fluid
                addMMRHatch('modular_machinery_reborn:fluidinputhatch_tiny', 'modular_machinery_reborn:casing_plain', 'mekanism:basic_fluid_tank', 'pneumaticcraft:liquid_hopper')
                upgradeMMRHatchInput('modular_machinery_reborn:fluidinputhatch_small', 'modular_machinery_reborn:fluidinputhatch_tiny', 'mekanism:basic_fluid_tank')
                upgradeMMRHatchInput('modular_machinery_reborn:fluidinputhatch_normal', 'modular_machinery_reborn:fluidinputhatch_small', 'mekanism:advanced_fluid_tank')
                addMMRHatch('modular_machinery_reborn:fluidinputhatch_reinforced', 'modular_machinery_reborn:casing_reinforced', 'mekanism:advanced_fluid_tank', 'pneumaticcraft:liquid_hopper')
                upgradeMMRHatchInput('modular_machinery_reborn:fluidinputhatch_big', 'modular_machinery_reborn:fluidinputhatch_reinforced', 'mekanism:elite_fluid_tank')
                upgradeMMRHatchInput('modular_machinery_reborn:fluidinputhatch_huge', 'modular_machinery_reborn:fluidinputhatch_big', 'mekanism:elite_fluid_tank')
                upgradeMMRHatchInput('modular_machinery_reborn:fluidinputhatch_ludicrous', 'modular_machinery_reborn:fluidinputhatch_huge', 'mekanism:ultimate_fluid_tank')
                upgradeMMRHatchInput('modular_machinery_reborn:fluidinputhatch_vacuum', 'modular_machinery_reborn:fluidinputhatch_ludicrous', 'mekanism:ultimate_fluid_tank')
            //Energy
                addMMRHatch('modular_machinery_reborn:energyinputhatch_tiny', 'modular_machinery_reborn:casing_plain', 'mekanism:basic_energy_cube', 'mekanism:basic_induction_provider')
                upgradeMMRHatchInput('modular_machinery_reborn:energyinputhatch_small', 'modular_machinery_reborn:energyinputhatch_tiny', 'mekanism:basic_energy_cube')
                upgradeMMRHatchInput('modular_machinery_reborn:energyinputhatch_normal', 'modular_machinery_reborn:energyinputhatch_small', 'mekanism:advanced_energy_cube')
                addMMRHatch('modular_machinery_reborn:energyinputhatch_reinforced', 'modular_machinery_reborn:casing_reinforced', 'mekanism:advanced_energy_cube', 'mekanism:advanced_induction_provider')
                upgradeMMRHatchInput('modular_machinery_reborn:energyinputhatch_big', 'modular_machinery_reborn:energyinputhatch_reinforced', 'mekanism:elite_energy_cube')
                upgradeMMRHatchInput('modular_machinery_reborn:energyinputhatch_huge', 'modular_machinery_reborn:energyinputhatch_big', 'mekanism:elite_energy_cube')
                upgradeMMRHatchInput('modular_machinery_reborn:energyinputhatch_ludicrous', 'modular_machinery_reborn:energyinputhatch_huge', 'mekanism:ultimate_energy_cube')
                upgradeMMRHatchInput('modular_machinery_reborn:energyinputhatch_ultimate', 'modular_machinery_reborn:energyinputhatch_ludicrous', 'mekanism:ultimate_energy_cube')
            //Chemical
                addMMRHatch('modular_machinery_reborn_mekanism:chemicalinputhatch_tiny', 'modular_machinery_reborn:casing_plain', 'mekanism:basic_chemical_tank', 'enderio:chemical_filter')
                upgradeMMRHatchInput('modular_machinery_reborn_mekanism:chemicalinputhatch_small', 'modular_machinery_reborn_mekanism:chemicalinputhatch_tiny', 'mekanism:basic_chemical_tank')
                upgradeMMRHatchInput('modular_machinery_reborn_mekanism:chemicalinputhatch_normal', 'modular_machinery_reborn_mekanism:chemicalinputhatch_small', 'mekanism:advanced_chemical_tank')
                addMMRHatch('modular_machinery_reborn_mekanism:chemicalinputhatch_reinforced', 'modular_machinery_reborn:casing_reinforced', 'mekanism:advanced_chemical_tank', 'enderio:chemical_filter')
                upgradeMMRHatchInput('modular_machinery_reborn_mekanism:chemicalinputhatch_big', 'modular_machinery_reborn_mekanism:chemicalinputhatch_reinforced', 'mekanism:elite_chemical_tank')
                upgradeMMRHatchInput('modular_machinery_reborn_mekanism:chemicalinputhatch_huge', 'modular_machinery_reborn_mekanism:chemicalinputhatch_big', 'mekanism:elite_chemical_tank')
                upgradeMMRHatchInput('modular_machinery_reborn_mekanism:chemicalinputhatch_ludicrous', 'modular_machinery_reborn_mekanism:chemicalinputhatch_huge', 'mekanism:ultimate_chemical_tank')
                upgradeMMRHatchInput('modular_machinery_reborn_mekanism:chemicalinputhatch_vacuum', 'modular_machinery_reborn_mekanism:chemicalinputhatch_ludicrous', 'mekanism:ultimate_chemical_tank')
            //Source
                addMMRHatch('modular_machinery_reborn_ars:sourceinputhatch_tiny', 'modular_machinery_reborn:casing_plain', 'ars_nouveau:source_jar', 'ars_nouveau:relay_deposit')
                upgradeMMRHatchInput('modular_machinery_reborn_ars:sourceinputhatch_small', 'modular_machinery_reborn_ars:sourceinputhatch_tiny', 'ars_nouveau:source_jar')
                upgradeMMRHatchInput('modular_machinery_reborn_ars:sourceinputhatch_normal', 'modular_machinery_reborn_ars:sourceinputhatch_small', 'ars_nouveau:source_jar')
                addMMRHatch('modular_machinery_reborn_ars:sourceinputhatch_reinforced', 'modular_machinery_reborn:casing_reinforced', 'ars_nouveau:source_jar', 'ars_nouveau:relay_deposit')
                upgradeMMRHatchInput('modular_machinery_reborn_ars:sourceinputhatch_big', 'modular_machinery_reborn_ars:sourceinputhatch_reinforced', 'ars_nouveau:source_jar')
                upgradeMMRHatchInput('modular_machinery_reborn_ars:sourceinputhatch_huge', 'modular_machinery_reborn_ars:sourceinputhatch_big', 'ars_nouveau:source_jar')
                upgradeMMRHatchInput('modular_machinery_reborn_ars:sourceinputhatch_ludicrous', 'modular_machinery_reborn_ars:sourceinputhatch_huge', 'ars_nouveau:source_jar')
                upgradeMMRHatchInput('modular_machinery_reborn_ars:sourceinputhatch_vacuum', 'modular_machinery_reborn_ars:sourceinputhatch_ludicrous', 'ars_nouveau:source_jar')
        //Ouptut
            //Item
                addMMRHatch('modular_machinery_reborn:outputbus_tiny', 'modular_machinery_reborn:casing_plain', 'enderio:impulse_hopper', '#c:chests')
                upgradeMMRHatchOutput('modular_machinery_reborn:outputbus_small', 'modular_machinery_reborn:outputbus_tiny', '#c:chests')
                upgradeMMRHatchOutput('modular_machinery_reborn:outputbus_normal', 'modular_machinery_reborn:outputbus_small', 'sophisticatedstorage:copper_chest[sophisticatedstorage:wood_type="oak"]')
                addMMRHatch('modular_machinery_reborn:outputbus_reinforced', 'modular_machinery_reborn:casing_reinforced', 'enderio:impulse_hopper', 'sophisticatedstorage:iron_chest[sophisticatedstorage:wood_type="oak"]')
                upgradeMMRHatchOutput('modular_machinery_reborn:outputbus_big', 'modular_machinery_reborn:outputbus_reinforced', 'sophisticatedstorage:gold_chest[sophisticatedstorage:wood_type="oak"]')
                upgradeMMRHatchOutput('modular_machinery_reborn:outputbus_huge', 'modular_machinery_reborn:outputbus_big', 'sophisticatedstorage:diamond_chest[sophisticatedstorage:wood_type="oak"]')
                upgradeMMRHatchOutput('modular_machinery_reborn:outputbus_ludicrous', 'modular_machinery_reborn:outputbus_huge', 'sophisticatedstorage:netherite_chest[sophisticatedstorage:wood_type="oak"]')
            //Fluid
                addMMRHatch('modular_machinery_reborn:fluidoutputhatch_tiny', 'modular_machinery_reborn:casing_plain', 'pneumaticcraft:liquid_hopper', 'mekanism:basic_fluid_tank')
                upgradeMMRHatchOutput('modular_machinery_reborn:fluidoutputhatch_small', 'modular_machinery_reborn:fluidoutputhatch_tiny', 'mekanism:basic_fluid_tank')
                upgradeMMRHatchOutput('modular_machinery_reborn:fluidoutputhatch_normal', 'modular_machinery_reborn:fluidoutputhatch_small', 'mekanism:advanced_fluid_tank')
                addMMRHatch('modular_machinery_reborn:fluidoutputhatch_reinforced', 'modular_machinery_reborn:casing_reinforced', 'pneumaticcraft:liquid_hopper', 'mekanism:advanced_fluid_tank')
                upgradeMMRHatchOutput('modular_machinery_reborn:fluidoutputhatch_big', 'modular_machinery_reborn:fluidoutputhatch_reinforced', 'mekanism:elite_fluid_tank')
                upgradeMMRHatchOutput('modular_machinery_reborn:fluidoutputhatch_huge', 'modular_machinery_reborn:fluidoutputhatch_big', 'mekanism:elite_fluid_tank')
                upgradeMMRHatchOutput('modular_machinery_reborn:fluidoutputhatch_ludicrous', 'modular_machinery_reborn:fluidoutputhatch_huge', 'mekanism:ultimate_fluid_tank')
                upgradeMMRHatchOutput('modular_machinery_reborn:fluidoutputhatch_vacuum', 'modular_machinery_reborn:fluidoutputhatch_ludicrous', 'mekanism:ultimate_fluid_tank')
            //Energy
                addMMRHatch('modular_machinery_reborn:energyoutputhatch_tiny', 'modular_machinery_reborn:casing_plain', 'mekanism:basic_induction_provider', 'mekanism:basic_energy_cube')
                upgradeMMRHatchOutput('modular_machinery_reborn:energyoutputhatch_small', 'modular_machinery_reborn:energyoutputhatch_tiny', 'mekanism:basic_energy_cube')
                upgradeMMRHatchOutput('modular_machinery_reborn:energyoutputhatch_normal', 'modular_machinery_reborn:energyoutputhatch_small', 'mekanism:advanced_energy_cube')
                addMMRHatch('modular_machinery_reborn:energyoutputhatch_reinforced', 'modular_machinery_reborn:casing_reinforced', 'mekanism:advanced_induction_provider', 'mekanism:advanced_energy_cube')
                upgradeMMRHatchOutput('modular_machinery_reborn:energyoutputhatch_big', 'modular_machinery_reborn:energyoutputhatch_reinforced', 'mekanism:elite_energy_cube')
                upgradeMMRHatchOutput('modular_machinery_reborn:energyoutputhatch_huge', 'modular_machinery_reborn:energyoutputhatch_big', 'mekanism:elite_energy_cube')
                upgradeMMRHatchOutput('modular_machinery_reborn:energyoutputhatch_ludicrous', 'modular_machinery_reborn:energyoutputhatch_huge', 'mekanism:ultimate_energy_cube')
                upgradeMMRHatchOutput('modular_machinery_reborn:energyoutputhatch_ultimate', 'modular_machinery_reborn:energyoutputhatch_ludicrous', 'mekanism:ultimate_energy_cube')
            //Chemical
                addMMRHatch('modular_machinery_reborn_mekanism:chemicaloutputhatch_tiny', 'modular_machinery_reborn:casing_plain', 'enderio:chemical_filter', 'mekanism:basic_chemical_tank')
                upgradeMMRHatchOutput('modular_machinery_reborn_mekanism:chemicaloutputhatch_small', 'modular_machinery_reborn_mekanism:chemicaloutputhatch_tiny', 'mekanism:basic_chemical_tank')
                upgradeMMRHatchOutput('modular_machinery_reborn_mekanism:chemicaloutputhatch_normal', 'modular_machinery_reborn_mekanism:chemicaloutputhatch_small', 'mekanism:advanced_chemical_tank')
                addMMRHatch('modular_machinery_reborn_mekanism:chemicaloutputhatch_reinforced', 'modular_machinery_reborn:casing_reinforced', 'enderio:chemical_filter', 'mekanism:advanced_chemical_tank')
                upgradeMMRHatchOutput('modular_machinery_reborn_mekanism:chemicaloutputhatch_big', 'modular_machinery_reborn_mekanism:chemicaloutputhatch_reinforced', 'mekanism:elite_chemical_tank')
                upgradeMMRHatchOutput('modular_machinery_reborn_mekanism:chemicaloutputhatch_huge', 'modular_machinery_reborn_mekanism:chemicaloutputhatch_big', 'mekanism:elite_chemical_tank')
                upgradeMMRHatchOutput('modular_machinery_reborn_mekanism:chemicaloutputhatch_ludicrous', 'modular_machinery_reborn_mekanism:chemicaloutputhatch_huge', 'mekanism:ultimate_chemical_tank')
                upgradeMMRHatchOutput('modular_machinery_reborn_mekanism:chemicaloutputhatch_vacuum', 'modular_machinery_reborn_mekanism:chemicaloutputhatch_ludicrous', 'mekanism:ultimate_chemical_tank')
            //Source
                addMMRHatch('modular_machinery_reborn_ars:sourceoutputhatch_tiny', 'modular_machinery_reborn:casing_plain', 'ars_nouveau:relay_collector', 'ars_nouveau:source_jar')
                upgradeMMRHatchOutput('modular_machinery_reborn_ars:sourceoutputhatch_small', 'modular_machinery_reborn_ars:sourceoutputhatch_tiny', 'ars_nouveau:source_jar')
                upgradeMMRHatchOutput('modular_machinery_reborn_ars:sourceoutputhatch_normal', 'modular_machinery_reborn_ars:sourceoutputhatch_small', 'ars_nouveau:source_jar')
                addMMRHatch('modular_machinery_reborn_ars:sourceoutputhatch_reinforced', 'modular_machinery_reborn:casing_reinforced', 'ars_nouveau:relay_collector', 'ars_nouveau:source_jar')
                upgradeMMRHatchOutput('modular_machinery_reborn_ars:sourceoutputhatch_big', 'modular_machinery_reborn_ars:sourceoutputhatch_reinforced', 'ars_nouveau:source_jar')
                upgradeMMRHatchOutput('modular_machinery_reborn_ars:sourceoutputhatch_huge', 'modular_machinery_reborn_ars:sourceoutputhatch_big', 'ars_nouveau:source_jar')
                upgradeMMRHatchOutput('modular_machinery_reborn_ars:sourceoutputhatch_ludicrous', 'modular_machinery_reborn_ars:sourceoutputhatch_huge', 'ars_nouveau:source_jar')
                upgradeMMRHatchOutput('modular_machinery_reborn_ars:sourceoutputhatch_vacuum', 'modular_machinery_reborn_ars:sourceoutputhatch_ludicrous', 'ars_nouveau:source_jar')

        //Time Counter
            allthemods.shaped('modular_machinery_reborn:time_counter',
                [
                    'psp',
                    'bct',
                    'php'
                ],
                {
                    p: 'kubejs:modularium_plate',
                    s: 'productivelib:upgrade_time_2',
                    b: 'productivebees:spawn_egg_configurable_bee[entity_data={id:"productivebees:configurable_bee",type:"productivebees:time_crystal"}]',
                    c: 'modular_machinery_reborn:casing_plain',
                    t: 'productivetrees:time_traveller_sapling',
                    h: 'naturesaura:clock_hand'
                }
            )
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.