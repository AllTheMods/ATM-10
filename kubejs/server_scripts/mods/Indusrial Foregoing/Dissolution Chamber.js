// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {

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

    dissolution_chamber(
        {item: 'industrialforegoing:pink_slime_block'},
        [
            {tag: 'c:glass_blocks/colorless'}],
        {
            fluid: 'industrialforegoing:pink_slime',
            amount: 2700},
        200,
        'pink_slime_block'
    );

})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.