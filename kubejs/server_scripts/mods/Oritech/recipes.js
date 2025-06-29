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
        // Oil compatibility
        allthemods.remove({id: 'oritech:refinery/oilalt'})
        allthemods.remove({id: 'oritech:refinery/oilbase'})

        allthemods.custom({
  "type": "oritech:refinery",
  "fluidInput": {
    "amount": 1000,
    "fluid": "#c:crude_oil"
  },
  "fluidOutputs": [
    {
      "amount": 500,
      "fluid": "oritech:still_heavy_oil"
    },
    {
      "amount": 250,
      "fluid": "oritech:still_naphtha"
    },
    {
      "amount": 250,
      "fluid": "oritech:still_sulfuric_acid"
    }
  ],
  "ingredients": [],
  "results": [],
  "time": 120
})
    allthemods.custom({
  "type": "oritech:refinery",
  "fluidInput": {
    "amount": 1000,
    "fluid": "#c:crude_oil"
  },
  "fluidOutputs": [
    {
      "amount": 500,
      "fluid": "oritech:still_diesel"
    },
    {
      "amount": 500,
      "fluid": "oritech:still_naphtha"
    },
    {
      "amount": 500,
      "fluid": "oritech:still_sulfuric_acid"
    }
  ],
  "ingredients": [
    {
      "item": "oritech:clay_catalyst_beads"
    }
  ],
  "results": [],
  "time": 120
})

    })

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

