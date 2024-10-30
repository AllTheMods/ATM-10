const inputResource = [
  {material: 'unobtainium', out3: null, modID: 'allthemodium:'},
  {material: 'vibranium', out3: null, modID: 'allthemodium:'},
  {material: 'allthemodium', out3: null, modID: 'allthemodium:'},
  {material: 'iridium', out3:{resource: 'platinum_dust', count: 1, chance: 0.05}, modID: 'alltheores:'},
  {material: 'zinc', out3:{resource: 'sulfur', count: 1, chance: 0.10}, modID: 'alltheores:'},
  {material: 'uranium', out3:{resource: 'lead_dust', count: 1, chance: 0.10}, modID: 'alltheores:'},
  {material: 'tin', out3: null, modID: 'alltheores:'},
  {material: 'silver', out3:{resource: 'lead_dust', count: 1, chance: 0.15}, modID: 'alltheores:'},
  {material: 'platinum', out3:{resource: 'iridium_dust', count: 1, chance: 0.05}, modID: 'alltheores:'},
  {material: 'osmium', out3: null, modID: 'alltheores:'},
  {material: 'nickel', out3:{resource: 'osmium_dust', count: 1, chance: 0.15}, modID: 'alltheores:'},
  {material: 'lead', out3:{resource: 'sulfur', count: 1, chance: 0.10}, modID: 'alltheores:'},
  {material: 'aluminum', out3: null, modID: 'alltheores:'},
  {material: 'crimson_iron', out3: null, modID: 'silentgear:'},
  {material: 'azure_silver', out3: null, modID: 'silentgear:'},
  {material: 'blaze_gold', out3: null, modID: 'silentgear:'},
  {material: 'azure_electrum', out3: null, modID: 'silentgear:'},
  {material: 'crimson_steel', out3: null, modID: 'silentgear:'},
  {material: 'steel', out3: null, modID: 'alltheores:'},
  {material: 'netherite', out3: null, modID: 'alltheores:'}
]

ServerEvents.recipes(allthemods => {
  
    inputResource.forEach(sag => {
    let outID = ''
    //raw material sagging with sideproducts
    if(sag.out3 !== null){
    if(Item.exists(`${sag.modID}raw_${sag.material}`) && Item.exists(`${sag.modID}${sag.material}_dust`)){
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
    }).id(`sag_milling/raw_${sag.material}`)}}}
    //raw material sagging without sideproducts
    else{
    if(Item.exists(`${sag.modID}raw_${sag.material}`) && Item.exists(`${sag.modID}${sag.material}_dust`)){
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
    }).id(`sag_milling/raw_${sag.material}`)}}}
    //ore sagging
    if(Item.exists(`${sag.modID}${sag.material}_ore`) && Item.exists(`${sag.modID}raw_${sag.material}`)){
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
    }).id(`sag_milling/${sag.material}_ore`)}}
    //ingot sagging
    if(Item.exists(`${sag.modID}${sag.material}_ingot`) && Item.exists(`${sag.modID}${sag.material}_dust`)){
    if(!allthemods.countRecipes({ input: `#c:ingots/${sag.material}`, type: `enderio:sag_milling`})){
      allthemods.custom({
        type: 'enderio:sag_milling',
        energy: 2400,
        input: {
          tag: `c:ingots/${sag.material}`
        },
        outputs: [
          {
            item: {
              count: 1,
              id: `${sag.modID}${sag.material}_dust`
            }
          }
        ]
      }).id(`sag_milling/${sag.material}_ingot`)}}
  })
})