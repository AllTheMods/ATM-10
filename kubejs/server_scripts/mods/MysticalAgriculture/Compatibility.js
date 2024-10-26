const ingots = [
  {resource: 'aluminum', essence: 'prudentium'},
  {resource: 'copper', essence: 'tertium'},
  {resource: 'iron', essence: 'tertium'},
  {resource: 'zinc', essence: 'tertium'},
  {resource: 'silver', essence: 'tertium'},
  {resource: 'lead', essence: 'tertium'},
  {resource: 'brass', essence: 'tertium'},
  {resource: 'bronze', essence: 'tertium'},
  {resource: 'tin', essence: 'tertium'},
  {resource: 'nickel', essence: 'imperium'},
  {resource: 'uranium', essence: 'imperium'},
  {resource: 'gold', essence: 'imperium'},
  {resource: 'osmium', essence: 'imperium'},
  {resource: 'invar', essence: 'imperium'},
  {resource: 'iridium', essence: 'supremium'},
  {resource: 'platinum', essence: 'supremium'}
]

const gems = [
  {resource: 'quartz', essence: 'tertium', seed: 'nether_quartz'},
  {resource: 'fluorite', essence: 'imperium', seed: undefined}
]

const different = [
  {tag: 'minecraft:logs', essence: 'inferium', seed: 'wood'}
]

ServerEvents.recipes(allthemods => { 

function mysticalTags(material, tag, tags){
  
  let recipeEssence = ''
  let recipeTag = ''
  let recipeSeed = ''

  //for recipes with different format
  if(tags == 'value'){
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
  })
}

for (let i=0; i < ingots.length; i++){
  mysticalTags(ingots[i], 'c:ingots/')}

for (let i=0; i < gems.length; i++){
  mysticalTags(gems[i], 'c:gems/')}

  for (let i=0; i < different.length; i++){
  mysticalTags(different[i], '', 'value')}
})