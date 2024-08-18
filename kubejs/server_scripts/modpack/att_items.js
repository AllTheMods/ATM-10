// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {

  // Dragon Soul
  allthemods.shaped('allthetweaks:dragon_soul', ['CDA', 'SNI', 'BGE'], {
    C: 'apothic_enchanting:infused_breath',
    D: 'occultism:soul_gem',
    A: 'occultism:spawn_egg/familiar_dragon',
    S: 'productivetrees:socotra_dragon_sapling',
    N: 'allthemodium:piglich_heart_block',
    I: 'minecraft:bedrock',
    B: 'minecraft:bedrock',
	  G: 'productivebees:inactive_dragon_egg',
    E: 'minecraft:bedrock'
  }).id('allthemods:allthetweaks/dragon_soul')

 // Improbable Probability Device
 allthemods.shaped('allthetweaks:improbable_probability_device', ['ABA', 'CGE', 'FDF'], {
  A: 'mekanism:pellet_antimatter',
  B: 'ae2:singularity',
  C: 'megacells:portable_item_cell_256m',
  D: 'pneumaticcraft:assembly_controller',
  E: 'modern_industrialization:blastproof_casing',
  F: 'ironfurnaces:million_furnace', 
  G: 'irons_spellbooks:lightning_upgrade_orb'
  }).id('allthemods:allthetweaks/improbable_probability_device')

  // Dimensional Seed Recipe
  allthemods.shaped('allthetweaks:dimensional_seed', ['ABC', 'DEF', 'GHI'], {
    A: 'minecraft:bedrock',
    B: 'minecraft:bedrock',
    C: 'minecraft:bedrock',
    D: 'allthetweaks:mini_exit',
    E: 'allthetweaks:mini_nether',
    F: 'allthetweaks:mini_end',
    G: 'minecraft:bedrock',
    H: 'minecraft:bedrock',
    I: 'minecraft:bedrock'
  }).id('allthemods:allthetweaks/dimensional_seed')

    // Withers Compass
    allthemods.shaped('allthetweaks:withers_compass', ['DCD', 'ABA', 'DED'], {
      A: 'minecraft:bedrock',
      B: 'minecraft:bedrock',
      C: 'minecraft:bedrock',
      D: 'minecraft:bedrock',
      E: 'minecraft:bedrock'
    }).id('allthemods:allthetweaks/withers_compass')

  // Philosopher's Fuel
  allthemods.shaped('allthetweaks:philosophers_fuel', ['ABC', 'DEF', 'GHI'], {
  A: 'generatorgalore:ender_generator',
	B: 'ironfurnaces:million_furnace'  ,
	C: 'bigreactors:insanite_block' ,
	D: 'minecraft:bedrock',
	E: 'minecraft:bedrock',
  F: 'minecraft:bedrock',
	G: 'minecraft:bedrock',
	H: 'minecraft:bedrock',
  I: 'minecraft:bedrock'
  }).id('allthemods:allthetweaks/philosophers_fuel')

 // Nexium Emitter
 allthemods.shaped('allthetweaks:nexium_emitter', ['A B', ' CF', 'GED'], {
  A: 'powah:player_transmitter_nitro',
  B: 'minecraft:bedrock',
  F: [Item.of('mekanism:module_gravitational_modulating_unit')],
  D: 'minecraft:bedrock',
  E: 'ae2:singularity',
  C: 'minecraft:bedrock',
  G: 'minecraft:bedrock'
}).id('allthemods:allthetweaks/nexium_emitter')

// Pulsating Black Hole
allthemods.custom({
type: 'pneumaticcraft:pressure_chamber',
inputs: [
  { 'type': 'pneumaticcraft:stacked_item', 'item': 'irons_spellbooks:fire_upgrade_orb', 'count': 1 },
  { 'type': 'pneumaticcraft:stacked_item', 'item': 'ae2:quantum_ring', 'count': 1 },
  { 'type': 'pneumaticcraft:stacked_item', 'item': 'pneumaticcraft:micromissiles', 'count': 1 },
  { 'type': 'pneumaticcraft:stacked_item', 'item': 'forbidden_arcanus:dark_rune_block', 'count': 1 },
  { 'type': 'pneumaticcraft:stacked_item', 'item': 'minecraft:bedrock', 'count': 1 },
  { 'type': 'pneumaticcraft:stacked_item', 'item': 'occultism:stable_wormhole', 'count': 1 },
  { 'type': 'pneumaticcraft:stacked_item', 'item': 'minecraft:bedrock', 'count': 1 },
  { 'type': 'pneumaticcraft:stacked_item', 'item': 'minecraft:bedrock', 'count': 1 },
  { 'type': 'pneumaticcraft:stacked_item', 'item': 'evilcraft:lightning_bomb', 'count': 1 }
],
pressure: 4.9,
results: [
  {
    'item': 'allthetweaks:pulsating_black_hole'
  }
]
}).id('allthemods:pressure/allthetweaks/pulsating_black_hole')

// Oblivion Shard
allthemods.shaped('allthetweaks:oblivion_shard', [' AB', 'ACA', 'BA '], {
A: 'minecraft:bedrock',
C: 'minecraft:bedrock',
B: 'evilcraft:piercing_vengeance_focus'
}).id('allthemods:allthetweaks/oblivion_shard')


})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
