// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {

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

    enchanting_apparatus(
        {item: 'allthemodium:alloy_sword'},
        [
            {tag: 'c:ingots/unobtainium'},
            {tag: 'c:ingots/unobtainium_allthemodium_alloy'},
            {tag: 'c:ingots/unobtainium_allthemodium_alloy'},
            {tag: 'c:ingots/unobtainium_allthemodium_alloy'},
            {tag: 'c:ingots/allthemodium'},
            {tag: 'c:ingots/vibranium_allthemodium_alloy'},
            {tag: 'c:ingots/vibranium_allthemodium_alloy'},
            {tag: 'c:ingots/vibranium_allthemodium_alloy'},
            {tag: 'c:ingots/vibranium'},
            {tag: 'c:ingots/unobtainium_vibranium_alloy'},
            {tag: 'c:ingots/unobtainium_vibranium_alloy'},
            {tag: 'c:ingots/unobtainium_vibranium_alloy'},
        ],
        {item: 'allthemodium:allthemodium_sword'},
        true,
        5000,
        'alloy_sword'
    )
    enchanting_apparatus(
        {item: 'allthemodium:alloy_pick'},
        [
            {tag: 'c:ingots/unobtainium'},
            {tag: 'c:ingots/unobtainium_allthemodium_alloy'},
            {tag: 'c:ingots/unobtainium_allthemodium_alloy'},
            {tag: 'c:ingots/unobtainium_allthemodium_alloy'},
            {tag: 'c:ingots/allthemodium'},
            {tag: 'c:ingots/vibranium_allthemodium_alloy'},
            {tag: 'c:ingots/vibranium_allthemodium_alloy'},
            {tag: 'c:ingots/vibranium_allthemodium_alloy'},
            {tag: 'c:ingots/vibranium'},
            {tag: 'c:ingots/unobtainium_vibranium_alloy'},
            {tag: 'c:ingots/unobtainium_vibranium_alloy'},
            {tag: 'c:ingots/unobtainium_vibranium_alloy'},
        ],
        {item: 'allthemodium:allthemodium_pickaxe'},
        true,
        5000,
        'alloy_pickaxe'
    )
    enchanting_apparatus(
        {item: 'allthemodium:alloy_axe'},
        [
            {tag: 'c:ingots/unobtainium'},
            {tag: 'c:ingots/unobtainium_allthemodium_alloy'},
            {tag: 'c:ingots/unobtainium_allthemodium_alloy'},
            {tag: 'c:ingots/unobtainium_allthemodium_alloy'},
            {tag: 'c:ingots/allthemodium'},
            {tag: 'c:ingots/vibranium_allthemodium_alloy'},
            {tag: 'c:ingots/vibranium_allthemodium_alloy'},
            {tag: 'c:ingots/vibranium_allthemodium_alloy'},
            {tag: 'c:ingots/vibranium'},
            {tag: 'c:ingots/unobtainium_vibranium_alloy'},
            {tag: 'c:ingots/unobtainium_vibranium_alloy'},
            {tag: 'c:ingots/unobtainium_vibranium_alloy'},
        ],
        {item: 'allthemodium:allthemodium_axe'},
        true,
        5000,
        'alloy_axe'
    )
    enchanting_apparatus(
        {item: 'allthemodium:alloy_shovel'},
        [
            {tag: 'c:ingots/unobtainium'},
            {tag: 'c:ingots/unobtainium_allthemodium_alloy'},
            {tag: 'c:ingots/unobtainium_allthemodium_alloy'},
            {tag: 'c:ingots/unobtainium_allthemodium_alloy'},
            {tag: 'c:ingots/allthemodium'},
            {tag: 'c:ingots/vibranium_allthemodium_alloy'},
            {tag: 'c:ingots/vibranium_allthemodium_alloy'},
            {tag: 'c:ingots/vibranium_allthemodium_alloy'},
            {tag: 'c:ingots/vibranium'},
            {tag: 'c:ingots/unobtainium_vibranium_alloy'},
            {tag: 'c:ingots/unobtainium_vibranium_alloy'},
            {tag: 'c:ingots/unobtainium_vibranium_alloy'},
        ],
        {item: 'allthemodium:allthemodium_shovel'},
        true,
        5000,
        'alloy_shovel'
    )
    enchanting_apparatus(
        {item: 'allthemodium:alloy_paxel'},
        [
            {item: 'allthemodium:alloy_sword'},
            {tag: 'c:ingots/unobtainium_allthemodium_alloy'},
            {tag: 'c:ingots/unobtainium_allthemodium_alloy'},
            {item: 'allthemodium:alloy_pick'},
            {tag: 'c:ingots/vibranium_allthemodium_alloy'},
            {tag: 'c:ingots/vibranium_allthemodium_alloy'},
            {item: 'allthemodium:alloy_axe'},
            {tag: 'c:ingots/vibranium_allthemodium_alloy'},
            {tag: 'c:ingots/vibranium_allthemodium_alloy'},
            {item: 'allthemodium:alloy_shovel'},
            {tag: 'c:ingots/unobtainium_vibranium_alloy'},
            {tag: 'c:ingots/unobtainium_vibranium_alloy'},
        ],
        {item: 'mysticalagradditions:awakened_supremium_paxel'},
        true,
        10000,
        'alloy_paxel'
    )

    allthemods.replaceInput(
        { id: 'modern_industrialization:upgrade/packer/quantum/sword' },
        'minecraft:netherite_sword',
        'allthemodium:alloy_paxel'
    )
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.