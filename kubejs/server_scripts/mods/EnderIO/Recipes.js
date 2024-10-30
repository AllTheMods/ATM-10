const inputResource = [
  {material: 'unobtainium', out3: null, modID: 'allthemodium:'},
  {material: 'vibranium', out3: null, modID: 'allthemodium:'},
  {material: 'allthemodium', out3: null, modID: 'allthemodium:'},
  {material: 'iridium', out3:{resource: 'platinum_dust', count: 1, chance: 0.05}, modID: 'alltheores:'},
  {material: 'zinc', out3:{resource: 'sulfur', count: 1, chance: 0.15}, modID: 'alltheores:'},
  {material: 'uranium', out3:{resource: 'lead_dust', count: 1, chance: 0.10}, modID: 'alltheores:'},
  {material: 'tin', out3: null, modID: 'alltheores:'},
  {material: 'silver', out3:{resource: 'lead_dust', count: 1, chance: 0.15}, modID: 'alltheores:'},
  {material: 'platinum', out3:{resource: 'iridium_dust', count: 1, chance: 0.05}, modID: 'alltheores:'},
  {material: 'osmium', out3: null, modID: 'alltheores:'},
  {material: 'nickel', out3:{resource: 'osmium_dust', count: 1, chance: 0.15}, modID: 'alltheores:'},
  {material: 'lead', out3:{resource: 'sulfur', count: 1, chance: 0.15}, modID: 'alltheores:'},
  {material: 'aluminum', out3: null, modID: 'alltheores:'},
  {material: 'crimson_iron', out3: null, modID: 'silentgear:'},
  {material: 'azure_silver', out3: null, modID: 'silentgear:'}
]

ServerEvents.recipes(allthemods => {
  
    inputResource.forEach(sag => {
    //raw material sagging with sideproducts
    if(sag.out3 !== null){
    if(!allthemods.countRecipes({ input: `#c:raw_materials/${sag.material}`, type: `enderio:sag_milling`})){
    allthemods.custom({
      type: 'enderio:sag_milling',
      energy: 2400,
      input: {
        tag: `c:raw_materials/${sag.material}`
      },
      outputs: [
        {
          item: {
            count: 1,
            id: `${sag.modID}${sag.material}_dust`
          }
        },
        {
          chance: 0.25,
          item: {
            count: 1,
            id: `${sag.modID}${sag.material}_dust`
          }
        },
        {
          chance: sag.out3.chance,
          item: {
            count: sag.out3.count,
            id: `${sag.modID}${sag.out3.resource}`
          }
        }
      ]
    }).id(`sag_milling/raw_${sag.material}`)}}
    //raw material sagging without sideproducts
    else{
    if(!allthemods.countRecipes({ input: `#c:raw_materials/${sag.material}`, type: `enderio:sag_milling`})){
    allthemods.custom({
      type: 'enderio:sag_milling',
      energy: 2400,
      input: {
        tag: `c:raw_materials/${sag.material}`
      },
      outputs: [
        {
          item: {
            count: 1,
            id: `${sag.modID}${sag.material}_dust`
          }
        },
        {
          chance: 0.25,
          item: {
            count: 1,
            id: `${sag.modID}${sag.material}_dust`
          }
        }
      ]
    }).id(`sag_milling/raw_${sag.material}`)}}
    //ore sagging
    if(!allthemods.countRecipes({ input: `#c:ores/${sag.material}`, type: `enderio:sag_milling`})){
    allthemods.custom({
      type: 'enderio:sag_milling',
      energy: 2400,
      input: {
        tag: `c:ores/${sag.material}`
      },
      outputs: [
        {
          item: {
            count: 1,
            id: `${sag.modID}raw_${sag.material}`
          }
        },
        {
          chance: 0.33,
          item: {
            count: 1,
            id: `${sag.modID}raw_${sag.material}`
          }
        },
        {
          chance: 0.15,
          item: {
            count: 1,
            id: `minecraft:cobblestone`
          }
        }
      ]
    }).id(`sag_milling/${sag.material}_ore`)}
  })
})