/*
 This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
 As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
  Mekanism recipes for processing stack
  Authored by EnigmaQuip

  DO NOT EDIT BELOW
  only the startup script should need editing
*/

ServerEvents.recipes(allthemods => {
  global.mekStackAdditions.forEach(entry => {
    let material = entry.material

    let dust = AlmostUnified.getTagTargetItem(`c:dusts/${material}`)
    if (entry.makeDust) {
      dust = Item.of(`kubejs:${material}_dust`)
    } else if (dust.isEmpty() && !Ingredient.of(`#c:dusts/${material}`).isEmpty()) {
      dust = Ingredient.of(`#c:dusts/${material}`).getFirst()
    }
    let hasDust = !dust.isEmpty()

    //crush ingot if ingot exists and no mek crushing exists for it
    if(AlmostUnified.getTagTargetItem(`c:ingots/${material}`)){
      if(!allthemods.countRecipes({ input: `#c:ingots/${material}`, type: `mekanism:crushing`})){
      allthemods.custom({
        type: 'mekanism:crushing',
        input: {
          count: 1,
          tag: `c:ingots/${material}`
        },
        output: {
          count: 1,
          id: dust.id
        }
      }).id(`allthemods:processing/${material}/dust/from_ingot`)
      }}

    //all processing for storage blocks
    if (!Ingredient.of(`#c:storage_blocks/raw_${material}`).isEmpty()) {
      allthemods.custom({
      type: 'mekanism:dissolution',
      chemical_input: {
        amount: 2,
        chemical: 'mekanism:sulfuric_acid'
      },
      item_input: {
        count: 1,
        tag: `c:storage_blocks/raw_${material}`
      },
      output: {
        amount: 6000,
        id: `kubejs:dirty_${material}`
      },  "per_tick_usage": true
      }).id(`allthemods:processing/${material}/slurry/dirty/from_raw_block`)

      allthemods.custom({
        type: 'mekanism:injecting',
        chemical_input: {
          amount: 2,
          chemical: 'mekanism:hydrogen_chloride'
        },
        item_input: {
          count: 1,
          tag: `c:storage_blocks/raw_${material}`
        },
        output: {
          count: 24,
          id: `kubejs:${material}_shard`
        },  "per_tick_usage": true
      }).id(`allthemods:processing/${material}/shard/from_raw_block`)

      allthemods.custom({
        chemical_input: {
          amount: 2,
          chemical: 'mekanism:oxygen'
        },
        type: 'mekanism:purifying',
        item_input: {
          count: 1,  
          tag: `c:storage_blocks/raw_${material}`
        },
        output: {
          count: 18,
          id: `kubejs:${material}_clump`
        },  "per_tick_usage": true
      }).id(`allthemods:processing/${material}/clump/from_raw_block`)

      if (hasDust) {
        allthemods.custom({
          type: 'mekanism:enriching',
          input: {
            count: 1,  
            tag: `c:storage_blocks/raw_${material}`
          },
          output: {
            count: 12,
            id: dust.id
          }
        }).id(`allthemods:processing/${material}/dust/from_raw_block`)
      }
    }

    //all processing for ore blocks
    if (!Ingredient.of(`#c:ores/${material}`).isEmpty()) {
      allthemods.custom({
        type: 'mekanism:dissolution',
        chemical_input: {
          amount: 1,
          chemical: 'mekanism:sulfuric_acid'
        },
        item_input: {
          count: 1,
          tag: `c:ores/${material}`
        },
        output: {
          amount: 1000,
          id: `kubejs:dirty_${material}`
        },  "per_tick_usage": true
      }).id(`allthemods:processing/${material}/slurry/dirty/from_ore`)

      allthemods.custom({
        chemical_input: {
          amount: 1,
          chemical: 'mekanism:hydrogen_chloride'
        },
        type: 'mekanism:injecting',
        item_input: {
          amount: 1,  
          tag: `c:ores/${material}`
        },
        output: {
          count: 4,
          id: `kubejs:${material}_shard`
        },  "per_tick_usage": true
      }).id(`allthemods:processing/${material}/shard/from_ore`)

      allthemods.custom({
        type: 'mekanism:purifying',
        chemical_input: {
          amount: 1,
          chemical: 'mekanism:oxygen'
        },
        item_input: {
          count: 1,
          tag: `c:ores/${material}`
        },
        output: {
          count: 3,
          id: `kubejs:${material}_clump`
        },  "per_tick_usage": true
      }).id(`allthemods:processing/${material}/clump/from_ore`)
      
      if (hasDust) {
        allthemods.custom({
          type: 'mekanism:enriching',
          input: {
            count: 1,  
            tag: `c:ores/${material}`
          },
          output: {
            count: 2,
            id: dust.id
          }
        }).id(`allthemods:processing/${material}/dust/from_ore`)
      }
    }

    //all processing from raw material
    if (!Ingredient.of(`#c:raw_materials/${material}`).isEmpty()) {
      allthemods.custom({
        type: 'mekanism:dissolution',
        chemical_input: {
          amount: 1,
          chemical: 'mekanism:sulfuric_acid'
        },
        item_input: {
          count: 3,
          tag: `c:raw_materials/${material}`
        },
        output: {
          amount: 2000,
          id: `kubejs:dirty_${material}`
        },  "per_tick_usage": true
      }).id(`allthemods:processing/${material}/slurry/dirty/from_raw_ore`)

      allthemods.custom({
        type: 'mekanism:injecting',
        chemical_input: {
          amount: 1,
          chemical: 'mekanism:hydrogen_chloride'
        },
        item_input: {
          count: 3,
          tag: `c:raw_materials/${material}`
        },
        output: {
          count: 8,
          id: `kubejs:${material}_shard`
        },  "per_tick_usage": true
      }).id(`allthemods:processing/${material}/shard/from_raw_ore`)

      allthemods.custom({
        type: 'mekanism:purifying',
        chemical_input: {
          amount: 1,
          chemical: 'mekanism:oxygen'
        },
        item_input: {
          count: 1,
          tag: `c:raw_materials/${material}`
        },
        output: {
          count: 2,
          id: `kubejs:${material}_clump`
        },  "per_tick_usage": true
      }).id(`allthemods:processing/${material}/clump/from_raw_ore`)

      if (hasDust) {
        allthemods.custom({
          type: 'mekanism:enriching',
          input: {
            count: 3,
            tag: `c:raw_materials/${material}`
          },
          output: {
            count: 4,
            id: dust.id
          }
        }).id(`allthemods:processing/${material}/dust/from_raw_ore`)
      }
    }

    //washing dirty slurry 
    allthemods.custom({
      type: 'mekanism:washing',
      chemical_input: {
        amount: 5,
        chemical: `kubejs:dirty_${material}`
      },
      fluid_input: {
        amount: 25,
        tag: 'minecraft:water'
      },
      output: {
        amount: 3,
        id: `kubejs:clean_${material}`        
      }
    }).id(`allthemods:processing/${material}/slurry/clean`)

    //crystallizing from clean slurry
    allthemods.custom({
      type: 'mekanism:crystallizing',
      input: {
        amount: 200,
        chemical: `kubejs:clean_${material}`
      },
      output: {
        count: 1,
        id: `kubejs:${material}_crystal`
      },  "per_tick_usage": true
    }).id(`allthemods:processing/${material}/crystal/from_slurry`)

    //shardifying from crystals
    allthemods.custom({
      type: 'mekanism:injecting',
      chemical_input: {
        amount: 1,
        chemical: 'mekanism:hydrogen_chloride'
      },      
      item_input: {
        count: 1,
        tag: `c:crystals/${material}`
      },
      output: {
        count: 2,
        id: `kubejs:${material}_shard`
      },  "per_tick_usage": true
    }).id(`allthemods:processing/${material}/shard/from_crystal`)

    //clumps from shards
    allthemods.custom({
      type: 'mekanism:purifying',
      chemical_input: {
        amount: 1,
        chemical: 'mekanism:oxygen'
      },
      item_input: {
        count: 1,  
        tag: `c:shards/${material}`
      },
      output: {
        count: 1,
        id: `kubejs:${material}_clump`
      },  "per_tick_usage": true
    }).id(`allthemods:processing/${material}/clump/from_shard`)

    //dirty dust from clumps
    allthemods.custom({
      type: 'mekanism:crushing',
      input: {
        count: 1,
        tag: `c:clumps/${material}`
      },
      output: {
        count: 2,
        id: `kubejs:${material}_dirty_dust`
      }
    }).id(`allthemods:processing/${material}/dirty_dust/from_clump`)

    //dust from dirty dust
    if (hasDust) {
      allthemods.custom({
        type: 'mekanism:enriching',
        input: {
          count: 4,
          tag: `c:dirty_dusts/${material}`
        },
        output: {
          count: 3,
          id: dust.id
        }
      }).id(`allthemods:processing/${material}/dust/from_dirty_dust`)
    }
  })
})