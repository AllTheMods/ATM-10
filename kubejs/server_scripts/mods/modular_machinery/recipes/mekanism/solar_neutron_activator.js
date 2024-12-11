// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {

    let multiplier = 4096

    const recipes = {
        'mekanism:nuclear_waste': [5, ['mekanism:polonium', 1]],
        'mekanism:lithium': [1, ['mekanismgenerators:tritium', 1]],
    }

    for (const [input, [inamount, [output, outamount]]] of Object.entries(recipes)) {
        allthemods.recipes.modular_machinery_reborn.machine_recipe('atm:solar_neutron_activator', 5)
            .time('[0,12000]', 8, 8)
            .requireChemical(`${inamount * multiplier}x ${input}`, 31, 8)
            .progressX(64)
            .produceChemical(`${outamount * multiplier}x ${output}`, 100, 8)
            .width(126)
            .height(44)
    }

})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.