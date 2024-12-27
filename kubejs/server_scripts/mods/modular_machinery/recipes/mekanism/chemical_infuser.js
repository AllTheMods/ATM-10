// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {

    let multiplier = 1024
    let energy = 512

    const recipes = {
        'mekanismgenerators:fusion_fuel': [2, ['mekanismgenerators:deuterium', 1], ['mekanismgenerators:tritium', 1]],
        'mekanism:sulfuric_acid': [1, ['mekanism:sulfur_trioxide', 1], ['mekanism:water_vapor', 1]],
        'mekanism:hydrogen_chloride': [2, ['mekanism:hydrogen', 1], ['mekanism:chlorine', 2]],
        'mekanism:sulfur_trioxide': [1, ['mekanism:oxygen', 1], ['mekanism:sulfur_dioxide', 1]],
        'mekanism:uranium_hexafluoride': [2, ['mekanism:hydrofluoric_acid', 1], ['mekanism:uranium_oxide', 1]],
    }

    for (const [output, [amount, [input1, amount1], [input2, amount2]]] of Object.entries(recipes)) {
        allthemods.recipes.modular_machinery_reborn.machine_recipe('atm:chemical_infuser', 5)
            .requireEnergy(multiplier * energy, 8, 8)
            .requireChemical(`${amount1 * multiplier}x ${input1}`, 31, 17)
            .requireChemical(`${amount2 * multiplier}x ${input2}`, 31, 36)
            .progressX(64)
            .progressY(26)
            .produceChemical(`${amount * multiplier}x ${output}`, 100, 26)
            .width(126)
            .height(84)
    }

})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.