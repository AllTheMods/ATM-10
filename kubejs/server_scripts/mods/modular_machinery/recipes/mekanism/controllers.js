// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
    let mekController = [
        {
            machine: 'mekanism:chemical_crystallizer',
            id: 'chemical_crystallizer'
        },
        {
            machine: 'mekanism:chemical_dissolution_chamber',
            id: 'chemical_dissolution_chamber'
        },
        {
            machine: 'mekanism:chemical_infuser',
            id: 'chemical_infuser'
        },
        {
            machine: 'mekanism:chemical_oxidizer',
            id: 'chemical_oxidizer'
        },
        {
            machine: 'mekanism:chemical_washer',
            id: 'chemical_washer'
        },
        {
            machine: 'mekanism:electrolytic_separator',
            id: 'electrolytic_seperator'
        },
        {
            machine: 'mekanism:isotopic_centrifuge',
            id: 'isotopic_centrifuge'
        },
        {
            machine: 'mekanism:pressurized_reaction_chamber',
            id: 'pressurized_reaction_chamber'
        },
        {
            machine: 'mekanism:solar_neutron_activator',
            id: 'solar_neutron_activator'
        }
    ]

    for (let item of mekController) {
        allthemods.recipes.modular_machinery_reborn.machine_recipe('atm:auto_hepheastus_forge', 300)
            .requireEnergy(12288, 8, 9)
            .requireFluid('25000x kubejs:liquid_aureal', 31, 8)
            .requireFluid('500x kubejs:liquid_souls', 31, 27)
            .requireFluid('10000x evilcraft:blood', 31, 46)
            .requireItem('modular_machinery_reborn:casing_plain', 54, 8)
            .requireItem(item.machine, 54, 27)
            .requireItem('2x enderio:z_logic_controller', 54, 46)
            .requireItem('2x mekanism:ultimate_control_circuit', 73, 8)
            .requireItem('2x forbidden_arcanus:mundabitur_dust', 73, 27)
            .requireItem('forbidden_arcanus:quantum_injector', 73, 46)
            .progressX(109)
            .progressY(27)
            .produceItem(`modular_machinery_reborn:controller[modular_machinery_reborn:machine="atm:${item.id}"]`, 149, 27)
            .width(172)
            .height(90)
    }

})

ServerEvents.generateData('after_mods', allthemods => {

    let mekController = [
        {
            machine: 'mekanism:chemical_crystallizer',
            id: 'chemical_crystallizer'
        },
        {
            machine: 'mekanism:chemical_dissolution_chamber',
            id: 'chemical_dissolution_chamber'
        },
        {
            machine: 'mekanism:chemical_infuser',
            id: 'chemical_infuser'
        },
        {
            machine: 'mekanism:chemical_oxidizer',
            id: 'chemical_oxidizer'
        },
        {
            machine: 'mekanism:chemical_washer',
            id: 'chemical_washer'
        },
        {
            machine: 'mekanism:electrolytic_separator',
            id: 'electrolytic_seperator'
        },
        {
            machine: 'mekanism:isotopic_centrifuge',
            id: 'isotopic_centrifuge'
        },
        {
            machine: 'mekanism:pressurized_reaction_chamber',
            id: 'pressurized_reaction_chamber'
        },
        {
            machine: 'mekanism:solar_neutron_activator',
            id: 'solar_neutron_activator'
        }
    ]

    for (let item of mekController) {
        allthemods.json(`atm:forbidden_arcanus/hephaestus_forge/ritual/${item.id}.json`,
            {
                enhancers: [
                    'forbidden_arcanus:artisan_relic',
                    'forbidden_arcanus:elementarium',
                ],
                essences: {
                    aureal: 2500,
                    blood: 1000,
                    souls: 50,
                    experience: 0
                },
                forge_tier: 5,
                inputs: [
                    {
                        amount: 1,
                        ingredient: {
                            item: item.machine
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
                            item: 'mekanism:ultimate_control_circuit'
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
                            item: 'mekanism:ultimate_control_circuit'
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
                    result_item: Item.of(`modular_machinery_reborn:controller[modular_machinery_reborn:machine="atm:${item.id}"]`).toJson()
                }
            }
        )
    }
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.