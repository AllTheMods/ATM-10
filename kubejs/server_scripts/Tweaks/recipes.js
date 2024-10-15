// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
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

    // Remove Duplicate Paper Recipe
    allthemods.remove({ id: 'minecraft:paper' })

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
    
    // Remove The Raw Redstone Block Recipe As It Allows A Redstone Dupe
    allthemods.remove({id: 'regions_unexplored:raw_redstone_block'});

    
    // Fix dense uraninite ore energizing recipes
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
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.  
