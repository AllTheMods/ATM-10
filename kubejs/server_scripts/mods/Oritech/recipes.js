// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

// ServerEvents.recipes(allthemods => {

//     allthemods.remove({id: 'oritechthings:atomicforge/addon_block_efficient_speed_tier_9'})
//     allthemods.remove({id: 'oritechthings:atomicforge/addon_block_efficient_speed_tier_8'})
//     allthemods.remove({id: 'oritechthings:atomicforge/addon_block_efficient_speed_tier_7'})
//     allthemods.remove({id: 'oritechthings:atomicforge/addon_block_efficient_speed_tier_6'})
    
//     allthemods.remove({id: 'oritechthings:atomicforge/addon_block_capacitor_tier_6'})

//     allthemods.remove({id: 'oritechthings:atomicforge/addon_block_acceptor_tier_9'})
//     allthemods.remove({id: 'oritechthings:atomicforge/addon_block_acceptor_tier_8'})
//     allthemods.remove({id: 'oritechthings:atomicforge/addon_block_acceptor_tier_7'})
//     allthemods.remove({id: 'oritechthings:atomicforge/addon_block_acceptor_tier_6'})

//     allthemods.remove({id: 'oritechthings:atomicforge/addon_block_efficiency_tier_9'})
//     allthemods.remove({id: 'oritechthings:atomicforge/addon_block_efficiency_tier_8'})
//     allthemods.remove({id: 'oritechthings:atomicforge/addon_block_efficiency_tier_7'})
//     allthemods.remove({id: 'oritechthings:atomicforge/addon_block_efficiency_tier_6'})
// })

    ServerEvents.recipes(allthemods => {

        allthemods.remove({output: 'oritech:machine_core_3'})
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
        allthemods.remove({output: 'oritech:machine_extender'})
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

    })

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

