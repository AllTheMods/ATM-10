// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
  function arcfurnace(input, energy, output) {
    allthemods.custom(
      {
        type: "immersiveengineering:arc_furnace",
        additives: [],
        energy: energy,
        input: Ingredient.of(input).toJson(),
        results: [
        {
          basePredicate: {
            item: output.item
          },
          count: output.count || 1
        }
        ],
        slag: Ingredient.of(output.slag).toJson() || "" ,
        time: 100
    }).id(`allthemods:arcfurnace/${input.replace(/^.*?:/, '')}_to_${output.item.replace(/^.*?:/, '')}`)
  }

  const ieIngots = ['electrum', 'aluminum', 'lead', 'silver', 'nickel', 'uranium', 'constantan', 'steel', 'osmium', 'platinum', 'tin', 'zinc']

  ieIngots.forEach(material => {
    //add sheetmetal scrapping back
    if(Item.of(`immersiveengineering:sheetmetal_${material}`) !== undefined){
    arcfurnace(`immersiveengineering:sheetmetal_${material}`, 51200, {item: `alltheores:${material}_ingot`})
    arcfurnace(`immersiveengineering:slab_sheetmetal_${material}`, 51200, {item: `alltheores:${material}_nugget`, count: 4})}
    //replace nuggets from rod scrapping recipes
    if(Item.of(`immersiveengineering:nugget_${material}`) !== undefined){ allthemods.replaceOutput({output: `immersiveengineering:nugget_${material}`}, `immersiveengineering:nugget_${material}`, `alltheores:${material}_nugget`)}
    //remove duplicate raw block / raw ore recipes
    allthemods.remove({id: `immersiveengineering:arcfurnace/raw_block_${material}`})
    allthemods.remove({id: `immersiveengineering:arcfurnace/raw_ore_${material}`})
    //replace ingot in ore recipe
    allthemods.remove({id: `immersiveengineering:arcfurnace/ore_${material}`})
    arcfurnace(`#c:ores/${material}`, 102400, {item: `alltheores:${material}_ingot`, count: 2, slag: "#c:slag"})
    //remove duplicate crusher recipes
    allthemods.remove({id: `immersiveengineering:crusher/ore_${material}`})
    allthemods.remove({id: `immersiveengineering:crusher/raw_ore_${material}`})
    allthemods.remove({id: `immersiveengineering:crusher/raw_block_${material}`})
  })

  const ieAlloys = ['invar', 'electrum', 'brass', 'constantan', 'bronze']
  const ieMachines = ['alloysmelter/', 'arcfurnace/alloy_']

  ieAlloys.forEach(alloy => {
    ieMachines.forEach(machine =>{
      //remove duplicate alloy recipes
      allthemods.remove({id:`immersiveengineering:${machine}${alloy}`})
    })
  })

  allthemods.replaceInput({ id: 'immersiveengineering:crafting/toolupgrade_revolver_bayonet' }, 'immersiveengineering:sword_steel', 'mekanismtools:steel_sword')
  allthemods.remove({id: "immersiveengineering:crafting/ingot_uranium_to_storage_uranium"})

  function cloche(input, render, output, soil) {
    if (soil === undefined){soil = 'minecraft:dirt'}
    allthemods.custom(
      {
        type: "immersiveengineering:cloche",
        input: {
          item: input
        },
        render: {
          type: "immersiveengineering:crop",
          block: render
        },
        results: [
          {
            count: 2,
            id: output
          },
          {
            chance: 0.25,
            output: {
              id: input
            }
          }
        ],
        soil: {
          item: soil
        },
        time: 640
      }
    )
  }

  //(Mama's) Herbs and Harvest Seeds
  const hSeeds = ['asparagus', 'barley', 'blackberry', 'blueberry', 'broccoli', 'cabbage', 'cauliflower', 'celery', 'cucumber', 'eggplant', 'green_bean', 'green_pepper', 'lettuce', 'pineapple', 'radish', 'raspberry', 'rye', 'squash', 'strawberry', 'tomato','turnip', 'zucchini']
  const hHerbs = ['basil', 'bay_leaf', 'chive', 'cilantro', 'dill', 'lemongrass', 'mint', 'mustard', 'oregano', 'parsley', 'peppercorn', 'rosemary', 'sage', 'thyme']
  hSeeds.forEach(seed => {
    cloche(`herbsandharvest:${seed}_seeds`, `herbsandharvest:${seed}_plant`, `herbsandharvest:${seed}`)
  })
  hHerbs.forEach(seed => {
    cloche(`herbsandharvest:${seed}_seeds`, `herbsandharvest:${seed}_herb`, `herbsandharvest:fresh_${seed}`)
  })

  //Pam's seeds
  const pamSeeds = []
  let j = 0
  Ingredient.of("#c:seeds").itemIds.forEach(itemId => {
    if (itemId.includes('pamhc2crops'&&'seeditem')){pamSeeds[j] = itemId, j++}  
  })
  pamSeeds.forEach(seed => {
    cloche(seed, seed.replace('seeditem', 'crop').replace(':', ':pam'), seed.replace('seeditem', 'item'))
  })

  //TODO: sushigocrafting, silentgear, undergarden, supplementaries, biomeswevegone, occultism
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.