// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {

    let multiplier = 32
    let energy = 1024

    const recipes = {
        'polonium_pellets' : {
            input: ['#c:dusts/fluorite', 1],
            fluid: ['minecraft:water', 1000],
            chemical: ['mekanism:polonium', 1000],
            output: ['mekanism:pellet_polonium', 1],
            byproduct: ['mekanism:spent_nuclear_waste', 1000]
        },
        'plutonium_pellets' : {
            input: ['#c:dusts/fluorite', 1],
            fluid: ['minecraft:water', 1000],
            chemical: ['mekanism:plutonium', 1000],
            output: ['mekanism:pellet_plutonium', 1],
            byproduct: ['mekanism:spent_nuclear_waste', 1000]
        },
        'sulfur_1' : {
            input: ['#c:dusts/coal', 1],
            fluid: ['minecraft:water', 100],
            chemical: ['mekanism:oxygen', 100],
            output: ['alltheores:sulfur', 1],
            byproduct: ['mekanism:hydrogen', 100]
        },
        'sulfur_2' : {
            input: ['#minecraft:coals', 1],
            fluid: ['minecraft:water', 100],
            chemical: ['mekanism:oxygen', 100],
            output: ['alltheores:sulfur', 1],
            byproduct: ['mekanism:hydrogen', 100]
        },
        'substrate_ethene' : {
            input: ['mekanism:bio_fuel', 2],
            fluid: ['minecraft:water', 10],
            chemical: ['mekanism:hydrogen', 100],
            output: ['mekanism:substrate', 1],
            byproduct: ['mekanism:ethene', 100]
        },
    }

    Object.entries(recipes).forEach(([key, values]) => {
        if (values.output && values.byproduct) {
            allthemods.recipes.modular_machinery_reborn.machine_recipe('atm:pressurized_reaction_chamber', 100)
                .requireEnergy(multiplier * energy, 8, 9)
                .requireItem(`${values.input[1] * multiplier}x ${values.input[0]}`, 31, 8)
                .requireFluid(`${values.fluid[1] * multiplier}x ${values.fluid[0]}`, 31, 27)
                .requireChemical(`${values.chemical[1] * multiplier}x ${values.chemical[0]}`, 31, 46)
                .progressX(64)
                .progressY(26)
                .produceItem(`${values.output[1] * multiplier}x ${values.output[0]}`, 100, 17)
                .produceChemical(`${values.byproduct[1] * multiplier}x ${values.byproduct[0]}`, 100, 36)
                .width(126)
                .height(84)
        }
    })

    let noByproduct = {
        'mekanism:substrate' : {
            amount : 1,
            fluid: ['mekanism:ethene', 50],
            chemical: ['mekanism:oxygen', 10],
            output: ['mekanism:hdpe_pellet', 1],
            byproduct: null
        }
    }

    Object.entries(noByproduct).forEach(([key, values]) => {
        allthemods.recipes.modular_machinery_reborn.machine_recipe('atm:pressurized_reaction_chamber', 100)
            .requireEnergy(multiplier * energy, 8, 9)
            .requireItem(`${values.amount * multiplier}x ${key}`, 31, 8)
            .requireFluid(`${values.fluid[1] * multiplier}x ${values.fluid[0]}`, 31, 27)
            .requireChemical(`${values.chemical[1] * multiplier}x ${values.chemical[0]}`, 31, 46)
            .progressX(64)
            .progressY(26)
            .produceItem(`${values.output[1] * multiplier}x ${values.output[0]}`, 100, 26)
            .width(126)
            .height(84)
    })

    let noOutput = {
        '#minecraft:wooden_stairs' : {
            amount : 1,
            fluid: ['minecraft:water', 15],
            chemical: ['mekanism:oxygen', 15],
            output: null,
            byproduct: ['mekanism:hydrogen', 15]
        },
        '#minecraft:wooden_slabs' : {
            amount : 1,
            fluid: ['minecraft:water', 10],
            chemical: ['mekanism:oxygen', 10],
            output: null,
            byproduct: ['mekanism:hydrogen', 10]
        },
        '#c:rods/wooden' : {
            amount : 3,
            fluid: ['minecraft:water', 10],
            chemical: ['mekanism:oxygen', 10],
            output: null,
            byproduct: ['mekanism:hydrogen', 10]
        },
        '#c:dusts/wood' : {
            amount : 4,
            fluid: ['minecraft:water', 5],
            chemical: ['mekanism:oxygen', 5],
            output: null,
            byproduct: ['mekanism:hydrogen', 5]
        }
    }

    Object.entries(noOutput).forEach(([key, values]) => {
        allthemods.recipes.modular_machinery_reborn.machine_recipe('atm:pressurized_reaction_chamber', 50)
            .requireEnergy(multiplier/2 * energy, 8, 9)
            .requireItem(`${values.amount * multiplier/2}x ${key}`, 31, 8)
            .requireFluid(`${values.fluid[1] * multiplier}x ${values.fluid[0]}`, 31, 27)
            .requireChemical(`${values.chemical[1] * multiplier/2}x ${values.chemical[0]}`, 31, 46)
            .progressX(64)
            .progressY(26)
            .produceChemical(`${values.byproduct[1] * multiplier/2}x ${values.byproduct[0]}`, 100, 26)
            .width(126)
            .height(84)
    })

    allthemods.recipes.modular_machinery_reborn.machine_recipe('atm:pressurized_reaction_chamber', 20)
        .requireEnergy(multiplier/2 * energy, 8, 9)
        .requireItem('64x #minecraft:logs', 31, 8)
        .requireFluid('6400x minecraft:water', 31, 27)
        .requireChemical('6400x mekanism:oxygen', 31, 46)
        .progressX(64)
        .progressY(26)
        .produceItem('16x mekanism:dust_charcoal', 100, 17)
        .produceChemical('6400x mekanism:hydrogen', 100, 36)
        .width(126)
        .height(84)

    allthemods.recipes.modular_machinery_reborn.machine_recipe('atm:pressurized_reaction_chamber', 20)
        .requireEnergy(multiplier/8 * energy, 8, 9)
        .requireItem('8x mekanism:substrate', 31, 8)
        .requireFluid('1600x minecraft:water', 31, 27)
        .requireChemical('80x mekanism:ethene', 31, 46)
        .progressX(64)
        .progressY(26)
        .produceItem('64x mekanism:substrate', 100, 17)
        .produceChemical('80x mekanism:oxygen', 100, 36)
        .width(126)
        .height(84)

    allthemods.recipes.modular_machinery_reborn.machine_recipe('atm:pressurized_reaction_chamber', 20)
        .requireEnergy(multiplier/7 * energy, 8, 9)
        .requireItem('7x #c:storage_blocks/coal', 31, 8)
        .requireFluid('7000x minecraft:water', 31, 27)
        .requireChemical('7000x mekanism:oxygen', 31, 46)
        .progressX(64)
        .progressY(26)
        .produceItem('63x alltheores:sulfur', 100, 17)
        .produceChemical('7000x mekanism:hydrogen', 100, 36)
        .width(126)
        .height(84)
    
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
