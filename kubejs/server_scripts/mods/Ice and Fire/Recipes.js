// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
  allthemods.shapeless("8x kubejs:fire_eye", ["kubejs:fire_pearl", "iceandfire:dragonbone"])
  allthemods.shapeless("8x kubejs:ice_eye", ["kubejs:ice_pearl", "iceandfire:dragonbone"])
  allthemods.shapeless("8x kubejs:lightning_eye", ["kubejs:lightning_pearl", "iceandfire:dragonbone"])

  ;['copper_sword', 'copper_pickaxe', 'copper_axe', 'copper_shovel', 'copper_hoe',
    'armor_copper_metal_helmet', 'armor_copper_metal_chestplate', 'armor_copper_metal_leggings', 'armor_copper_metal_boots'
  ].forEach(id => allthemods.remove({ id: `iceandfire:${id}` }))

  allthemods.replaceInput({ id: 'iceandfire:jar_empty' }, '#minecraft:planks',
    Ingredient.of('#minecraft:planks').except('forbidden_arcanus:edelwood_planks'))
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
