// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.tags('item', allthemods => {
    allthemods.add('c:storage_blocks/blaze_powder', 'kubejs:blaze_powder_block')
    allthemods.add('c:storage_blocks/blaze_rod', 'kubejs:blaze_block')
})

ServerEvents.recipes(allthemods => {
    //Blaze Powder
    allthemods.shaped('kubejs:blaze_powder_block', [
        'SSS',
        'SSS',
        'SSS'
    ], {
        S: 'minecraft:blaze_powder'
    })
    allthemods.shapeless('9x minecraft:blaze_powder', [ // arg 1: output
        'kubejs:blaze_powder_block'
    ])
    //Blaze Block
    // allthemods.shaped('kubejs:blaze_block', [
    //     'SSS',
    //     'SSS',
    //     'SSS'
    // ], {
    //     S: 'minecraft:blaze_rod'
    // })
    // allthemods.shapeless('9x minecraft:blaze_rod', [ // arg 1: output
    //     'kubejs:blaze_block'
    // ])

    function bulk_energizing(input, input_number, output, energy, id) {
        allthemods.remove({id: `powah:energizing/${id}`})
        let loop = 0
        let ingredients = []
        while (loop <= 5) {
            for(let item = 1;item <= input_number; item++ ){
                ingredients.push({ tag: input });
            }
            allthemods.custom(
                {
                    type: "powah:energizing",
                    energy: energy * (ingredients.length / input_number),
                    ingredients: ingredients,
                    result: {
                    count: (loop + input_number) / input_number,
                    id: output
                    }
                }
            ).id(`kubejs:energizing/${(loop + input_number) / input_number}x_${id}`)
            loop = loop + input_number
        }
    }
    function energizing(input, output, energy, id) {
        let recipe = {
            "type": "powah:energizing",
            "energy": energy,
            "ingredients": [],
            "result": {
                "count": output.count || 1,
                "id": output.item
            }
        };

        for(let item = 1;item <= input.count; item++ ){

            let ingredients = {}

            if (input.tag) {
                ingredients.tag = input.tag;
            } else {
                ingredients.item = input.item;
            }

            recipe.ingredients.push(ingredients);
        }

        allthemods.custom(recipe).id(`kubejs:energizing/${id}`);
    }

    bulk_energizing('c:gems/certus_quartz', 1, 'ae2:charged_certus_quartz_crystal', 20000, 'charged_certus_quartz_crystal')
    bulk_energizing('c:ices/blue', 2, 'powah:dry_ice', 10000, 'dry_ice')
    bulk_energizing('c:gems/redstone', 1, 'appflux:charged_redstone', 20000, 'charged_redstone')
    bulk_energizing('c:storage_blocks/redstone', 1, 'appflux:charged_redstone_block', 180000, 'charged_redstone_block')
    bulk_energizing('c:ingots/uranium', 1, 'powah:uraninite', 30000, 'uraninite_from_uranium')
    bulk_energizing('c:raw_materials/uraninite', 1, 'powah:uraninite', 2000, 'uraninite_from_raw')
    bulk_energizing('c:storage_blocks/uranium', 1, 'powah:uraninite_block', 270000, 'uraninite_from_uranium_block')
    energizing({tag: 'c:storage_blocks/blaze_powder', count: 4 }, {item: 'powah:blazing_crystal_block'},1080000, 'blazing_crystal_from_powder_block')
    energizing({tag: 'c:storage_blocks/blaze_rod', count: 1}, {item: 'powah:blazing_crystal_block'},1080000, 'blazing_crystal_from_block')
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
