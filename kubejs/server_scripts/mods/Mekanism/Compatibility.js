/*
 This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
 As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
  Mekanism recipes for processing stack
  Authored by EnigmaQuip

  DO NOT EDIT BELOW
  only the startup script should need editing
*/

ServerEvents.recipes(allthemods => {
  function dissolution(inputItem, inputItemAmount, inputChemical, inputChemicalAmount, outputChemical, outputChemicalAmount){
    return allthemods.custom({
      type: "mekanism:dissolution",
      chemical_input: {
        amount: inputChemicalAmount,
        chemical: inputChemical
      },
      item_input: {
        count: inputItemAmount,
        tag: inputItem
      },
      output: {
        amount: outputChemicalAmount,
        id: outputChemical
      },
      per_tick_usage: true
    })
  }


  function crushing(inputItem, inputAmount, outputItem, outputAmount){
    return allthemods.custom({
        type: "mekanism:crushing",
        input: {
          count: inputAmount,
          tag: inputItem
        },
        output: {
          count: outputAmount,
          id: outputItem
        }
    })
  }

  function crystallizing(inputChemical, inputAmount, outputItem, outputAmount){
    return allthemods.custom({
        type: "mekanism:crystallizing",
        input: {
          amount: inputAmount,
          chemical: inputChemical
        },
        output: {
          count: outputAmount,
          id: outputItem
        }
    })
  }

  function enriching(inputItem, inputAmount, outputItem, outputAmount){
    return allthemods.custom({
        type: "mekanism:enriching",
        input: {
          count: inputAmount,
          tag: inputItem
        },
        output: {
          count: outputAmount,
          id: outputItem
        }
    })
  }

  function injecting(inputItem, inputAmount, inputChemical, inputChemicalAmount, outputItem, outputAmount){
    return allthemods.custom({
        type: "mekanism:injecting",
        chemical_input: {
          amount: inputChemicalAmount,
          chemical: inputChemical
        },
        item_input: {
          count: inputAmount,
          tag: inputItem
        },
        output: {
          count: outputAmount,
          id: outputItem
        },
        per_tick_usage: true
    })
  }

  function purifying(inputItem, inputItemAmount, inputChemical, inputChemAmount, outputItem, outputAmount){
    return allthemods.custom({
        type: "mekanism:purifying",
        chemical_input: {
          amount: inputChemAmount,
          chemical: inputChemical
        },
        item_input: {
          count: 1,
          tag: inputItem
        },
        output: {
          count: outputAmount,
          id: outputItem
        },
        per_tick_usage: true
    })
  }

  function washing(inputChemical, inputChemAmount, inputFluid, inputFluidAmount, outputChemical, outputAmount){
    return allthemods.custom({
      type: "mekanism:washing",
      chemical_input: {
        amount: inputChemAmount,
        chemical: inputChemical
      },
      fluid_input: {
        amount: inputFluidAmount,
        tag: inputFluid
      },
      output: {
        amount: outputAmount,
        id: outputChemical
      }
    })
  }

  function oreProcessing(material, dustId){
    if (!Ingredient.of(`#c:storage_blocks/raw_${material}`).isEmpty()){
      dissolution(`c:storage_blocks/raw_${material}`, 1, 'mekanism:sulfuric_acid', 2, `kubejs:dirty_${material}`, 6000).id(`allthemods:processing/${material}/slurry/dirty/from_raw_block`)
      injecting(`c:storage_blocks/raw_${material}`, 1, 'mekanism:hydrogen_chloride', 2, `kubejs:shard_${material}`, 24).id(`allthemods:processing/${material}/shard/from_raw_block`)
      purifying(`c:storage_blocks/raw_${material}`, 1, 'mekanism:oxygen', 2, `kubejs:clump_${material}`, 18).id(`allthemods:processing/${material}/clump/from_raw_block`)
      enriching(`c:storage_blocks/raw_${material}`, 1, dustId, 12).id(`allthemods:processing/${material}/dust/from_raw_block`)
    }

    if (!Ingredient.of(`#c:raw_materials/${material}`).isEmpty()) {
      dissolution(`c:raw_materials/${material}`, 3, 'mekanism:sulfuric_acid', 1, `kubejs:dirty_${material}`, 2000).id(`allthemods:processing/${material}/slurry/dirty/from_raw_ore`)
      injecting(`c:raw_materials/${material}`, 3, 'mekanism:hydrogen_chloride', 1, `kubejs:shard_${material}`, 8).id(`allthemods:processing/${material}/shard/from_raw_ore`)
      purifying(`c:raw_materials/${material}`, 1, 'mekanism:oxygen', 1, `kubejs:clump_${material}`, 2).id(`allthemods:processing/${material}/clump/from_raw_ore`)
      enriching(`c:raw_materials/${material}`, 3, dustId, 4).id(`allthemods:processing/${material}/dust/from_raw_ore`)
    }

    if (!Ingredient.of(`#c:ores/${material}`).isEmpty()) {
      dissolution(`c:ores/${material}`, 1, 'mekanism:sulfuric_acid', 1, `kubejs:dirty_${material}`, 1000).id(`allthemods:processing/${material}/slurry/dirty/from_ore`)
      injecting(`c:ores/${material}`, 1, 'mekanism:hydrogen_chloride', 1, `kubejs:shard_${material}`, 4).id(`allthemods:processing/${material}/shard/from_ore`)
      purifying(`c:ores/${material}`, 1, 'mekanism:oxygen', 1, `kubejs:clump_${material}`, 3).id(`allthemods:processing/${material}/clump/from_ore`)
      enriching(`c:ores/${material}`, 1, dustId, 2).id(`allthemods:processing/${material}/dust/from_ore`)
    }

    washing(`kubejs:dirty_${material}`, 1, 'minecraft:water', 5, `kubejs:clean_${material}`, 1).id(`allthemods:processing/${material}/slurry/clean`)
    crystallizing(`kubejs:clean_${material}`, 200, `kubejs:crystal_${material}`, 1).id(`allthemods:processing/${material}/crystal/from_slurry`)
    injecting(`mekanism:crystals/${material}`, 1, 'mekanism:hydrogen_chloride', 1, `kubejs:shard_${material}`, 1).id(`allthemods:processing/${material}/shard/from_crystal`)
    purifying(`mekanism:shards/${material}`, 1, 'mekanism:oxygen', 1, `kubejs:clump_${material}`, 1).id(`allthemods:processing/${material}/clump/from_shard`)
    crushing(`mekanism:clumps/${material}`, 1, `kubejs:dirty_dust_${material}`, 1).id(`allthemods:processing/${material}/dirty_dust/from_clump`)
    enriching(`mekanism:dirty_dusts/${material}`, 1, dustId, 1).id(`allthemods:processing/${material}/dust/from_dirty_dust`)
  }

  global.mekStackAdditions.forEach(entry => {
    let material = entry.material
    let dust = AlmostUnified.getTagTargetItem(`c:dusts/${material}`)
    if (entry.makeDust) {
      dust = Item.of(`kubejs:dust_${material}`)
    } else if (dust.isEmpty() && !Ingredient.of(`#c:dusts/${material}`).isEmpty()) {
      dust = Ingredient.of(`#c:dusts/${material}`).getFirst()
    }

    oreProcessing(material, dust.id)

    if (entry.dustSmelting) {
      let ingot = AlmostUnified.getTagTargetItem(`c:ingots/${material}`)
      if (ingot.isEmpty() && !Ingredient.of(`#c:ingots/${material}`).isEmpty()) {
        ingot = Ingredient.of(`#c:ingots/${material}`).getFirst()
      }
      allthemods.smelting(ingot.id, `#c:dusts/${material}`).xp(0.7).id(`allthemods:processing/${material}/ingot/from_dust_smelting`)
    }
  })
})
