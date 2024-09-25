// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.tags('block', allthemods => {
  //Waystones
  allthemods.add('ftbchunks:interact_whitelist', ['@waystones'])

  //Extreme Reactors
  allthemods.add('c:storage_blocks/yellorium', 'alltheores:uranium_block' )
  
})

ServerEvents.tags('item', allthemods => {
  //Extreme Reactors
  allthemods.add('c:ingots/yellorium', 'alltheores:uranium_ingot' )
  allthemods.add('c:storage_blocks/yellorium', 'alltheores:uranium_block' )

  //Pneumaticcraft
  allthemods.add('c:plastics', 'pneumaticcraft:plastic' )

})

ServerEvents.tags('entity_type', allthemods => {
  // Productive Bees
  allthemods.add('justdirethings:paradox_deny', /productivebees:/);
  allthemods.add('industrialforegoing:mob_duplicator_blacklist', /productivebees:/)

  //AllTheModium
  allthemods.add('justdirethings:paradox_deny', 'allthemodium:piglich');
  allthemods.add('industrialforegoing:mob_duplicator_blacklist', 'allthemodium:piglich')

});
// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
