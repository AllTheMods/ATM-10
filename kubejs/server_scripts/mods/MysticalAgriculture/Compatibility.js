ServerEvents.recipes(allthemods => { 
  const ingots = ['aluminum', 'copper', 'iron', 'zinc', 'silver', 'lead', 'brass', 'bronze', 'tin', 'nickel', 'uranium', 'gold', 'osmium', 'invar', 'iridium', 'platinum']
  const essence = ['prudentium', 'tertium', 'tertium', 'tertium', 'tertium', 'tertium', 'tertium', 'tertium', 'tertium', 'imperium', 'imperium', 'imperium', 'imperium', 'imperium', 'supremium', 'supremium']  
  
  for (let i=0; i < ingots.length; i++){  

  //ingots.forEach(ingot => { 
  allthemods.custom({
    type: "mysticalagriculture:infusion",
    input: { item: "mysticalagriculture:prosperity_seed_base" },
    ingredients: [
      {
        tag: 'c:ingots/'.concat(ingots[i])
      },
      {
        tag: 'c:ingots/'.concat(ingots[i])
      },
      {
        tag: 'c:ingots/'.concat(ingots[i])
      },
      {
        tag: 'c:ingots/'.concat(ingots[i])
      },
      {
        item: 'mysticalagriculture:'.concat(essence[i].concat('_essence'))
      },
      {
        item: 'mysticalagriculture:'.concat(essence[i].concat('_essence'))
      },
      {
        item: 'mysticalagriculture:'.concat(essence[i].concat('_essence'))
      },
      {
        item: 'mysticalagriculture:'.concat(essence[i].concat('_essence'))
      }
    ],
    result: {
      id: 'mysticalagriculture:'.concat(ingots[i].concat('_seeds'))
    }
  })
}
})