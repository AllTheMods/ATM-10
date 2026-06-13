// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes((allthemods) => {
  function laserDrillFluidWithEntity(output, entity, catalyst, depthMin, depthMax, weight) {
    allthemods
      .custom({
        type: "industrialforegoing:laser_drill_fluid",
        output: output,
        entity_data: {
          data: {},
          display: "",
          entity: {
            type: entity
          }
        },
        rarity: [
          {
            biome_filter: {
              whitelist: [],
              blacklist: []
            },
            dimension_filter: {
              whitelist: [],
              blacklist: []
            },
            depth_min: depthMin,
            depth_max: depthMax,
            weight: weight
          }
        ],
        catalyst: {
          item: catalyst
        }
      })
      .id(`allthemods:industrialforegoing/laser_drill_fluid/${output.fluid.split(":")[1]}`)
  }


  laserDrillFluidWithEntity(
    { fluid: "industrialforegoing:ether_gas", amount: 40 },
    "shiny:shiny_wither",
    "industrialforegoing:purple_laser_lens",
    -64,
    256,
    3
  )
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
