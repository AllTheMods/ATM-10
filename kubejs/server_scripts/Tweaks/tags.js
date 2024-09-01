// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.tags('block', allthemods => {
  allthemods.add('ftbchunks:interact_whitelist', ['@waystones'])

  //Extreme Reactors
  allthemods.add('c:storage_blocks/yellorium', 'alltheores:uranium_block' )
})

ServerEvents.tags('item', allthemods => {
  //Extreme Reactors
  allthemods.add('c:ingots/yellorium', 'alltheores:uranium_ingot' )
  allthemods.add('c:storage_blocks/yellorium', 'alltheores:uranium_block' )

  //regions_unexplored
  allthemods.add('regions_unexplored:magnolia_logs', [
    'regions_unexplored:magnolia_log',
    'regions_unexplored:stripped_magnolia_log',
    'regions_unexplored:magnolia_wood',
    'regions_unexplored:stripped_magnolia_wood',
  ])

  //allthemodium
  allthemods.add('allthemodium:ancient_logs', [
    'allthemodium:ancient_log_0',
    'allthemodium:ancient_log_1',
    'allthemodium:ancient_log_2',
    'allthemodium:stripped_ancient_log'
  ])
  allthemods.add('allthemodium:soul_logs', [
    'allthemodium:soul_log',
    'allthemodium:soul_log_0',
    'allthemodium:soul_log_1',
    'allthemodium:soul_log_2',
    'allthemodium:stripped_soul_log'
  ])
  allthemods.add('allthemodium:demonic_logs', [
    'allthemodium:demonic_log',
    'allthemodium:stripped_demonic_log',
  ])
})
// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
