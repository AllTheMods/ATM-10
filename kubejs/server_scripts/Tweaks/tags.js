// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.tags('block', allthemods => {
  // Waystones
  allthemods.add('ftbchunks:interact_whitelist', ['@waystones'])

  // Extreme Reactors
  allthemods.add('c:storage_blocks/yellorium', 'alltheores:uranium_block' )
})

ServerEvents.tags('item', allthemods => {
  // Extreme Reactors
  allthemods.add('c:ingots/yellorium', 'alltheores:uranium_ingot' )
  allthemods.add('c:storage_blocks/yellorium', 'alltheores:uranium_block' )
 
 //Foods (I added so my quantum armor can eat them from AE2) 
  allthemods.add('c:foods', [
      'relics:infinity_ham',
      'artifacts:eternal_steak',
      ])

  // Tiny Coal
  allthemods.add('atm10:tiny_coals', [
    'utilitarian:tiny_coal',
    'actuallyadditions:tiny_coal',
  ])
  allthemods.add('atm10:tiny_charcoals', [
    'utilitarian:tiny_charcoal',
    'actuallyadditions:tiny_charcoal',
  ])

  // Allthemodium Alloy Dusts
  allthemods.add('c:dusts/unobtainium_allthemodium_alloy', 'allthemodium:unobtainium_allthemodium_alloy_dust')
  allthemods.add('c:dusts/unobtainium_vibranium_alloy', 'allthemodium:unobtainium_vibranium_alloy_dust')
  allthemods.add('c:dusts/vibranium_allthemodium_alloy', 'allthemodium:vibranium_allthemodium_alloy_dust')
  allthemods.add('c:dusts', [
    '#c:dusts/unobtainium_allthemodium_alloy',
    '#c:dusts/unobtainium_vibranium_alloy',
    '#c:dusts/vibranium_allthemodium_alloy',
  ])

  allthemods.add('c:storage_blocks', '#c:storage_blocks/raw_crimson_iron')
  allthemods.add('c:storage_blocks', '#c:storage_blocks/raw_azure_silver')
  allthemods.add('c:ores/cinnabar', 'alltheores:cinnabar_ore')
  
  //Ars Elemental Books
  allthemods.add('minecraft:bookshelf_books', 'ars_elemental:air_caster_tome')
  allthemods.add('minecraft:bookshelf_books', 'ars_elemental:fire_caster_tome')
  allthemods.add('minecraft:bookshelf_books', 'ars_elemental:water_caster_tome')
  allthemods.add('minecraft:bookshelf_books', 'ars_elemental:earth_caster_tome')
  allthemods.add('minecraft:bookshelf_books', 'ars_elemental:anima_caster_tome')
  allthemods.add('minecraft:bookshelf_books', 'ars_elemental:manipulation_caster_tome')
})

ServerEvents.tags('entity_type', allthemods => {
  // Productive Bees
  allthemods.add('justdirethings:paradox_deny', /productivebees:/);
  allthemods.add('industrialforegoing:mob_duplicator_blacklist', /productivebees:/)

  // Allthemodium
  allthemods.add('justdirethings:paradox_deny', 'allthemodium:piglich');
  allthemods.add('industrialforegoing:mob_duplicator_blacklist', 'allthemodium:piglich')

  // Occultism
  allthemods.add('justdirethings:paradox_deny', /occultism:/);
  allthemods.add('industrialforegoing:mob_duplicator_blacklist', /occultism:/)
});

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
