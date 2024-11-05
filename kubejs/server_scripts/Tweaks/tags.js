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

  // Tiny Coal
  allthemods.add('atm10:tiny_coals', [
    'utilitarian:tiny_coal',
    'actuallyadditions:tiny_coal',
  ])
  allthemods.add('atm10:tiny_charcoals', [
    'utilitarian:tiny_charcoal',
    'actuallyadditions:tiny_charcoal',
  ])
  allthemods.add('c:storage_blocks', '#c:storage_blocks/raw_crimson_iron')
  allthemods.add('c:storage_blocks', '#c:storage_blocks/raw_azure_silver')
  allthemods.add('c:ores/cinnabar', 'alltheores:cinnabar_ore')
})

ServerEvents.tags('entity_type', allthemods => {
  // Productive Bees
  allthemods.add('justdirethings:paradox_deny', /productivebees:/);
  allthemods.add('industrialforegoing:mob_duplicator_blacklist', /productivebees:/)

  // Allthemodium
  allthemods.add('justdirethings:paradox_deny', 'allthemodium:piglich');
  allthemods.add('industrialforegoing:mob_duplicator_blacklist', 'allthemodium:piglich')
});

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.