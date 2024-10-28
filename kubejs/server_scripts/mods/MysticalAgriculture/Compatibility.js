//ingots to be switched to tags
const ingots = [
  {resource: 'aluminum', essence: 'prudentium'},
  {resource: 'copper', essence: 'tertium'},
  {resource: 'iron', essence: 'tertium'},
  {resource: 'zinc', essence: 'tertium'},
  {resource: 'silver', essence: 'tertium'},
  {resource: 'lead', essence: 'tertium'},
  //{resource: 'brass', essence: 'tertium'},
  //{resource: 'bronze', essence: 'tertium'},
  {resource: 'tin', essence: 'tertium'},
  {resource: 'nickel', essence: 'imperium'},
  {resource: 'uranium', essence: 'imperium'},
  {resource: 'gold', essence: 'imperium'},
  {resource: 'osmium', essence: 'imperium'},
  //{resource: 'invar', essence: 'imperium'},
  {resource: 'iridium', essence: 'supremium'},
  {resource: 'platinum', essence: 'supremium'}
]

//resources to use blocks instead of ingots
const useBlocks = [
  {resource:"steel", essence:"imperium"},
  {resource:"bronze", essence:"tertium"},
  {resource:"brass", essence:"tertium", block:"alltheores:brass_block"},
  {resource:"nitro_crystal", essence:"insanium"},
  {resource:"spirited_crystal", essence:"supremium"},
  {resource:"niotic_crystal", essence:"supremium"},
  {resource:"blazing_crystal", essence:"imperium"},
  {resource:"energized_steel", essence:"imperium"},
  {resource:"certus_quartz", essence:"tertium", block:"ae2:quartz_block"},
  {resource:"fluix", essence:"imperium", block:"ae2:fluix_block"},
  {resource:"soularium", essence:"imperium"},
  {resource:"conductive_alloy", essence:"tertium"},
  {resource:"copper_alloy", essence:"tertium"},
  {resource:"end_steel", essence:"supremium"},
  {resource:"redstone_alloy", essence:"tertium"},
  {resource:"vibrant_alloy", essence:"supremium"},
  {resource:"dark_steel", essence:"imperium"},
  {resource:"pulsating_alloy", essence:"imperium"},
  {resource:"energetic_alloy", essence:"imperium"},
  {resource:"refined_glowstone", essence:"imperium", block:"mekanism:block_refined_glowstone"},
  {resource:"refined_obsidian", essence:"imperium", block:"mekanism:block_refined_obsidian"},
  {resource:"constantan", essence:"imperium"},
  {resource:"cyanite", essence:"supremium", block:"bigreactors:cyanite_block"},
  {resource:"graphite", essence:"tertium", block:"bigreactors:graphite_block"},
  {resource:"compressed_iron", essence:"imperium"},
  {resource:"electrum", essence:"imperium"},
  {resource:"invar", essence: "imperium"}
]

//dusts to be switched to tags
const dusts = [
  {resource: 'sulfur', essence: 'prudentium'},
  {resource: 'saltpeter', essence: 'prudentium'},

]

//gems to be switched to tags
const gems = [
  {resource: 'quartz', essence: 'tertium', seed: 'nether_quartz'},
  {resource: 'fluorite', essence: 'imperium', seed: undefined}
]

//ingredients in a different format to use tags
const different = [
  {tag: 'minecraft:logs', essence: 'inferium', seed: 'wood'},
  {tag: 'c:silicon', essence: 'prudentium', seed: 'silicon'}
]

ServerEvents.recipes(allthemods => { 

function mysticalTags(material, tag, tags){
  
  let recipeEssence = ''
  let recipeTag = ''
  let recipeSeed = ''

  //for ingredients in a different format
  if(tags === 'different'){
    recipeEssence = (`mysticalagriculture:${material.essence}_essence`)
    recipeTag = material.tag
    recipeSeed = (`mysticalagriculture:${material.seed}_seeds`)
  }
  //for ingots/gems (and probably dusts)
  else{
    recipeEssence = (`mysticalagriculture:${material.essence}_essence`)
    recipeTag = (`${tag}${material.resource}`)
    if(material.seed !== undefined){recipeSeed = (`mysticalagriculture:${material.seed}_seeds`)}
    else{recipeSeed = (`mysticalagriculture:${material.resource}_seeds`)}
  }

  allthemods.remove({output: recipeSeed})
  
  if(tags === 'block'){ 
    if (material.essence == 'insanium') {
      recipeEssence = `mysticalagradditions:insanium_essence`
    } else {
      recipeEssence = `mysticalagriculture:${material.essence}_essence`
    }

    if (Item.exists(`allthecompressed:${material.resource}_block_1x`)){
      // use the allthecompressed block if it exists
      recipeTag = `allthecompressed:${material.resource}_block_1x`
    } else if (material.block !== undefined){
      // else use the provided block in useBlocks
      recipeTag = material.block
    } else {
      // else neither exists, fallback to the first thing we can find via the storage_blocks tag
      recipeTag = Ingredient.of(`#c:storage_blocks/${material.resource}`).getItemIds()[0]
    }
  allthemods.custom({
    type: "mysticalagriculture:infusion",
    input: { item: "mysticalagriculture:prosperity_seed_base" },
    ingredients: [
      {item: recipeTag},
      {item: recipeEssence},
      {item: recipeTag},
      {item: recipeEssence},
      {item: recipeTag},
      {item: recipeEssence},
      {item: recipeTag},
      {item: recipeEssence}
    ],
    result: {
      id: recipeSeed
    }
  })}
  else{
  allthemods.custom({
    type: "mysticalagriculture:infusion",
    input: { item: "mysticalagriculture:prosperity_seed_base" },
    ingredients: [
      {tag: recipeTag},
      {item: recipeEssence},
      {tag: recipeTag},
      {item: recipeEssence},
      {tag: recipeTag},
      {item: recipeEssence},
      {tag: recipeTag},
      {item: recipeEssence}
    ],
    result: {
      id: recipeSeed
    }
  })}
}

for (let i=0; i < ingots.length; i++){
  mysticalTags(ingots[i], 'c:ingots/')}

for (let i=0; i < gems.length; i++){
  mysticalTags(gems[i], 'c:gems/')}

for (let i=0; i < dusts.length; i++){
  mysticalTags(dusts[i], 'c:dusts/')}

for (let i=0; i < different.length; i++){
  mysticalTags(different[i], '', 'different')}

for (let i=0; i < useBlocks.length; i++){
  mysticalTags(useBlocks[i], '', 'block')}
})