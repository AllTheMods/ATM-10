// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
    // AE2 processors
    const ae2Recipes = [
        {
            circuit: { mod: 'ae2', item: 'printed_calculation_processor' },
            processor: { mod: 'ae2', item: 'calculation_processor' }
        },
        {
            circuit: { mod: 'ae2', item: 'printed_logic_processor' },
            processor: { mod: 'ae2', item: 'logic_processor' }
        },
        {
            circuit: { mod: 'ae2', item: 'printed_engineering_processor' },
            processor: { mod: 'ae2', item: 'engineering_processor' }
        },
        {
            circuit: { mod: 'advanced_ae', item: 'printed_quantum_processor' },
            processor: { mod: 'advanced_ae', item: 'quantum_processor' }
        },
        {
            circuit: { mod: 'appflux', item: 'printed_energy_processor' },
            processor: { mod: 'appflux', item: 'energy_processor' }
        },
        {
            circuit: { mod: 'extendedae', item: 'concurrent_processor_print' },
            processor: { mod: 'extendedae', item: 'concurrent_processor' },
        },
        {
            circuit: { mod: 'megacells', item: 'printed_accumulation_processor' },
            processor: { mod: 'megacells', item: 'accumulation_processor' }
        }
    ];

    ae2Recipes.forEach(recipe => {
        allthemods.custom({
            type: 'create:sequenced_assembly',
            ingredient: { item: `${recipe.circuit.mod}:${recipe.circuit.item}` },
            sequence: [
                {
                    type: 'create:deploying',
                    ingredients: [
                        { item: `${recipe.circuit.mod}:${recipe.circuit.item}` },
                        { tag: 'c:dusts/redstone' }
                    ],
                    results: [{ id: `${recipe.circuit.mod}:${recipe.circuit.item}` }]
                },
                {
                    type: 'create:deploying',
                    ingredients: [
                        { item: `${recipe.circuit.mod}:${recipe.circuit.item}` },
                        { item: 'ae2:printed_silicon' }
                    ],
                    results: [{ id: `${recipe.circuit.mod}:${recipe.circuit.item}` }]
                }
            ],
            results: [{ id: `${recipe.processor.mod}:${recipe.processor.item}` }],
            loops: 1,
            transitional_item: { id: `${recipe.circuit.mod}:${recipe.circuit.item}` }
        }).id(`allthemods:create/sequenced_assembly/${recipe.processor.item}`);
    });
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
