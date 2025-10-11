// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
    // Rebalance of 'machine addon extender'
    allthemods.remove({id: 'oritech:crafting/core3alt'})
    allthemods.remove({id: 'oritech:crafting/core3'})
    allthemods.shaped(
        Item.of('oritech:machine_core_3', 1),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'oritech:carbon_fibre_strands',
            B: 'oritech:fluxite_block'
        }
    )

    // allthemods.remove({output: 'oritech:machine_extender'})
    allthemods.shaped(
        Item.of('oritech:machine_extender', 1),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'oritech:carbon_plating_block',
            B: 'oritech:machine_core_3'
        }
    )
    // Oil compatibility
    allthemods.remove({id: 'oritech:refinery/oilalt'})
    allthemods.remove({id: 'oritech:refinery/oilbase'})

    allthemods.custom({
        "type": "oritech:refinery",
        "fluidInput": {
            "amount": 1000,
            "fluid": "#c:crude_oil"
        },
        "fluidOutputs": [
            {
                "amount": 500,
                "fluid": "oritech:still_heavy_oil"
            },
            {
                "amount": 250,
                "fluid": "oritech:still_naphtha"
            },
            {
                "amount": 250,
                "fluid": "oritech:still_sulfuric_acid"
            }
        ],
        "ingredients": [],
        "results": [],
        "time": 120
    })
    allthemods.custom({
        "type": "oritech:refinery",
        "fluidInput": {
            "amount": 1000,
            "fluid": "#c:crude_oil"
        },
        "fluidOutputs": [
            {
                "amount": 500,
                "fluid": "oritech:still_diesel"
            },
            {
                "amount": 500,
                "fluid": "oritech:still_naphtha"
            },
            {
                "amount": 500,
                "fluid": "oritech:still_sulfuric_acid"
            }
        ],
        "ingredients": [
            {
                "item": "oritech:clay_catalyst_beads"
            }
        ],
        "results": [],
        "time": 120
    })

    // Remove enchanting stuff
    allthemods.remove({id: 'oritech:crafting/catalyst_alt'})
    allthemods.remove({id: 'oritech:crafting/catalyst'})
    allthemods.remove({id: 'oritech:crafting/enchanter'})

    // Cheaty alloys
    allthemods.remove({id: 'oritech:crafting/alloy/steel'})
    allthemods.remove({id: 'oritech:crafting/alloy/electrum'})

    // AE2 processors and circuits
    const ae2Recipes = [
        {
            baseIngredient: { tag: 'c:silicon' },
            circuit: { mod: 'ae2', item: 'printed_silicon' },
            processor: null,
        },
        {
            baseIngredient: { tag: 'c:gems/certus_quartz' },
            circuit: { mod: 'ae2', item: 'printed_calculation_processor' },
            processor: { mod: 'ae2', item: 'calculation_processor' }
        },
        {
            baseIngredient: { tag: 'c:ingots/gold' },
            circuit: { mod: 'ae2', item: 'printed_logic_processor' },
            processor: { mod: 'ae2', item: 'logic_processor' }
        },
        {
            baseIngredient: { tag: 'c:gems/diamond' },
            circuit: { mod: 'ae2', item: 'printed_engineering_processor' },
            processor: { mod: 'ae2', item: 'engineering_processor' }
        },
        {
            baseIngredient: { item: 'advanced_ae:quantum_alloy' },
            circuit: { mod: 'advanced_ae', item: 'printed_quantum_processor' },
            processor: { mod: 'advanced_ae', item: 'quantum_processor' }
        },
        {
            baseIngredient: { tag: 'c:gems/charged_redstone' },
            circuit: { mod: 'appflux', item: 'printed_energy_processor' },
            processor: { mod: 'appflux', item: 'energy_processor' }
        },
        {
            baseIngredient: { tag: 'c:gems/entro' },
            circuit: { mod: 'extendedae', item: 'concurrent_processor_print' },
            processor: { mod: 'extendedae', item: 'concurrent_processor' },
        },
        {
            baseIngredient: { tag: 'c:ingots/sky_steel' },
            circuit: { mod: 'megacells', item: 'printed_accumulation_processor' },
            processor: { mod: 'megacells', item: 'accumulation_processor' }
        }
    ];

    ae2Recipes.forEach(recipe => {
        allthemods.custom({
            type: 'oritech:atomic_forge',
            ingredients: [ recipe.baseIngredient ],
            results: [{ id: `${recipe.circuit.mod}:${recipe.circuit.item}`, count: 1 }],
            time: 5
        }).id(`allthemods:oritech/atomic_forge/${recipe.circuit.item}`);

        allthemods.custom({
            type: 'oritech:assembler',
            ingredients: [ recipe.baseIngredient ],
            results: [{ id: `${recipe.circuit.mod}:${recipe.circuit.item}`, count: 1 }],
            time: 160
        }).id(`allthemods:oritech/assembler/${recipe.circuit.item}`);

        if (recipe.processor) {
            allthemods.custom({
                type: 'oritech:atomic_forge',
                ingredients: [
                    { tag: 'c:dusts/redstone' },
                    { item: `${recipe.circuit.mod}:${recipe.circuit.item}` },
                    { item: 'ae2:printed_silicon' }
                ],
                results: [{ id: `${recipe.processor.mod}:${recipe.processor.item}` }],
                time: 5
            }).id(`allthemods:oritech/atomic_forge/${recipe.processor.item}`);

            allthemods.custom({
                type: 'oritech:assembler',
                ingredients: [
                    { tag: 'c:dusts/redstone' },
                    { item: `${recipe.circuit.mod}:${recipe.circuit.item}` },
                    { item: 'ae2:printed_silicon' }
                ],
                results: [{ id: `${recipe.processor.mod}:${recipe.processor.item}` }],
                time: 5
            }).id(`allthemods:oritech/assembler/${recipe.processor.item}`);
        }
    });
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
