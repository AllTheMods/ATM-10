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
      dust = Item.of(`kubejs:dust_${material}`)
    } else if (dust.isEmpty() && !Ingredient.of(`#c:dusts/${material}`).isEmpty()) {
      dust = Ingredient.of(`#c:dusts/${material}`).getFirst()
    }
    let hasDust = !dust.isEmpty()

    if (!Ingredient.of(`#c:storage_blocks/raw_${material}`).isEmpty()) {
      allthemods.custom({
        type: 'mekanism:dissolution',
          item_input: {
            tag: `c:storage_blocks/raw_${material}`
          },
        output: {
          id: `kubejs:dirty_${material}`,
          amount: 6000,
        },
        chemical_input: {
          amount: 2,
          chemical: 'mekanism:sulfuric_acid'
        }
      }).id(`allthemods:processing/${material}/slurry/dirty/from_raw_block`)

      allthemods.custom({
        type: 'mekanism:injecting',
          item_input: {
            tag: `c:storage_blocks/raw_${material}`
          },
        chemical_input: {
          amount: 2,
          chemical: 'mekanism:hydrogen_chloride'
        },
        output: {
          id: `kubejs:shard_${material}`,
          count: 24
        }
      }).id(`allthemods:processing/${material}/shard/from_raw_block`)

      allthemods.custom({
        type: 'mekanism:purifying',
          item_input: {
            tag: `c:storage_blocks/raw_${material}`
        },
        chemical_input: {
          amount: 2,
          chemical: 'mekanism:oxygen'
        },
        output: {
          id: `kubejs:clump_${material}`,
          count: 18
        }
      }).id(`allthemods:processing/${material}/clump/from_raw_block`)

      if (hasDust) {
        allthemods.custom({
          type: 'mekanism:enriching',
            item_input: {
              tag: `c:storage_blocks/raw_${material}`
          },
          output: {
            id: dust.id,
            count: 12
          }
        }).id(`allthemods:processing/${material}/dust/from_raw_block`)
      }
    }

    if (!Ingredient.of(`#c:ores/${material}`).isEmpty()) {
      allthemods.custom({
        type: 'mekanism:dissolution',
        item_input: {
            tag: `c:ores/${material}`
        },
        output: {
          id: `kubejs:dirty_${material}`,
          amount: 1000,
        },
        chemical_input: {
          amount: 1,
          chemical: 'mekanism:sulfuric_acid'
        }
      }).id(`allthemods:processing/${material}/slurry/dirty/from_ore`)

      allthemods.custom({
        type: 'mekanism:injecting',
          item_input: {
            tag: `c:ores/${material}`
        },
        chemical_input: {
          amount: 1,
          chemical: 'mekanism:hydrogen_chloride'
        },
        output: {
          id: `kubejs:shard_${material}`,
          count: 4
        }
      }).id(`allthemods:processing/${material}/shard/from_ore`)

      allthemods.custom({
        type: 'mekanism:purifying',
        item_input: {
            tag: `c:ores/${material}`
        },
        chemical_input: {
          amount: 1,
          chemical: 'mekanism:oxygen'
        },
        output: {
          id: `kubejs:clump_${material}`,
          count: 3
        }
      }).id(`allthemods:processing/${material}/clump/from_ore`)
      
      if (hasDust) {
        allthemods.custom({
          type: 'mekanism:enriching',
          input: {
              tag: `c:ores/${material}`
          },
          output: {
            id: dust.id,
            count: 2
          }
        }).id(`allthemods:processing/${material}/dust/from_ore`)
      }
    }

    if (!Ingredient.of(`#c:raw_materials/${material}`).isEmpty()) {
      allthemods.custom({
        type: 'mekanism:dissolution',
        item_input: {
          amount: 3,
            tag: `c:raw_materials/${material}`
        },
        output: {
          id: `kubejs:dirty_${material}`,
          amount: 2000,
        },
        chemical_input: {
          amount: 1,
          chemical: 'mekanism:sulfuric_acid'
        }
      }).id(`allthemods:processing/${material}/slurry/dirty/from_raw_ore`)

      allthemods.custom({
        type: 'mekanism:injecting',
        item_input: {
          amount: 3,
            tag: `c:raw_materials/${material}`
        },
        chemical_input: {
          amount: 1,
          chemical: 'mekanism:hydrogen_chloride'
        },
        output: {
          id: `kubejs:shard_${material}`,
          count: 8
        }
      }).id(`allthemods:processing/${material}/shard/from_raw_ore`)

      allthemods.custom({
        type: 'mekanism:purifying',
        item_input: {
            tag: `c:raw_materials/${material}`
        },
        chemical_input: {
          amount: 1,
          chemical: 'mekanism:oxygen'
        },
        output: {
          id: `kubejs:clump_${material}`,
          count: 2
        }
      }).id(`allthemods:processing/${material}/clump/from_raw_ore`)

      if (hasDust) {
        allthemods.custom({
          type: 'mekanism:enriching',
          input: {
            amount: 3,
              tag: `c:raw_materials/${material}`
          },
          output: {
            id: dust.id,
            count: 4
          }
        }).id(`allthemods:processing/${material}/dust/from_raw_ore`)
      }
    }

    allthemods.custom({
      type: 'mekanism:washing',
      fluid_input: {
        amount: 5,
        tag: 'minecraft:water'
      },
      chemical_input: {
        amount: 1,
        chemical: `kubejs:dirty_${material}`
      },
      output: {
        id: `kubejs:clean_${material}`,
        amount: 1
      }
    }).id(`allthemods:processing/${material}/slurry/clean`)

    allthemods.custom({
      type: 'mekanism:crystallizing',
      input: {
        amount: 200,
        chemical: `kubejs:clean_${material}`
      },
      output: {
        id: `kubejs:crystal_${material}`
      }
    }).id(`allthemods:processing/${material}/crystal/from_slurry`)

    allthemods.custom({
      type: 'mekanism:injecting',
      item_input: {
          tag: `mekanism:crystals/${material}`
      },
      chemical_input: {
        amount: 1,
        chemical: 'mekanism:hydrogen_chloride'
      },
      output: {
        id: `kubejs:shard_${material}`
      }
    }).id(`allthemods:processing/${material}/shard/from_crystal`)

    allthemods.custom({
      type: 'mekanism:purifying',
      item_input: {
          tag: `mekanism:shards/${material}`
      },
      chemical_input: {
        amount: 1,
        chemical: 'mekanism:oxygen'
      },
      output: {
        id: `kubejs:clump_${material}`
      }
    }).id(`allthemods:processing/${material}/clump/from_shard`)

    allthemods.custom({
      type: 'mekanism:crushing',
      input: {
          tag: `mekanism:clumps/${material}`
      },
      output: {
        id: `kubejs:dirty_dust_${material}`
      }
    }).id(`allthemods:processing/${material}/dirty_dust/from_clump`)
    if (hasDust) {
      allthemods.custom({
        type: 'mekanism:enriching',
        input: {
            tag: `mekanism:dirty_dusts/${material}`
        },
        output: {
          id: dust.id
        }
      }).id(`allthemods:processing/${material}/dust/from_dirty_dust`)
    }
  })
})
