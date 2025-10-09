// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {

    let multiplier = 16
    let energy = 2048

    const recipes = {
        'aluminum' : 'alltheores:dirty_aluminum',
        'lead' : 'alltheores:dirty_lead',
        'osmium' : 'alltheores:dirty_osmium',
        'nickel' : 'alltheores:dirty_nickel',
        'platinum' : 'alltheores:dirty_platinum',
        'silver' : 'alltheores:dirty_silver',
        'tin' : 'alltheores:dirty_tin',
        'uranium' : 'alltheores:dirty_uranium',
        'zinc' : 'alltheores:dirty_zinc',
        'iridium' : 'alltheores:dirty_iridium',
        'copper' : 'alltheores:dirty_copper',
        'iron' : 'alltheores:dirty_iron',
        'gold' : 'alltheores:dirty_gold',
        'allthemodium' : 'allthemodium:dirty_allthemodium',
        'vibranium' : 'allthemodium:dirty_vibranium',
        'unobtainium' : 'allthemodium:dirty_unobtainium',
        'crimson_iron' : 'kubejs:dirty_crimson_iron',
        'azure_silver' : 'kubejs:dirty_azure_silver',
    }

    for (const [input, output] of Object.entries(recipes)) {
        allthemods.recipes.modular_machinery_reborn.machine_recipe('atm:chemical_dissolution_chamber', 10)
            .requireEnergy(multiplier * energy, 8, 8)
            .requireItem(`${multiplier}x #c:ores/${input}`, 31, 17)
            .requireChemical(`${100 * multiplier}x mekanism:sulfuric_acid`, 31, 36)
            .progressX(64)
            .progressY(26)
            .produceChemical(`${1000 * multiplier}x ${output}`, 100, 26)
            .progressX(62)
            .width(126)
            .height(84)

        allthemods.recipes.modular_machinery_reborn.machine_recipe('atm:chemical_dissolution_chamber', 5)
            .requireEnergy(multiplier * energy, 8, 8)
            .requireItem(`${3 * multiplier}x #c:raw_materials/${input}`, 31, 17)
            .requireChemical(`${100 * multiplier}x mekanism:sulfuric_acid`, 31, 36)
            .progressX(64)
            .progressY(26)
            .produceChemical(`${2000 * multiplier}x ${output}`, 100, 26)
            .progressX(62)
            .width(126)
            .height(84)

        allthemods.recipes.modular_machinery_reborn.machine_recipe('atm:chemical_dissolution_chamber', 5)
            .requireEnergy(multiplier * energy, 8, 8)
            .requireItem(`${multiplier}x #c:storage_blocks/raw_${input}`, 31, 17)
            .requireChemical(`${200 * multiplier}x mekanism:sulfuric_acid`, 31, 36)
            .progressX(64)
            .progressY(26)
            .produceChemical(`${6000 * multiplier}x ${output}`, 100, 26)
            .progressX(62)
            .width(126)
            .height(84)
    }
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.