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

  function cloche(crop, mod, soil) {
    if (soil === undefined){soil = 'minecraft:dirt'}
    allthemods.custom(
      {
        type: "immersiveengineering:cloche",
        input: {
          item: `${mod}${crop.seed}`
        },
        render: {
          type: "immersiveengineering:crop",
          block: `${mod}${crop.render}`
        },
        results: [
          {
            count: crop.count || 2,
            id: `${mod}${crop.result}`
          },
          {
            chance: crop.chance || 0.25,
            output: {
              id: `${mod}${crop.seed}`
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
  const hPlants = ['asparagus', 'barley', 'blackberry', 'blueberry', 'broccoli', 'cabbage', 'cauliflower', 'celery', 'cucumber', 'eggplant', 'green_bean', 'green_pepper', 'lettuce', 'pineapple', 'radish', 'raspberry', 'rye', 'squash', 'strawberry', 'tomato','turnip', 'zucchini']
  const hHerbs = ['basil', 'bay_leaf', 'chive', 'cilantro', 'dill', 'lemongrass', 'mint', 'mustard', 'oregano', 'parsley', 'peppercorn', 'rosemary', 'sage', 'thyme']
  const hSeeds = []
  hPlants.forEach(seed => {
    let crop = {seed: `${seed}_seeds`, render: `${seed}_plant`, result: `${seed}`}
    hSeeds.push(crop)
  })
  hHerbs.forEach(seed => {
    let crop = {seed: `${seed}_seeds`, render: `${seed}_herb`, result: `fresh_${seed}`}
    hSeeds.push(crop)
  })
  hSeeds.forEach(crop => {
    let mod = 'herbsandharvest:'
    cloche(crop, mod)
  })
  

  //Pam's seeds
  const pamSeeds = []
  Ingredient.of("#c:seeds").itemIds.forEach(seed => {
    if (seed.includes('pamhc2crops'&&'seeditem')){
      let crop = {seed: seed.replace('pamhc2crops:', ''), render: seed.replace('pamhc2crops', '').replace('seeditem', 'crop').replace(':', 'pam'), result: seed.replace('pamhc2crops:', '').replace('seeditem', 'item')}
      pamSeeds.push(crop)
    }
  })
  pamSeeds.forEach(crop => {
    let mod = 'pamhc2crops:'
    cloche(crop, mod)
  })

  //Sushi seeds
  const sushiPlants = [{seed: 'soy_seeds', render: 'soy_crop', result: 'soy_bean'}, {seed: 'wasabi_seeds', render: 'wasabi_crop', result: 'wasabi_root'}, {seed: 'sesame_seeds', render: 'sesame_crop', result: 'sesame_seed'}, {seed: 'rice_seeds', render: 'rice_crop', result: 'rice'}, {seed: 'cucumber_seeds', render: 'cucumber_crop', result: 'cucumber'}, ]
  sushiPlants.forEach(crop => {
    let mod = 'sushigocrafting:'
    cloche(crop, mod)
  })

  //Silentgear seeds (needs flax too, 3 outputs)
  const silentPlants = [{seed: 'fluffy_seeds', render: 'fluffy_plant', result: 'fluffy_puff'}]
  silentPlants.forEach(crop => {
    let mod = 'silentgear:'
    cloche(crop, mod)
  })

  //Occultism seeds
  const occultSeeds = [{seed: 'datura_seeds', render: 'datura', result: 'datura'}]
  occultSeeds.forEach(crop => {
    let mod = 'occultism:'
    cloche(crop, mod)
  })

  //Supplementaries seeds
  const suppSeeds = [{seed: 'flax_seeds', render: 'flax', result: 'flax'}]
  suppSeeds.forEach(crop => {
    let mod = 'supplementaries:'
    cloche(crop, mod)
  })
  
  //Biomes we've gone seeds
  const biomesSeeds = [{seed: 'pale_pumpkin_seeds', render: 'pale_pumpkin_stem', result: 'pale_pumpkin', chance: 0.01, count: 1}]
  biomesSeeds.forEach(crop => {
    let mod = 'biomeswevegone:'
    cloche(crop, mod)
  })

  //Undergarden seeds
  const underSeeds = [{seed: 'gloomgourd_seeds', render: 'gloomgourd_stem', result: 'gloomgourd', chance: 0.01, count: 1}]
  underSeeds.forEach(crop => {
    let mod = 'undergarden:'
    cloche(crop, mod)
  })
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.