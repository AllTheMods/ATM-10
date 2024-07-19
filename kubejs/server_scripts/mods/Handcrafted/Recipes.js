// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
  allthemods.replaceInput({ id: 'handcrafted:acacia_cupboard' }, 'minecraft:acacia_planks', 'minecraft:acacia_slab')
  allthemods.replaceInput({ id: 'handcrafted:bamboo_cupboard' }, 'minecraft:bamboo_planks', 'minecraft:bamboo_slab')
  allthemods.replaceInput({ id: 'handcrafted:birch_cupboard' }, 'minecraft:birch_planks', 'minecraft:birch_slab')
  allthemods.replaceInput({ id: 'handcrafted:cherry_cupboard' }, 'minecraft:cherry_planks', 'minecraft:cherry_slab')
  allthemods.replaceInput({ id: 'handcrafted:crimson_cupboard' }, 'minecraft:crimson_planks', 'minecraft:crimson_slab')
  allthemods.replaceInput({ id: 'handcrafted:dark_oak_cupboard' }, 'minecraft:dark_oak_planks', 'minecraft:dark_oak_slab')
  allthemods.replaceInput({ id: 'handcrafted:jungle_cupboard' }, 'minecraft:jungle_planks', 'minecraft:jungle_slab')
  allthemods.replaceInput({ id: 'handcrafted:mangrove_cupboard' }, 'minecraft:mangrove_planks', 'minecraft:mangrove_slab')
  allthemods.replaceInput({ id: 'handcrafted:oak_cupboard' }, 'minecraft:oak_planks', 'minecraft:oak_slab')
  allthemods.replaceInput({ id: 'handcrafted:spruce_cupboard' }, 'minecraft:spruce_planks', 'minecraft:spruce_slab')
  allthemods.replaceInput({ id: 'handcrafted:warped_cupboard' }, 'minecraft:warped_planks', 'minecraft:warped_slab')
  allthemods.forEachRecipe({id: /handcrafted:.*_sheet$/}, (recipe) => {
    let temp_array = JSON.parse(recipe.json).ingredients
    temp_array.push(temp_array[0])
    recipe.set("ingredients", temp_array)
    recipe.set("result", recipe.get("result").withCount(10))
  })
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
