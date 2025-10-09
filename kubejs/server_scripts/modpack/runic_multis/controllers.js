ServerEvents.recipes(allthemods => {

    allthemods.shapeless('modern_industrialization:auto_forge', `modular_machinery_reborn:controller[modular_machinery_reborn:machine="atm:auto_hepheastus_forge"]`)
    allthemods.shapeless('modern_industrialization:star_altar', `modular_machinery_reborn:controller[modular_machinery_reborn:machine="atm:runic_star_altar"]`)
    allthemods.shapeless('modern_industrialization:runic_crucible', `modular_machinery_reborn:controller[modular_machinery_reborn:machine="atm:runic_crucible"]`)
    allthemods.shapeless('modern_industrialization:runic_enchanter', `modular_machinery_reborn:controller[modular_machinery_reborn:machine="atm:runic_enchanter"]`)

    allthemods.shapeless('modern_industrialization:runic_fluid_input_hatch', 'modern_industrialization:runic_fluid_output_hatch')
    allthemods.shapeless('modern_industrialization:runic_fluid_output_hatch', 'modern_industrialization:runic_fluid_input_hatch')

    allthemods.shapeless('modern_industrialization:runic_item_input_hatch', 'modern_industrialization:runic_item_output_hatch')
    allthemods.shapeless('modern_industrialization:runic_item_output_hatch', 'modern_industrialization:runic_item_input_hatch')

    if (Platform.isLoaded('modular_machinery_reborn')) {
        allthemods.shapeless('modern_industrialization:runic_item_input_hatch', 'modular_machinery_reborn:inputbus_ludicrous')
        allthemods.shapeless('modern_industrialization:runic_item_output_hatch', 'modular_machinery_reborn:outputbus_ludicrous')

        allthemods.shapeless('modern_industrialization:runic_fluid_input_hatch', 'modular_machinery_reborn:fluidoutputhatch_vacuum')
        allthemods.shapeless('modern_industrialization:runic_fluid_output_hatch', 'modular_machinery_reborn:fluidinputhatch_vacuum')

        allthemods.shapeless('modern_industrialization:runic_energy_input_hatch', 'modular_machinery_reborn:energyinputhatch_ultimate')
    }
    
    let runic_controllers = [
        {
            id: 'modern_industrialization:auto_forge',
            aureal: 50000,
            blood: 50000,
            souls: 1000,
            xp: 25000,
            main: 'forbidden_arcanus:hephaestus_forge_tier_5',
            secondary: 'alltheores:enderium_gear'
        },
        {
            id: 'modern_industrialization:star_altar',
            aureal: 200000,
            blood: 1000000,
            souls: 10000,
            xp: 75000,
            main: 'eternal_starlight:loot_bag[eternal_starlight:loot_table="eternal_starlight:bosses/lunar_monstrosity"]',
            secondary: 'alltheores:enderium_gear'
        },
        {
            id: 'modern_industrialization:runic_crucible',
            aureal: 100000,
            blood: 25000,
            souls: 1000,
            xp: 10000,
            main: 'ars_nouveau:enchanting_apparatus',
            secondary: 'ars_nouveau:arcane_core'
        },
        {
            id: 'modern_industrialization:runic_enchanter',
            aureal: 100000,
            blood: 1000,
            souls: 1000,
            xp: 50000,
            main: 'minecraft:enchanting_table',
            secondary: 'apothic_enchanting:treasure_shelf'
        }
    ]

    for (let item of runic_controllers) {
        allthemods.recipes.modern_industrialization.auto_forge(512, 300)
            .fluidIn(`${item.aureal}x kubejs:liquid_aureal`)
            .fluidIn(`${item.souls}x kubejs:liquid_souls`)
            .fluidIn(`${item.blood}x evilcraft:blood`)
            .fluidIn(`${item.xp}x #c:experience`)
            .itemIn('forbidden_arcanus:mundabitur_dust')
            .itemIn(item.main)
            .itemIn('enderio:z_logic_controller')
            .itemIn(item.secondary)
            .itemIn('forbidden_arcanus:polished_darkstone')
            .itemIn(item.secondary)
            .itemIn('enderio:z_logic_controller')
            .itemIn('forbidden_arcanus:quantum_injector')
            .itemIn('forbidden_arcanus:mundabitur_dust')
            .itemOut(item.id)
    }

    let runic_parts = [
        {
            id: 'modern_industrialization:runic_item_input_hatch',
            aureal: 2500,
            blood: 1000,
            souls: 5000,
            xp: 5000,
            top: 'actuallyadditions:laser_relay_item',
            bottom: 'forbidden_arcanus:quantum_injector',
            middle: 'forbidden_arcanus:polished_darkstone'
        },
        {
            id: 'modern_industrialization:runic_item_output_hatch',
            aureal: 2500,
            blood: 1000,
            souls: 5000,
            xp: 5000,
            top: 'forbidden_arcanus:quantum_injector',
            bottom: 'actuallyadditions:laser_relay_item',
            middle: 'forbidden_arcanus:chiseled_polished_darkstone'
        },
        {
            id: 'modern_industrialization:runic_fluid_input_hatch',
            aureal: 2500,
            blood: 1000,
            souls: 5000,
            xp: 5000,
            top: 'actuallyadditions:laser_relay_fluids',
            bottom: 'forbidden_arcanus:quantum_injector',
            middle: 'forbidden_arcanus:polished_darkstone'
        },
        {
            id: 'modern_industrialization:runic_fluid_output_hatch',
            aureal: 2500,
            blood: 1000,
            souls: 5000,
            xp: 5000,
            top: 'forbidden_arcanus:quantum_injector',
            bottom: 'actuallyadditions:laser_relay_fluids',
            middle: 'forbidden_arcanus:chiseled_polished_darkstone'
        },
        {
            id: 'modern_industrialization:runic_energy_input_hatch',
            aureal: 2500,
            blood: 1000,
            souls: 5000,
            xp: 5000,
            top: 'actuallyadditions:laser_relay',
            bottom: 'forbidden_arcanus:quantum_injector',
            middle: 'forbidden_arcanus:polished_darkstone'
        }
    ]

    for (let item of runic_parts) {
        allthemods.recipes.modern_industrialization.auto_forge(512, 150)
            .fluidIn(`${item.aureal}x kubejs:liquid_aureal`)
            .fluidIn(`${item.souls}x kubejs:liquid_souls`)
            .fluidIn(`${item.blood}x evilcraft:blood`)
            .fluidIn(`${item.xp}x #c:experience`)
            .itemIn('forbidden_arcanus:mundabitur_dust')
            .itemIn(item.top)
            .itemIn('mekanism:ultimate_control_circuit')
            .itemIn('alltheores:enderium_gear')
            .itemIn(item.middle)
            .itemIn('alltheores:enderium_gear')
            .itemIn('mekanism:ultimate_control_circuit')
            .itemIn(item.bottom)
            .itemIn('forbidden_arcanus:mundabitur_dust')
            .itemOut(item.id)
    }

    allthemods.recipes.modern_industrialization.auto_forge(512, 300)
        .fluidIn(`5000x kubejs:liquid_aureal`)
        .fluidIn(`2500x kubejs:liquid_souls`)
        .fluidIn(`7500x evilcraft:blood`)
        .fluidIn(`10000x #c:experience`)
        .itemIn('mekanism:ultimate_control_circuit')
        .itemIn('enderio:sentient_ender')
        .itemIn('enderio:z_logic_controller')
        .itemIn('alltheores:enderium_gear')
        .itemIn('forbidden_arcanus:arcane_crystal')
        .itemIn('alltheores:enderium_gear')
        .itemIn('enderio:z_logic_controller')
        .itemIn('forbidden_arcanus:mundabitur_dust')
        .itemIn('mekanism:ultimate_control_circuit')
        .itemOut(`forbidden_arcanus:corrupted_arcane_crystal`)

    allthemods.remove({id: 'forbidden_arcanus:corrupted_arcane_crystal_block_from_corrupted_arcane_crystal'})
    allthemods.remove({id: 'forbidden_arcanus:corrupted_arcane_crystal_from_corrupted_arcane_crystal_block'})
})

