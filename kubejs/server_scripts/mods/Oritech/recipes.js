// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
  // Oil compatibility
  allthemods.remove({ id: 'oritech:refinery/oilalt' })
  allthemods.remove({ id: 'oritech:refinery/oilbase' })

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

  // Cheaty alloys
  allthemods.remove({ id: 'oritech:crafting/alloy/steel' })
  allthemods.remove({ id: 'oritech:crafting/alloy/electrum' })
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
