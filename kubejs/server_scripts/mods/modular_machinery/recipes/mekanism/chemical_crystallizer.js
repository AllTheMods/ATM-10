// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {

    let multiplier = 32
    let energy = 1024
    const crystalAmount = 200;

    const recipes = {
        'alltheores:clean_aluminum' : [crystalAmount, 'alltheores:aluminum_crystal'],
        'alltheores:clean_lead' : [crystalAmount, 'alltheores:lead_crystal'],
        'alltheores:clean_osmium' : [crystalAmount, 'alltheores:osmium_crystal'],
        'alltheores:clean_nickel' : [crystalAmount, 'alltheores:nickel_crystal'],
        'alltheores:clean_platinum' : [crystalAmount, 'alltheores:platinum_crystal'],
        'alltheores:clean_silver' : [crystalAmount, 'alltheores:silver_crystal'],
        'alltheores:clean_tin' : [crystalAmount, 'alltheores:tin_crystal'],
        'alltheores:clean_uranium' : [crystalAmount, 'alltheores:uranium_crystal'],
        'alltheores:clean_zinc' : [crystalAmount, 'alltheores:zinc_crystal'],
        'alltheores:clean_iridium' : [crystalAmount, 'alltheores:iridium_crystal'],
        'alltheores:clean_copper' : [crystalAmount, 'alltheores:copper_crystal'],
        'alltheores:clean_iron' : [crystalAmount, 'alltheores:iron_crystal'],
        'alltheores:clean_gold' : [crystalAmount, 'alltheores:gold_crystal'],
        'allthemodium:clean_allthemodium' : [crystalAmount, 'allthemodium:allthemodium_crystal'],
        'allthemodium:clean_vibranium' : [crystalAmount, 'allthemodium:vibranium_crystal'],
        'allthemodium:clean_unobtainium' : [crystalAmount, 'allthemodium:unobtainium_crystal'],
        'kubejs:clean_crimson_iron' : [crystalAmount, 'kubejs:crimson_iron_crystal'],
        'kubejs:clean_azure_silver' : [crystalAmount, 'kubejs:azure_silver_crystal'],
        'mekanism:lithium' : [100, 'mekanism:dust_lithium'],
        'mekanism:brine' : [15, 'alltheores:salt'],
        'mekanism:antimatter' : [1000, 'mekanism:pellet_antimatter'],
    }

    for (const [input, [amount,output]] of Object.entries(recipes)) {
        allthemods.recipes.modular_machinery_reborn.machine_recipe('atm:chemical_crystallizer', 20)
            .requireEnergy(multiplier * energy, 8, 8)
            .requireChemical(`${amount * multiplier}x ${input}`, 31, 26)
            .progressX(64)
            .progressY(26)
            .produceItem(`${multiplier}x ${output}`, 100, 26)
            .width(126)
            .height(84)
    }


})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.