ServerEvents.generateData('after_mods', allthemods => {
    let heph_recipes = [
        //auto forge
        {
            id: 'auto_forge',
            input: 'forbidden_arcanus:polished_darkstone',
            result: 'modern_industrialization:auto_forge',
            aureal: 5000,
            blood: 5000,
            souls: 100,
            xp: 2500,
            in_1: 'forbidden_arcanus:hephaestus_forge_tier_5',
            in_2: 'enderio:z_logic_controller',
            in_3: 'alltheores:enderium_gear',
            in_4: 'forbidden_arcanus:mundabitur_dust',
            in_5: 'forbidden_arcanus:quantum_injector',
            in_6: 'enderio:z_logic_controller',
            in_7: 'alltheores:enderium_gear',
            in_8: 'forbidden_arcanus:mundabitur_dust'
        },
        //runic crucible
        {
            id: 'runic_crucible',
            input: 'forbidden_arcanus:polished_darkstone',
            result: 'modern_industrialization:runic_crucible',
            aureal: 10000,
            blood: 2500,
            souls: 100,
            xp: 1000,
            in_1: 'ars_nouveau:enchanting_apparatus',
            in_2: 'enderio:z_logic_controller',
            in_3: 'ars_nouveau:arcane_core',
            in_4: 'forbidden_arcanus:mundabitur_dust',
            in_5: 'forbidden_arcanus:quantum_injector',
            in_6: 'enderio:z_logic_controller',
            in_7: 'ars_nouveau:arcane_core',
            in_8: 'forbidden_arcanus:mundabitur_dust'
        },
        //runic enchanter
        {
            id: 'runic_enchanter',
            input: 'forbidden_arcanus:polished_darkstone',
            result: 'modern_industrialization:runic_enchanter',
            aureal: 10000,
            blood: 100,
            souls: 100,
            xp: 5000,
            in_1: 'minecraft:enchanting_table',
            in_2: 'enderio:z_logic_controller',
            in_3: 'apothic_enchanting:treasure_shelf',
            in_4: 'forbidden_arcanus:mundabitur_dust',
            in_5: 'forbidden_arcanus:quantum_injector',
            in_6: 'enderio:z_logic_controller',
            in_7: 'apothic_enchanting:treasure_shelf',
            in_8: 'forbidden_arcanus:mundabitur_dust'
        },
        //item input
        {
            id: 'item_in',
            input: 'forbidden_arcanus:polished_darkstone',
            result: 'modern_industrialization:runic_item_input_hatch',
            aureal: 250,
            blood: 100,
            souls: 500,
            xp: 500,
            in_1: 'actuallyadditions:laser_relay_item',
            in_2: 'mekanism:ultimate_control_circuit',
            in_3: 'alltheores:enderium_gear',
            in_4: 'forbidden_arcanus:mundabitur_dust',
            in_5: 'forbidden_arcanus:quantum_injector',
            in_6: 'mekanism:ultimate_control_circuit',
            in_7: 'alltheores:enderium_gear',
            in_8: 'forbidden_arcanus:mundabitur_dust'
        },
        //item output
        {
            id: 'item_output',
            input: 'forbidden_arcanus:chiseled_polished_darkstone',
            result: 'modern_industrialization:runic_item_output_hatch',
            aureal: 250,
            blood: 100,
            souls: 500,
            xp: 500,
            in_1: 'forbidden_arcanus:quantum_injector',
            in_2: 'mekanism:ultimate_control_circuit',
            in_3: 'alltheores:enderium_gear',
            in_4: 'forbidden_arcanus:mundabitur_dust',
            in_5: 'actuallyadditions:laser_relay_item',
            in_6: 'mekanism:ultimate_control_circuit',
            in_7: 'alltheores:enderium_gear',
            in_8: 'forbidden_arcanus:mundabitur_dust'
        },
        //fluid input
        {
            id: 'fluid_input',
            input: 'forbidden_arcanus:polished_darkstone',
            result: 'modern_industrialization:runic_fluid_input_hatch',
            aureal: 250,
            blood: 100,
            souls: 500,
            xp: 500,
            in_1: 'actuallyadditions:laser_relay_fluids',
            in_2: 'mekanism:ultimate_control_circuit',
            in_3: 'alltheores:enderium_gear',
            in_4: 'forbidden_arcanus:mundabitur_dust',
            in_5: 'forbidden_arcanus:quantum_injector',
            in_6: 'mekanism:ultimate_control_circuit',
            in_7: 'alltheores:enderium_gear',
            in_8: 'forbidden_arcanus:mundabitur_dust'
        },
        //fluid output
        {
            id: 'fluid_output',
            input: 'forbidden_arcanus:chiseled_polished_darkstone',
            result: 'modern_industrialization:runic_fluid_output_hatch',
            aureal: 250,
            blood: 100,
            souls: 500,
            xp: 500,
            in_1: 'forbidden_arcanus:quantum_injector',
            in_2: 'mekanism:ultimate_control_circuit',
            in_3: 'alltheores:enderium_gear',
            in_4: 'forbidden_arcanus:mundabitur_dust',
            in_5: 'actuallyadditions:laser_relay_fluids',
            in_6: 'mekanism:ultimate_control_circuit',
            in_7: 'alltheores:enderium_gear',
            in_8: 'forbidden_arcanus:mundabitur_dust'
        },
        //energy input
        {
            id: 'energy_input',
            input: 'forbidden_arcanus:polished_darkstone',
            result: 'modern_industrialization:runic_energy_input_hatch',
            aureal: 250,
            blood: 100,
            souls: 500,
            xp: 500,
            in_1: 'actuallyadditions:laser_relay',
            in_2: 'mekanism:ultimate_control_circuit',
            in_3: 'alltheores:enderium_gear',
            in_4: 'forbidden_arcanus:mundabitur_dust',
            in_5: 'forbidden_arcanus:quantum_injector',
            in_6: 'mekanism:ultimate_control_circuit',
            in_7: 'alltheores:enderium_gear',
            in_8: 'forbidden_arcanus:mundabitur_dust'
        }
    ]

    for (let item of heph_recipes) {
        allthemods.json(`atm:forbidden_arcanus/hephaestus_forge/ritual/mi_${item.id}.json`,
            {
                enhancers: [
                    'forbidden_arcanus:artisan_relic',
                    'forbidden_arcanus:elementarium',
                    'forbidden_arcanus:divine_pact'
                ],
                essences: {
                    aureal: item.aureal,
                    blood: item.blood,
                    souls: item.souls,
                    experience: item.xp
                },
                forge_tier: 5,
                inputs: [
                    { amount: 1, ingredient: Ingredient.of(item.in_1).toJson() },
                    { amount: 1, ingredient: Ingredient.of(item.in_2).toJson() },
                    { amount: 1, ingredient: Ingredient.of(item.in_3).toJson() },
                    { amount: 1, ingredient: Ingredient.of(item.in_4).toJson() },
                    { amount: 1, ingredient: Ingredient.of(item.in_5).toJson() },
                    { amount: 1, ingredient: Ingredient.of(item.in_6).toJson() },
                    { amount: 1, ingredient: Ingredient.of(item.in_7).toJson() },
                    { amount: 1, ingredient: Ingredient.of(item.in_8).toJson() }
                ],
                magic_circle: 'forbidden_arcanus:create_item',
                main_ingredient: {
                    item: item.input
                },
                result: {
                    type: 'forbidden_arcanus:create_item',
                    result_item: Item.of(`${item.result}`).toJson()
                }
            }
        )
    }

    allthemods.json(`atm:forbidden_arcanus/hephaestus_forge/ritual/mi_star_altar.json`,
        {
            enhancers: [
                'forbidden_arcanus:artisan_relic',
                'forbidden_arcanus:elementarium',
                'forbidden_arcanus:divine_pact',
                'forbidden_arcanus:maledictus_pact'
            ],
            essences: {
                aureal: 5000,
                blood: 5000,
                souls: 100,
                experience: 2500
            },
            forge_tier: 5,
            inputs: [
                { amount: 1, ingredient: Ingredient.of('eternal_starlight:loot_bag[eternal_starlight:loot_table="eternal_starlight:bosses/lunar_monstrosity"]').toJson() },
                { amount: 1, ingredient: Ingredient.of('enderio:z_logic_controller').toJson() },
                { amount: 1, ingredient: Ingredient.of('alltheores:enderium_gear').toJson() },
                { amount: 1, ingredient: Ingredient.of('forbidden_arcanus:mundabitur_dust').toJson() },
                { amount: 1, ingredient: Ingredient.of('forbidden_arcanus:quantum_injector').toJson() },
                { amount: 1, ingredient: Ingredient.of('enderio:z_logic_controller').toJson() },
                { amount: 1, ingredient: Ingredient.of('alltheores:enderium_gear').toJson() },
                { amount: 1, ingredient: Ingredient.of('forbidden_arcanus:mundabitur_dust').toJson() }
            ],
            magic_circle: 'forbidden_arcanus:create_item',
            main_ingredient: {
                item: 'forbidden_arcanus:polished_darkstone'
            },
            result: {
                type: 'forbidden_arcanus:create_item',
                result_item: Item.of('modern_industrialization:star_altar').toJson()
            }
        }
    )

    allthemods.json(`atm:forbidden_arcanus/hephaestus_forge/ritual/mi_runic_crystal.json`,
        {
            enhancers: [
                'forbidden_arcanus:artisan_relic',
                'forbidden_arcanus:elementarium',
                'forbidden_arcanus:divine_pact'
            ],
            essences: {
                aureal: 500,
                blood: 750,
                souls: 100,
                experience: 1000
            },
            forge_tier: 5,
            inputs: [
                { amount: 1, ingredient: Ingredient.of('enderio:sentient_ender').toJson() },
                { amount: 1, ingredient: Ingredient.of('enderio:z_logic_controller').toJson() },
                { amount: 1, ingredient: Ingredient.of('alltheores:enderium_gear').toJson() },
                { amount: 1, ingredient: Ingredient.of('mekanism:ultimate_control_circuit').toJson() },
                { amount: 1, ingredient: Ingredient.of('forbidden_arcanus:mundabitur_dust').toJson() },
                { amount: 1, ingredient: Ingredient.of('enderio:z_logic_controller').toJson() },
                { amount: 1, ingredient: Ingredient.of('alltheores:enderium_gear').toJson() },
                { amount: 1, ingredient: Ingredient.of('mekanism:ultimate_control_circuit').toJson() }
            ],
            magic_circle: 'forbidden_arcanus:create_item',
            main_ingredient: {
                item: 'forbidden_arcanus:arcane_crystal'
            },
            result: {
                type: 'forbidden_arcanus:create_item',
                result_item: Item.of(`forbidden_arcanus:corrupted_arcane_crystal`).toJson()
            }
        }
    )
})