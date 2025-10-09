// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {

    let multiplier = 32
    let energy = 1024

    const recipes = {
        'productivebees:configurable_honeycomb[productivebees:bee_type="productivebees:wasted_radioactive"]' : ['mekanism:nuclear_waste', 50],
        'mekanism:enriched_refined_obsidian' : ['mekanism:refined_obsidian', 80],
        '#c:dusts/charcoal' : ['mekanism:carbon', 20],
        '#c:dusts/salt' : ['mekanism:brine', 15],
        'mekanism:yellow_cake_uranium' : ['mekanism:uranium_oxide', 250],
        '#c:dusts/lithium' : ['mekanism:lithium', 100],
        '#c:storage_blocks/coal' : ['mekanism:carbon', 90],
        'productivebees:configurable_honeycomb[productivebees:bee_type="productivebees:lithium"]' : ['mekanism:lithium', 10],
        '#c:dusts/sulfur' : ['mekanism:sulfur_dioxide', 100],
        '#c:fuels/bio' : ['mekanism:bio', 5],
        '#c:dusts/refined_obsidian' : ['mekanism:refined_obsidian', 10],
        'productivebees:configurable_comb[productivebees:bee_type="productivebees:wasted_radioactive"]' : ['mekanism:nuclear_waste', 200],
        'productivebees:configurable_comb[productivebees:bee_type="productivebees:lithium"]' : ['mekanism:lithium', 100],
        '#c:pellets/antimatter' : ['mekanism:antimatter', 1000],
        '#c:storage_blocks/charcoal' : ['mekanism:carbon', 180],
        'mekanism:reprocessed_fissile_fragment' : ['mekanism:fissile_fuel', 2000],
        '#c:storage_blocks/redstone' : ['mekanism:redstone', 90],
        'mekanism:enriched_carbon' : ['mekanism:carbon', 80],
        '#c:dusts/gold' : ['mekanism:gold', 10],
        '#c:dusts/diamond' : ['mekanism:diamond', 10],
        '#c:fuels/block/bio' : ['mekanism:bio', 45],
        '#c:dusts/coal' : ['mekanism:carbon', 10],
        '#c:dusts/redstone' : ['mekanism:redstone', 10],
        'mekanism:enriched_diamond' : ['mekanism:diamond', 80],
        'mekanism:enriched_tin' : ['mekanism:tin', 80],
        '#c:dusts/tin' : ['mekanism:tin', 10],
        'mekanism:enriched_gold' : ['mekanism:gold', 80],
        '#c:mushrooms' : ['mekanism:fungi', 10],
        'mekanism:enriched_redstone' : ['mekanism:redstone', 80],
    }

    for (const [input, [output, value]] of Object.entries(recipes)) {
        allthemods.recipes.modular_machinery_reborn.machine_recipe('atm:chemical_oxidizer', 10)
            .requireEnergy(multiplier * energy, 8, 8)
            .requireItem(`${multiplier}x ${input}`, 31, 26)
            .progressX(64)
            .progressY(26)
            .produceChemical(`${value * multiplier}x ${output}`, 100, 26)
            .width(126)
            .height(84)
    }

})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.