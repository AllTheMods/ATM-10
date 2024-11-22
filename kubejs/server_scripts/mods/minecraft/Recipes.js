// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
    allthemods.shaped(
        Item.of('minecraft:sculk', 1), // arg 1: output
        [
            'OOO',
            'OOO',
            'OOO'
        ],
        {
            O: 'minecraft:echo_shard',
        }
    )

    allthemods.shaped(
        Item.of('minecraft:sculk_sensor', 1), // arg 1: output
        [
            '   ',
            'VCV',
            'SSS'
        ],
        {
            V: 'minecraft:twisting_vines',
            C: 'minecraft:comparator',
            S: 'minecraft:sculk',
        }
    )


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
        {item: 'minecraft:sculk_shrieker'},
        [
            {item: 'minecraft:sculk_catalyst'},
            {item: 'minecraft:sculk'},
            {item: 'minecraft:sculk_catalyst'},
            {item: 'minecraft:sculk'},
            {item: 'minecraft:sculk_catalyst'},
            {item: 'minecraft:sculk'},
            {item: 'minecraft:sculk_catalyst'},
            {item: 'minecraft:sculk'}],
        {item: 'deeperdarker:heart_of_the_deep'},
        false,
        1000,
        'sculk_shrieker'
    );
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.