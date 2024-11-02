// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods =>{
    function awakenedEssenceCrafting(essenceCount, input, ingredients, result){
        allthemods.custom(
            {
                "type": "mysticalagriculture:awakening",
                "essences": [
                    {
                        "id": "mysticalagriculture:air_essence",
                        "count": essenceCount
                    },
                    {
                        "id": "mysticalagriculture:earth_essence",
                        "count": essenceCount
                    },
                    {
                        "id": "mysticalagriculture:water_essence",
                        "count": essenceCount
                    },
                    {
                        "id": "mysticalagriculture:fire_essence",
                        "count": essenceCount
                    }
                ],
                "input": {
                    "item": input
                },
                "ingredients": [
                    {
                        "item": ingredients.item1
                    },
                    {
                        "item": ingredients.item2
                    },
                    {
                        "item": ingredients.item3
                    },
                    {
                        "item": ingredients.item4
                    }
                ],
                "result": {
                    "id": result
                }
            }
        ).id('allthemods:mysticalagriculture/awakening/' + result.split(':').pop());
    }

    allthemods.remove({output: 'reliquary:fertile_lily_pad'})
    awakenedEssenceCrafting(40, 'minecraft:lily_pad', {item1: 'allthemodium:vibranium_plate', item2: 'reliquary:fertile_essence', item3: 'reliquary:fertile_essence', item4: 'reliquary:fertile_essence'}, 'reliquary:fertile_lily_pad')
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.