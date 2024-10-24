ServerEvents.recipes(allthemods => { 
  const ingots = ['aluminum', 'copper', 'iron', 'zinc', 'silver', 'lead', 'brass', 'bronze', 'tin', 'nickel', 'uranium', 'gold', 'osmium', 'invar', 'iridium', 'platinum']
  const ingotsEssence = ['prudentium', 'tertium', 'tertium', 'tertium', 'tertium', 'tertium', 'tertium', 'tertium', 'tertium', 'imperium', 'imperium', 'imperium', 'imperium', 'imperium', 'supremium', 'supremium'] 
  const gems = ['quartz', 'certus_quartz']
  const gemsEssence = ['tertium', 'tertium']
  
function mysticalTags(resource, resourceType, essence){
  allthemods.custom({
    type: "mysticalagriculture:infusion",
    input: { item: "mysticalagriculture:prosperity_seed_base" },
    ingredients: [
      {
        tag: resourceType.concat(resource)
      },
      {
        tag: resourceType.concat(resource)
      },
      {
        tag: resourceType.concat(resource)
      },
      {
        tag: resourceType.concat(resource)
      },
      {
        item: 'mysticalagriculture:'.concat(essence.concat('_essence'))
      },
      {
        item: 'mysticalagriculture:'.concat(essence.concat('_essence'))
      },
      {
        item: 'mysticalagriculture:'.concat(essence.concat('_essence'))
      },
      {
        item: 'mysticalagriculture:'.concat(essence.concat('_essence'))
      }
    ],
    result: {
      id: 'mysticalagriculture:'.concat(resource.concat('_seeds'))
    }
  })
}

for (let i=0; i < ingots.length; i++){
  mysticalTags(ingots[i], 'c:ingots/', ingotsEssence[i])}
  
for (let i=0; i < gems.length; i++){
  mysticalTags(gems, 'c:gems/', gemsEssence)}


})