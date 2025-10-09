// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
ServerEvents.recipes(event => {
    event.remove(
        [
            'modern_industrialization:quarry/bronze',
            'modern_industrialization:quarry/steel',
            'modern_industrialization:quarry/stainless_steel',
            'modern_industrialization:quarry/titanium'
        ]
    ) 

    let addQuarry = (id, eu, duration, inputItem, inputChance, outputs) => {
        event.custom(
            {
                type: 'modern_industrialization:quarry',
                eu: eu,
                duration: duration,
                item_inputs: {
                    item: inputItem,
                    amount: 1,
                    probability: inputChance
                },
                item_outputs: outputs
            }
        ).id(`atm:quarry/electric/${id}`)
    }

    addQuarry('test', 2, 100, 'minecraft:dirt', 0.01, 
        [
            { item: 'minecraft:cobblestone', amount: 1, probability: 0.2 },
            { item: 'minecraft:stone', amount: 1, probability: 0.5 }
        ]
    )

    addQuarry('bronze', 4, 600, 'modern_industrialization:bronze_drill', 0.04, 
        [
            { item: 'minecraft:iron_ore', amount: 1, probability: 0.4 },
            { item: 'minecraft:coal_ore', amount: 1, probability: 0.4 },
            { item: 'modern_industrialization:lignite_coal_ore', amount: 1, probability: 0.24 },
            { item: 'minecraft:copper_ore', amount: 1, probability: 0.2 },
            { item: 'alltheores:tin_ore', amount: 1, probability: 0.3 },
            { item: 'minecraft:gold_ore', amount: 1, probability: 0.15 },
            { item: 'minecraft:redstone_ore', amount: 1, probability: 0.2 },
            { item: 'alltheores:osmium_ore', amount: 1, probability: 0.12 }
        ]
    )

    addQuarry('steel', 12, 600, 'modern_industrialization:steel_drill', 0.04,
        [
            { item: 'modern_industrialization:antimony_ore', amount: 1, probability: 0.2 },
            { item: 'minecraft:diamond_ore', amount: 1, probability: 0.12 },
            { item: 'minecraft:lapis_ore', amount: 1, probability: 0.1 },
            { item: 'alltheores:lead_ore', amount: 1, probability: 0.25 },
            { item: 'alltheores:nickel_ore', amount: 1, probability: 0.18 },
            { item: 'alltheores:aluminum_ore', amount: 1, probability: 0.4 },
            { item: 'alltheores:salt_ore', amount: 1, probability: 0.12 },
            { item: 'minecraft:emerald_ore', amount: 1, probability: 0.1 },
            { item: 'modern_industrialization:quartz_ore', amount: 1, probability: 0.2 },
            { item: 'powah:uraninite_ore', amount: 1, probability: 0.08 }
        ]
    )

    addQuarry('stainless_steel', 32, 600, 'modern_industrialization:stainless_steel_drill', 0.04,
        [
            { item: 'modern_industrialization:titanium_ore', amount: 1, probability: 0.15 },
            { item: 'modern_industrialization:tungsten_ore', amount: 1, probability: 0.2 },
            { item: 'modern_industrialization:monazite_ore', amount: 1, probability: 0.25 },
            { item: 'alltheores:platinum_ore', amount: 1, probability: 0.12 }
        ]
    )

    addQuarry('titanium', 128, 600, 'modern_industrialization:titanium_drill', 0.04,
        [
            { item: 'alltheores:uranium_ore', amount: 1, probability: 0.2 },
            { item: 'alltheores:iridium_ore', amount: 1, probability: 0.05 },
            { item: 'alltheores:fluorite_ore', amount: 1, probability: 0.3 }
        ]
    )
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
