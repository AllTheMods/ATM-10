// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
  allthemods.remove({ id: 'modularbees:electrode_copper' })
  allthemods.remove({ id: 'modularbees:electrode_iron' })
  allthemods.remove({ id: 'modularbees:electrode_gold' })
  allthemods.remove({ id: 'modularbees:electrode/electrode_gold' })
  allthemods.remove({ id: 'modularbees:electrode/electrode_netherite' })
  allthemods.remove({ id: 'modularbees:scented_plank' })
  allthemods.remove({ id: 'modularbees:modular_beehive_core' })
  allthemods.remove({ id: 'modularbees:modular_beehive_part' })
  allthemods.remove({ id: 'modularbees:modular_alveary' })
  allthemods.remove({ id: 'modularbees:modular_feeder' })
  allthemods.remove({ id: 'modularbees:modular_overclocker' })

  allthemods.recipes.modularbees.overclocker_electrode('modularbees:electrode_gold', 1.8);
  allthemods.recipes.modularbees.overclocker_electrode('modularbees:electrode_netherite', 2.25);

  allthemods.shaped(
    Item.of('modularbees:electrode_copper'),
    [
      ' NG',
      ' BN',
      'I  '
    ], {
      N: '#c:ingots/netherite',
      G: '#c:storage_blocks/gold',
      B: "#c:storage_blocks/copper",
      I: '#c:ingots/copper'
    }).id('allthemods:modularbees/electrode_copper')

  allthemods.shaped(
    Item.of('modularbees:electrode_iron'),
    [
      ' NG',
      ' BN',
      'I  '
    ], {
      N: 'modularbees:electrode_copper',
      G: '#c:storage_blocks/gold',
      B: "#c:storage_blocks/iron",
      I: '#c:ingots/iron'
    }).id('allthemods:modularbees/electrode_iron')

  allthemods.shaped(
    Item.of('modularbees:electrode_gold'),
    [
      ' NG',
      ' BN',
      'I  '
    ], {
      N: 'modularbees:electrode_iron',
      G: '#c:storage_blocks/gold',
      B: "#c:storage_blocks/gold",
      I: '#c:ingots/gold'
    }).id('allthemods:modularbees/electrode_gold')

  allthemods.shaped(
    Item.of('modularbees:scented_plank', 4),
    [
      'NHN',
      'PPP',
      'NHN'
    ], {
      N: '#c:nuggets/allthemodium',
      H: 'minecraft:honey_block',
      P: '#minecraft:planks'
    }).id('allthemods:modularbees/scented_plank')

  allthemods.shaped(
    Item.of('modularbees:modular_beehive_core'),
    [
      'POP',
      'UBU',
      'PAP'
    ], {
      P: 'modularbees:scented_plank',
      O: 'productivelib:upgrade_productivity_4',
      U: '#c:ingots/unobtainium',
      B: 'minecraft:iron_bars',
      A: 'productivelib:upgrade_adult',
    }).id('allthemods:modularbees/modular_beehive_core')

  allthemods.shaped(
    Item.of('modularbees:modular_beehive_part'),
    [
      'PPP',
      'PVP',
      'PPP'
    ], {
      P: 'modularbees:scented_plank',
      V: '#c:ingots/vibranium'
    }).id('allthemods:modularbees/modular_beehive_part')

  allthemods.shaped(
    Item.of('modularbees:modular_beehive_feeder'),
    [
      ' P ',
      'PFP',
      ' P '
    ], {
      P: 'modularbees:modular_beehive_part',
      F: 'productivebees:feeder'
    }).id('allthemods:modularbees/modular_beehive_feeder')

  allthemods.shaped(
    Item.of('modularbees:modular_beehive_alveary'),
    [
      'EPE',
      'PNP',
      'EPE'
    ], {
      E: '#productivebees:expansion_boxes',
      P: 'modularbees:modular_beehive_part',
      N: '#c:nuggets/vibranium'
    }).id('allthemods:modularbees/modular_beehive_alveary')

  allthemods.shaped(
    Item.of('modularbees:modular_beehive_overclocker'),
    [
      'PBP',
      'BOB',
      'PBP'
    ], {
      P: 'modularbees:modular_beehive_part',
      B: 'minecraft:iron_bars',
      O: 'productivelib:upgrade_productivity_4'
    }).id('allthemods:modularbees/modular_beehive_overclocker')
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.