// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {

    function dissolution_chamber(output, inputs, fluid, time, id) {
        let recipe = {
            "type": "industrialforegoing:dissolution_chamber",
            "input": [],
            "inputFluid": {
                "amount": fluid.amount || 100,
                "fluid": fluid.fluid
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
            amount: 2700
        },
        200,
        'pink_slime_block'
    );

    dissolution_chamber(
        {item: 'industrialforegoingsouls:soul_laser_base'},
        [
            {tag: 'c:plastics'},
            {item: 'minecraft:sculk_shrieker'},
            {tag: 'c:plastics'},
            {tag: 'industrialforegoing:machine_frame/supreme'},
            {tag: 'industrialforegoing:machine_frame/supreme'},
            {tag: 'c:gears/netherite'},
            {item: 'minecraft:sculk_catalyst'},
            {tag: 'c:gears/netherite'},
        ],
        {
            fluid: 'justdirethings:unstable_portal_fluid_source',
            amount: 1000
        },
        200,
        'soul_laser_base'
    );

    dissolution_chamber(
        {
            item: 'industrialforegoingsouls:soul_surge',
            count: 4
        },
        [
            {tag: 'c:plastics'},
            {item: 'minecraft:sculk_shrieker'},
            {tag: 'c:plastics'},
            {item: 'minecraft:echo_shard'},
            {item: 'minecraft:echo_shard'},
            {tag: 'industrialforegoing:machine_frame/simple'},
            {item: 'minecraft:echo_shard'},
            {tag: 'industrialforegoing:machine_frame/simple'},
        ],
        {
            fluid: 'justdirethings:unstable_portal_fluid_source',
            amount: 20
        },
        50,
        'soul_surge'
    );

    dissolution_chamber(
        {
            item: 'industrialforegoingsouls:soul_network_pipe',
            count: 32
        },
        [
            {tag: 'c:plastics'},
            {tag: 'c:gears/iron'},
            {tag: 'c:plastics'},
            {item: 'minecraft:echo_shard'},
            {item: 'minecraft:echo_shard'},
            {tag: 'c:plastics'},
            {tag: 'c:gears/iron'},
            {tag: 'c:plastics'},
        ],
        {
            fluid: 'industrialforegoing:pink_slime',
            amount: 20
        },
        20,
        'soul_network_pipe'
    );

    allthemods.remove({id: 'industrialforegoing:dissolution_chamber/xp_bottles'})
    dissolution_chamber(
        {item: 'minecraft:experience_bottle'},
        [
            {item: 'minecraft:glass_bottle'}],
        {
            fluid: 'industrialforegoing:essence',
            amount: 250
        },
        5,
        'xp_bottle'
    );
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.