// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
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

    bulk_energizing('c:gems/certus_quartz', 1, 'ae2:charged_certus_quartz_crystal', 20000, 'charged_certus_quartz_crystal')
    bulk_energizing('c:ices/blue', 2, 'powah:dry_ice', 10000, 'dry_ice')
    bulk_energizing('c:gems/redstone', 1, 'appflux:charged_redstone', 20000, 'charged_redstone')
    bulk_energizing('c:storage_blocks/redstone', 1, 'appflux:charged_redstone_block', 180000, 'charged_redstone_block')
    bulk_energizing('c:ingots/uranium', 1, 'powah:uraninite', 30000, 'uraninite_from_uranium')
    bulk_energizing('c:raw_materials/uraninite', 1, 'powah:uraninite', 2000, 'uraninite_from_raw')
    bulk_energizing('c:storage_blocks/uranium', 1, 'powah:uraninite_block', 270000, 'uraninite_from_uranium_block')
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
