// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.tags('block', allthemods => {
  // Waystones
  allthemods.add('ftbchunks:interact_whitelist', ['@waystones'])

  // Extreme Reactors
  allthemods.add('c:storage_blocks/yellorium', 'alltheores:uranium_block' )

  // Essence Blocks
  allthemods.add('c:storage_blocks/air_essence', 'kubejs:air_essence_block')
  allthemods.add('c:storage_blocks/earth_essence', 'kubejs:earth_essence_block')
  allthemods.add('c:storage_blocks/fire_essence', 'kubejs:fire_essence_block')
  allthemods.add('c:storage_blocks/water_essence', 'kubejs:water_essence_block')
  allthemods.add('c:storage_blocks', [
    '#c:storage_blocks/air_essence',
    '#c:storage_blocks/earth_essence',
    '#c:storage_blocks/fire_essence',
    '#c:storage_blocks/water_essence'
  ])

  //Entangled
  allthemods.add('entangled:invalid_targets',
      ['@ae2', '@advancedae', '@extendedae', '@megacells', '@appflux', '@appmek']
  )
  
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

  // Essence Blocks
  allthemods.add('c:storage_blocks/air_essence', 'kubejs:air_essence_block')
  allthemods.add('c:storage_blocks/earth_essence', 'kubejs:earth_essence_block')
  allthemods.add('c:storage_blocks/fire_essence', 'kubejs:fire_essence_block')
  allthemods.add('c:storage_blocks/water_essence', 'kubejs:water_essence_block')
  allthemods.add('c:storage_blocks', [
    '#c:storage_blocks/air_essence',
    '#c:storage_blocks/earth_essence',
    '#c:storage_blocks/fire_essence',
    '#c:storage_blocks/water_essence'
  ])

  // Ars Elemental Books
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

  //Industrial Foregoing
  allthemods.add('industrialforegoing:mob_crusher_blacklist', [
    "minecraft:warden",
    "minecraft:elder_guardian",
    "minecraft:ender_dragon",
    "minecraft:wither",
    "artifacts:mimic",
    "twilightforest:swarm_spider",
    "twilightforest:hedge_spider",
    "cataclysm:ender_guarian",
    "cataclysm:ender_golem",
    "cataclysm:nether_monstrosity",
    "cataclysm:ignis",
    "cataclysm:the_harbringer",
    "cataclysm:the_leviathan",
    "cataclysm:ancient_remnant",
    "cataclysm:maledictus",
    "cataclysm:ignited_revenant",
    "cataclysm:the_prowler",
    "cataclysm:the_baby_leviathan",
    "cataclysm:coralssus",
    "cataclysm:amethyst_crab",
    "cataclysm:modern_remnant",
    "cataclysm:kobolediator",
    "cataclysm:wadjet",
    "eternal_starlight:the_gatekeeper",
    "eternal_starlight:starlight_golem",
    "allthemodium:piglich"
  ])
});

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
