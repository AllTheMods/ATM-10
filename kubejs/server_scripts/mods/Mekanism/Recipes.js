// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
/*   allthemods.remove({ id: 'mekanism:atomic_disassembler' })
  allthemods.shaped('mekanism:atomic_disassembler', ['ITI', 'IAI', ' P '], {
    I: 'mekanism:alloy_infused',
    T: 'mekanism:energy_tablet',
    A: 'mekanism:alloy_atomic',
    P: 'allthemodium:allthemodium_pickaxe'
  })
  allthemods.remove({ id: 'mekanism:meka_tool' })
  allthemods.shaped('mekanism:meka_tool', ['UCU', 'TDT', 'PBP'], {
    U: 'mekanism:ultimate_control_circuit',
    C: 'mekanism:configurator',
    T: '#forge:plates/unobtainium',
    D: 'mekanism:atomic_disassembler',
    B: 'mekanism:basic_induction_cell',
    P: 'mekanism:pellet_polonium'
  }) */
  allthemods.remove({ id: 'mekanism:upgrade/anchor' })

  // remove combiner recipes for ores
  allthemods.remove({ type: 'mekanism:combining', id: /ore/ })
  
  // GBG Recipe Change | Alfred
  allthemods.remove({ id: 'mekanismgenerators:generator/gas_burning' })
  allthemods.shaped( 'mekanismgenerators:gas_burning_generator', ['UBU', 'TDT', 'UBU'], {
	U: 'mekanism:ingot_refined_obsidian',
    B: 'mekanism:alloy_atomic',
    T: 'mekanismgenerators:bio_generator',
    D: 'mekanism:electrolytic_core'
  }).id('allthemods:mekanismgenerators/gas_burning_gen')
    
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
