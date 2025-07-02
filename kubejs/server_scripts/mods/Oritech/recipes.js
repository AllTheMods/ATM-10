// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

    ServerEvents.recipes(allthemods => {

        // Rebalance of 'machine addon extender'
        allthemods.remove({id: 'oritech:crafting/core3alt'})
        allthemods.remove({id: 'oritech:crafting/core3'})
        allthemods.shaped(
            Item.of('oritech:machine_core_3', 1),
            [
                'AAA',
                'ABA',
                'AAA'
            ],
            {
                A: 'oritech:carbon_fibre_strands',
                B: 'oritech:fluxite_block'
            }
        )
        // allthemods.remove({output: 'oritech:machine_extender'})
        allthemods.shaped(
            Item.of('oritech:machine_extender', 1),
            [
                'AAA',
                'ABA',
                'AAA'
            ],
            {
                A: 'oritech:carbon_plating_block',
                B: 'oritech:machine_core_3'
            }
        )

        // Remove enchanting stuff
        allthemods.remove({id: 'oritech:crafting/catalyst_alt'})
        allthemods.remove({id: 'oritech:crafting/catalyst'})
        allthemods.remove({id: 'oritech:crafting/enchanter'})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

