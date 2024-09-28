ServerEvents.recipes(allthemods => {
    allthemods.custom({
        type: "pneumaticcraft:pressure_chamber",
        inputs: [
          {
            count: 28,
            item: "allthemodium:unobtainium_allthemodium_alloy_block"
          },
          {
            count: 17,
            item: "allthecompressed:nether_star_block_3x"
          },
          {
            count: 1,
            item: "allthetweaks:nexium_emitter"
          },
          {
            count: 1,
            item: "allthetweaks:dragon_soul"
          },
          {
            count: 1,
            item: "allthetweaks:withers_compass"
          },
          {
            count: 1,
            item: "allthetweaks:pulsating_black_hole"
          },
          {
            count: 1,
            item: "allthetweaks:oblivion_shard"
          },
          {
            count: 1,
            item: "allthetweaks:improbable_probability_device"
          },
          {
            count: 1,
            item: "allthetweaks:dimensional_seed"
          },
          {
            count: 1,
            item: "allthetweaks:patrick_star"
          },
          {
            count: 1,
            item: "allthetweaks:philosophers_fuel"
          },
          {
            count: 1,
            item: "mysticalagradditions:creative_essence"
          }
        ],
        pressure: 4.9,
        results: [
            Item.of("allthetweaks:atm_star").toJson()
        ]
    })

    allthemods.custom({
        type: "pneumaticcraft:pressure_chamber",
        inputs: [
          {
            count: 5,
            item: "minecraft:pink_concrete_powder"
          },
          {
            count: 11,
            item: "minecraft:pink_concrete"
          },
          {
            count: 8,
            item: "minecraft:magenta_concrete_powder"
          },
          {
            count: 13,
            item: "minecraft:magenta_concrete"
          },
          {
            count: 2,
            item: "minecraft:lime_concrete"
          },
          {
            count: 8,
            item: "minecraft:green_concrete_powder"
          },
          {
            count: 8,
            item: "minecraft:green_concrete"
          }
        ],
        pressure: 4.9,
        results: [
            Item.of("allthetweaks:patrick_star").toJson()
        ]
    })
})
