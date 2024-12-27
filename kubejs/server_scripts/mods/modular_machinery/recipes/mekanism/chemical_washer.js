// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {

    let multiplier = 1000
    let energy = 256

    const recipes = {
        'alltheores:dirty_aluminum' : 'alltheores:clean_aluminum',
        'alltheores:dirty_lead' : 'alltheores:clean_lead',
        'alltheores:dirty_osmium' : 'alltheores:clean_osmium',
        'alltheores:dirty_nickel' : 'alltheores:clean_nickel',
        'alltheores:dirty_platinum' : 'alltheores:clean_platinum',
        'alltheores:dirty_silver' : 'alltheores:clean_silver',
        'alltheores:dirty_tin' : 'alltheores:clean_tin',
        'alltheores:dirty_uranium' : 'alltheores:clean_uranium',
        'alltheores:dirty_zinc' : 'alltheores:clean_zinc',
        'alltheores:dirty_iridium' : 'alltheores:clean_iridium',
        'alltheores:dirty_copper' : 'alltheores:clean_copper',
        'alltheores:dirty_iron' : 'alltheores:clean_iron',
        'alltheores:dirty_gold' : 'alltheores:clean_gold',
        'allthemodium:dirty_allthemodium' : 'allthemodium:clean_allthemodium',
        'allthemodium:dirty_vibranium' : 'allthemodium:clean_vibranium',
        'allthemodium:dirty_unobtainium' : 'allthemodium:clean_unobtainium',
        'kubejs:dirty_crimson_iron' : 'kubejs:clean_crimson_iron',
        'kubejs:dirty_azure_silver' : 'kubejs:clean_azure_silver',
    }

    for (const [input, output] of Object.entries(recipes)) {
        allthemods.recipes.modular_machinery_reborn.machine_recipe('atm:chemical_washer', 5)
            .requireEnergy(multiplier * energy, 8, 8)
            .requireChemical(`${multiplier}x ${input}`, 31, 17)
            .requireFluid(`${5 * multiplier}x minecraft:water`, 31, 36)
            .progressX(64)
            .progressY(26)
            .produceChemical(`${0.8 * multiplier}x ${output}`, 100, 26)
            .progressX(62)
            .width(126)
            .height(84)
    }
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.