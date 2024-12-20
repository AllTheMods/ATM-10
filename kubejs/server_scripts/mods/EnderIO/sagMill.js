// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {

    function sagMill(input, energy, output) {
        allthemods.custom(
            {
                type: 'enderio:sag_milling',
                energy: energy,
                input: Ingredient.of(input).toJson(),
                outputs: [
                    {
                        item: {
                            count: output.count,
                            id: output.item
                        }
                    }
                ]
            }
        )
    }

    sagMill('#ae2:all_certus_quartz',2400, {item: 'ae2:certus_quartz_dust', count: 1})
    sagMill('ae2:fluix_crystal', 2400, {item: 'ae2:fluix_dust', count: 1})
    sagMill('ae2:sky_stone_block', 2400, {item: 'ae2:sky_dust', count: 1})
    sagMill('#c:ender_pearls', 2400, {item: 'ae2:ender_dust', count: 1})
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.