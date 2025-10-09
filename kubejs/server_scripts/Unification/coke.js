// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
    allthemods.remove(
        [
            {
                id: 'immersiveengineering:crusher/coke_block'
            },
            {
                id: 'immersiveengineering:crusher/coke'
            },
            {
                id: 'immersiveengineering:crafting/coke_to_slab'
            }
        ]
    )

    allthemods.custom(
        {
            "type": "immersiveengineering:crusher",
            "energy": 2400,
            "input": {
                "tag": "c:coal_coke"
            },
            "result": {
                "item": "modern_industrialization:coke_dust"
            }
        }
    )

    allthemods.custom(
        {
            "type": "immersiveengineering:crusher",
            "energy": 4800,
            "input": {
                "tag": "c:storage_blocks/coal_coke"
            },
            "result": {
                "basePredicate": {
                    "item": "modern_industrialization:coke_dust"
                },
                "count": 9
            }
        }
    )
})

ServerEvents.tags('item', allthemods => {
    allthemods.add('c:coal_coke', 'modern_industrialization:coke')

    allthemods.add('c:dusts/coal_coke', 'modern_industrialization:coke_dust')

    allthemods.add('c:storage_blocks/coal_coke', 'modern_industrialization:coke_block')

    allthemods.add('c:dusts', 'immersiveengineering:dust_coke')

    allthemods.add('almostunified:hide', ['immersiveengineering:coke', 'immersiveengineering:dust_coke', 'railcraft:coal_coke_block', 'immersiveengineering:slab_coke'])
})

ServerEvents.tags('fluid', allthemods => {
    allthemods.add('c:crude_oil', 'modern_industrialization:crude_oil')
    allthemods.add('c:fuels/crude_oil', 'modern_industrialization:crude_oil')
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.