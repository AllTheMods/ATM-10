// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {

  // Snow Fixes
  allthemods.remove({ id: 'allthecompressed:compress/snow_1x' })
  allthemods.remove({ id: 'allthecompressed:decompress/snow_1x' })
  allthemods.shapeless('9x minecraft:snow_block', ['allthecompressed:snow_1x'])
  allthemods.shapeless('allthecompressed:snow_1x', ['9x minecraft:snow_block']).id(`allthecompressed:compress/snow_1x_manual_only`)

  let $HashSet = Java.loadClass("java.util.HashSet")

  const blockedMods = new $HashSet(['modern_industrialization', 'mysticalagriculture', 'mysticalagradditions', 'extendedae', 'mekanism'])
  let materials = Utils.newMap()

  Ingredient.of('#c:ingots').displayStacks.stream().map(stack => stack.idLocation).forEach(id => {
    let resource = id.path
    if (!blockedMods.contains(id.namespace)) {

      resource = resource.replace('ingot_', '')
      resource = resource.replace('_ingot', '')

      let dust = getDustFromMaterial(id.namespace, resource)
      if (dust == null) return
      if (resource == "awakened_draconium") resource = "draconium_awakened" // flip draconium name because :shrug:
      materials.putIfAbsent(resource, dust)
    }
  })

  materials.forEach((resource, dust) => {
    if (!allthemods.countRecipes({ input: `#c:ingots/${resource}`, output: `#c:dusts/${resource}`, type: 'minecraft:crafting_shapeless' })) {
      let finalDust = AlmostUnified.getTagTargetItem(`c:dusts/${resource}`)
      if (finalDust.isEmpty()) finalDust = Item.of(dust)
      console.log(`Adding dust recipe: ${dust} with resource: ${resource}`)
      allthemods.shapeless(dust, [`#c:ingots/${resource}`, '#alltheores:ore_hammers']).id(`alltheores:processing/ore_hammer/${resource}_dust_from_ingot`)
    }
  })
})

function getDustFromMaterial(mod, resource) {
  let $Stream = Java.loadClass("java.util.stream.Stream")
  return $Stream.of([
    `alltheores:${resource}_dust`,
    `${mod}:${resource}_dust`,
    `${mod}:dust_${resource}`
  ]).filter(str => Item.exists(str)).findFirst().orElse(null)
}

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.