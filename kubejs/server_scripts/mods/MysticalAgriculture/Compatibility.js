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
  {resource: 'quartz', essence: 'tertium'},
  {resource: 'fluorite', essence: 'imperium'}
]

ServerEvents.recipes(allthemods => { 

function mysticalTags(resource, tag, essence, tags){
  
  let recipeEssence = ''
  let recipeTag = ''
  let recipeSeed = ''

  if(tags === 'x'){
    recipeEssence = essence
    recipeTag = tag
    recipeSeed = resource
  }
  else{
    recipeEssence = (`mysticalagriculture:${essence}_essence`)
    recipeTag = (`${tag}${resource}`)
    recipeSeed = (`mysticalagriculture:${resource}_seeds`)
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
  mysticalTags(ingots[i].resource, 'c:ingots/', ingots[i].essence)}

for (let i=0; i < gems.length; i++){
  mysticalTags(gems[i].resource, 'c:gems/', gems[i].essence)}

  mysticalTags('mysticalagriculture:wood_seeds', 'minecraft:logs', 'mysticalagriculture:inferium_essence', 'x')
})