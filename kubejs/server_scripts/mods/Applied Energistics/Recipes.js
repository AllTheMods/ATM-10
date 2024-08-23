// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
  allthemods.remove({ id: 'aeinfinitybooster:infinity_card' })
  allthemods.shaped('aeinfinitybooster:infinity_card', ['EBE', 'BUB', 'NNN'], {
      U: 'alltheores:lumium_gear',
      B: 'ae2:wireless_booster',
      E: 'alltheores:enderium_gear',
      N: 'minecraft:netherite_ingot'
  }).id('allthemods:aeinfinitybooster/infinity_card')

  function universalPress(input, output, id) {
      allthemods.custom(
          {
              type: 'ae2:inscriber',
              ingredients: {
                  top: {
                      item: 'kubejs:universal_press'
                  },
                  middle: {
                      item: input
                  }
              },
              mode: 'inscribe',
              result: {
                  count: 1,
                  id: output
              }
          }
      ).id(`kubejs:inscriber/universal_press/${id}`)
  }

  universalPress('ae2:silicon', 'ae2:printed_silicon', 'printed_silicon')
  universalPress('ae2:certus_quartz_crystal', 'ae2:printed_calculation_processor', 'printed_calculation_processor')
  universalPress('minecraft:diamond', 'ae2:printed_engineering_processor', 'printed_engineering_processor')
  universalPress('minecraft:gold_ingot', 'ae2:printed_logic_processor', 'printed_logic_processor')
  universalPress('minecraft:iron_block', 'kubejs:universal_press', 'universal_press_duplicate')

    const colors = [
        'white', 'yellow', 'orange', 'red', 'pink', 'magenta', 'purple', 'light_blue', 'cyan', 'blue', 'lime', 'green', 'brown', 'light_gray', 'gray', 'black'
    ];

    colors.forEach(color => {
        allthemods.shapeless(`4x ae2:${color}_covered_cable`, [`ae2:${color}_covered_dense_cable`]).id(`allthemods:ae2/${color}_dense_covered_to_normal`);
        allthemods.shapeless(`4x ae2:${color}_smart_cable`, [`ae2:${color}_smart_dense_cable`]).id(`allthemods:ae2/${color}_smart_covered_to_normal`);
        allthemods.shapeless(`ae2:${color}_covered_dense_cable`, [`4x ae2:${color}_covered_cable`]).id(`allthemods:ae2/${color}_covered_to_dense`);
        allthemods.shapeless(`ae2:${color}_smart_dense_cable`, [`4x ae2:${color}_smart_cable`]).id(`allthemods:ae2/${color}_smart_to_dense`);
    });

  allthemods.shapeless(` 4x ae2:fluix_covered_cable`,[`ae2:fluix_covered_dense_cable`]).id(`allthemods:ae2/dense_to_normal`)
  allthemods.shapeless(` 4x ae2:fluix_smart_cable`,[`ae2:fluix_smart_dense_cable`]).id(`allthemods:ae2/smart_dense_to_smart_normal`)
  
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
