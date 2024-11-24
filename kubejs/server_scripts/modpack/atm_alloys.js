// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {

    //Air Essence
    allthemods.shaped('kubejs:air_essence_block', [
        'SSS',
        'SSS',
        'SSS'
    ], {
        S: 'ars_nouveau:air_essence'
    })
    allthemods.shapeless('9x ars_nouveau:air_essence', [ // arg 1: output
        'kubejs:air_essence_block'
    ])

    //Earth Essence
    allthemods.shaped('kubejs:earth_essence_block', [
        'SSS',
        'SSS',
        'SSS'
    ], {
        S: 'ars_nouveau:earth_essence'
    })
    allthemods.shapeless('9x ars_nouveau:earth_essence', [ // arg 1: output
        'kubejs:earth_essence_block'
    ])

    //Fire Essence
    allthemods.shaped('kubejs:fire_essence_block', [
        'SSS',
        'SSS',
        'SSS'
    ], {
        S: 'ars_nouveau:fire_essence'
    })
    allthemods.shapeless('9x ars_nouveau:fire_essence', [ // arg 1: output
        'kubejs:fire_essence_block'
    ])

    //Water Essence
    allthemods.shaped('kubejs:water_essence_block', [
        'SSS',
        'SSS',
        'SSS'
    ], {
        S: 'ars_nouveau:water_essence'
    })
    allthemods.shapeless('9x ars_nouveau:water_essence', [ // arg 1: output
        'kubejs:water_essence_block'
    ])

    function energizing(result, inputs, energy, id) {
        let recipe = {
            "type": "powah:energizing",
            "energy": energy,
            "ingredients": [],
            "result": {
                "count": result.count || 1,
                "id": result.item
            }
        };

        inputs.forEach(input => {

            let ingredients = {}

            if (input.tag) {
                ingredients.tag = input.tag;
            } else {
                ingredients.item = input.item;
            }

            recipe.ingredients.push(ingredients);
        });

        allthemods.custom(recipe).id(`kubejs:energizing/${id}`);
    }

    //Vibranium - ATM Alloy
    energizing(
        {item: 'allthemodium:vibranium_allthemodium_alloy_ingot'},
        [
            {tag: 'c:ingots/allthemodium'}, {item: 'allthemodium:piglich_heart'},
            {item: 'allthecompressed:nitro_crystal_block_1x'} ,
            {item: 'allthemodium:piglich_heart'},
            {tag: 'c:ingots/vibranium'}],
        1000000000,
        'vibranium_allthemodium_alloy_ingot'
    );
    energizing(
        {item: 'allthemodium:vibranium_allthemodium_alloy_block'},
        [
            {tag: 'c:storage_blocks/allthemodium'},
            {item: 'allthemodium:piglich_heart_block'},
            {item: 'allthecompressed:nitro_crystal_block_2x'} ,
            {item: 'allthemodium:piglich_heart_block'},
            {tag: 'c:storage_blocks/vibranium'}],
        9000000000,
        'vibranium_allthemodium_alloy_block'
    );

    function enchanting_apparatus(output, pedestalItems, reagent, nbt, sourceCost, id){
        let recipe = {
            "type": "ars_nouveau:enchanting_apparatus",
            "keepNbtOfReagent": nbt,
            "pedestalItems": [],
            "reagent": {},
            "result": {
                "count": output.count || 1,
                "id": output.item
            },
            "sourceCost": sourceCost
        };

        if (reagent.tag) {
            recipe.reagent.tag = reagent.tag;
        } else {
            recipe.reagent.item = reagent.item;
        }

        pedestalItems.forEach(input => {

            let ingredients = {}

            if (input.tag) {
                ingredients.tag = input.tag;
            } else {
                ingredients.item = input.item;
            }

            recipe.pedestalItems.push(ingredients);
        });

        allthemods.custom(recipe).id(`kubejs:enchanting_apparatus/${id}`);
    }

    //Unobtainium - ATM Alloy
    enchanting_apparatus(
        {item: 'allthemodium:unobtainium_allthemodium_alloy_ingot'},
        [
            {item: 'allthemodium:piglich_heart'},
            {item: 'ars_nouveau:air_essence'},
            {tag: 'c:ingots/allthemodium'},
            {item: 'ars_nouveau:earth_essence'},
            {item: 'allthemodium:piglich_heart'},
            {item: 'ars_nouveau:fire_essence'},
            {tag: 'c:ingots/unobtainium'},
            {item: 'ars_nouveau:water_essence'}],
        {item: 'ars_nouveau:source_gem'},
        false,
        10000,
        'unobtainium_allthemodium_alloy_ingot'
    );
    enchanting_apparatus(
        {item: 'allthemodium:unobtainium_allthemodium_alloy_block'},
        [
            {item: 'allthemodium:piglich_heart_block'},
            {item: 'kubejs:air_essence_block'},
            {tag: 'c:storage_blocks/allthemodium'},
            {item: 'kubejs:earth_essence_block'},
            {item: 'allthemodium:piglich_heart_block'},
            {item: 'kubejs:fire_essence_block'},
            {tag: 'c:storage_blocks/unobtainium'},
            {item: 'kubejs:water_essence_block'}],
        {item: 'ars_nouveau:source_gem_block'},
        false,
        90000,
        'unobtainium_allthemodium_alloy_block'
    );

    function dissolution_chamber(output, inputs, fluid, time, id){
        let recipe = {
            "type": "industrialforegoing:dissolution_chamber",
            "input": [],
            "inputFluid": {
                "amount": fluid.amount || 100,
                "id": fluid.fluid
            },
            "output": {
                "count": output.count || 1,
                "id": output.item
            },
            "processingTime": time
        };

        inputs.forEach(input => {

            let ingredients = {}

            if (input.tag) {
                ingredients.tag = input.tag;
            } else {
                ingredients.item = input.item;
            }

            recipe.input.push(ingredients);
        });

        allthemods.custom(recipe).id(`kubejs:dissolution_chamber/${id}`);
    }

    //Unobtainium - Vibranium Alloy
    dissolution_chamber(
        {item: 'allthemodium:unobtainium_vibranium_alloy_ingot'},
        [
            {item: 'industrialforegoing:pink_slime'},
            {tag: 'c:ingots/vibranium'},
            {item: 'industrialforegoing:pink_slime'},
            {item: 'allthemodium:piglich_heart'},
            {item: 'allthemodium:piglich_heart'},
            {item: 'industrialforegoing:pink_slime'},
            {tag: 'c:ingots/unobtainium'},
            {item: 'industrialforegoing:pink_slime'}],
        {
            fluid: 'allthemodium:soul_lava',
            amount: 100},
        200,
        'unobtainium_vibranium_alloy_ingot'
    );
    dissolution_chamber(
        {item: 'allthemodium:unobtainium_vibranium_alloy_block'},
        [
            {item: 'industrialforegoing:pink_slime_block'},
            {tag: 'c:storage_blocks/vibranium'},
            {item: 'industrialforegoing:pink_slime_block'},
            {item: 'allthemodium:piglich_heart_block'},
            {item: 'allthemodium:piglich_heart_block'},
            {item: 'industrialforegoing:pink_slime_block'},
            {tag: 'c:storage_blocks/unobtainium'},
            {item: 'industrialforegoing:pink_slime_block'}],
        {
            fluid: 'allthemodium:soul_lava',
            amount: 900},
        200,
        'unobtainium_vibranium_alloy_block'
    );

})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
