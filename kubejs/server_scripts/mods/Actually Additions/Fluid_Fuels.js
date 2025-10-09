// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
    allthemods.custom(
        {
            type: "justdirethings:fluiddrop",
            catalyst: 'actuallyadditions:crystallized_canola_seed',
            id: "atm:crystalized_oil",
            input: {
                Name: "actuallyadditions:refined_canola_oil",
                Properties: {
                    level: "0"
                }
            },
            output: {
                Name: "actuallyadditions:crystallized_oil",
                Properties: {
                    level: "0"
                }
            }
        }
    )

    allthemods.custom(
        {
            type: "justdirethings:fluiddrop",
            catalyst: 'actuallyadditions:empowered_canola_seed',
            id: "atm:empowered_oil",
            input: {
                Name: "actuallyadditions:crystallized_oil",
                Properties: {
                    level: "0"
                }
            },
            output: {
                Name: "actuallyadditions:empowered_oil",
                Properties: {
                    level: "0"
                }
            }
        }
    )
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.