// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
    allthemods.shaped(
        `8x minecraft:item_frame[entity_data={Invisible:1b,id:"minecraft:item_frame"},custom_name='"Invisible Item Frame"']`,
        [
            'iii',
            'ipi', 
            'iii'
        ], 
        {
            i: 'minecraft:item_frame', 
            p: 'minecraft:potion[potion_contents={potion:"minecraft:invisibility"}]'
        }
    )

    allthemods.shaped(
        `8x minecraft:glow_item_frame[entity_data={Invisible:1b,id:"minecraft:item_frame"},custom_name='"Invisible Glow Item Frame"']`,
        [
            'iii',
            'ipi', 
            'iii'
        ], 
        {
            i: 'minecraft:glow_item_frame', 
            p: 'minecraft:potion[potion_contents={potion:"minecraft:invisibility"}]'
        }
    )

    allthemods.replaceInput({ mod: "railcraft"}, "railcraft:steel_shovel", "mekanismtools:steel_shovel")

    // Concrete from Concrete Powder using Water Buckets
    const colors = [
        'white', 'yellow', 'orange', 'red', 'pink', 'magenta', 'purple', 'light_blue', 'cyan', 'blue', 'lime', 'green', 'brown', 'light_gray', 'gray', 'black'
    ];

    colors.forEach(color => {
        allthemods.shaped(
            Item.of(`minecraft:${color}_concrete`, 8),
            ['CCC','CBC','CCC'],
            {
                C: `minecraft:${color}_concrete_powder`,
                B: 'minecraft:water_bucket'
            }
        )
    });

    // Remove Raw Redstone Block Recipe
    allthemods.remove({id: 'regions_unexplored:raw_redstone_block'});

    // Dense Uraninite Ore Energizing Recipes
    allthemods.remove({ id: 'powah:energizing/uraninite_from_ore' })
    allthemods.custom({
        "type": "powah:energizing",
        "energy": 50000,
        "ingredients": [
             {
                 "tag": "c:ores/uraninite_regular"
             }
         ],
        "result": {
            "count": 5,
            "id": "powah:uraninite"
        }
    }).id('powah:energizing/uraninite_from_ore')

    allthemods.shapeless(
        Item.of('minecraft:potion[potion_contents={potion:"minecraft:water"}]', 1),
        [
            'minecraft:glass_bottle',
            'mysticalagriculture:water_essence'
        ]
    )

    allthemods.shapeless(
        Item.of('minecraft:honey_block'),
        [
            '9x mysticalagriculture:honey_essence'
        ]
    )
    allthemods.shaped("minecraft:crafting_table", ['XX','XX'], {X: "#minecraft:planks"}).id("minecraft:crafting_table")

    //soy sauce from unified tag
    allthemods.custom({
        type: "sushigocrafting:fermenting_barrel",
        fluid: {
            amount: 250,
            id: "minecraft:water"
        },
        input: {
            tag: "c:crops/soybean"
        },
        output: {
            count: 1,
            id: "sushigocrafting:soy_sauce"
        }
    })

    allthemods.replaceInput({output: 'crafting_on_a_stick:crafting_table'}, 'minecraft:crafting_table', '#c:player_workstations/crafting_tables')

    allthemods.shapeless(
        Item.of('minecraft:crafting_table'),
        [
            '#c:player_workstations/crafting_tables'
        ]
    )

})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.  
