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
        // Remove enchanting stuff
        allthemods.remove({id: 'oritech:crafting/catalyst_alt'})
        allthemods.remove({id: 'oritech:crafting/catalyst'})
        allthemods.remove({id: 'oritech:crafting/enchanter'})

        // Cheaty alloys
        allthemods.remove({id: 'oritech:crafting/alloy/steel'})
        allthemods.remove({id: 'oritech:crafting/alloy/electrum'})
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
