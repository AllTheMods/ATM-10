// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {

  allthemods.remove({ id: 'xycraft_machines:shaped/void_container' })
  allthemods.remove({ id: 'xycraft_machines:shaped/machine_base' })
  allthemods.remove({ id: 'xycraft_machines:shaped/machine_base_flipped' })
  allthemods.remove({ id: 'xycraft_machines:shaped/illumination_field' })
  allthemods.remove({ id: 'xycraft_machines:shaped/hydro_pump' })
  allthemods.remove({ id: 'xycraft_machines:shaped/hover_pack' })
  allthemods.remove({ id: 'xycraft_machines:shaped/foil' })
  allthemods.remove({ id: 'xycraft_machines:shaped/extractor' })

  allthemods.shaped( 'xycraft_machines:void_container', ['A A','AXA','KKK'], {
    A: '#c:nuggets/osmium',
    K: 'xycraft_world:kivi',
    X: 'xycraft_world:xychorium_gem_dark'
  }).id('allthemods:xycraft_machines/void_container')
  allthemods.shaped( 'xycraft_machines:machine_base', ['AK','KA'], {
    A: '#c:ingots/osmium',
    K: 'xycraft_world:kivi'
  }).id('allthemods:xycraft_machines/machine_base')
  allthemods.shaped( 'xycraft_machines:machine_base', ['KA','AK'], {
    A: '#c:ingots/osmium',
    K: 'xycraft_world:kivi'
  }).id('allthemods:xycraft_machines/machine_base_flipped')
  allthemods.shaped( 'xycraft_machines:illumination_field', ['AAA','ALA','AAA'], {
    A: '#xycraft:plates/osmium',
    L: 'xycraft_machines:light_field'
  }).id('allthemods:xycraft_machines/illumination_field')
  allthemods.shaped( 'xycraft_machines:hydro_pump', ['AWA','AIA'], {
    A: '#c:nuggets/osmium',
    I: 'xycraft_machines:port_fluid',
    W: 'xycraft_machines:water_block'
  }).id('allthemods:xycraft_machines/hydro_pump')
  allthemods.shaped( 'xycraft_machines:hover_pack', ['A A','AIA','LXL'], {
    A: '#xycraft:plates/osmium',
    I: '#c:ingots/iron',
    L: '#c:leathers',
    X: '#c:gems/xychorium'
    }).id('allthemods:xycraft_machines/hover_pack')
  allthemods.shaped( 'xycraft_machines:foil', ['ANA','AGA','ANA'], {
    A: '#c:ingots/osmium',
    G: '#c:glass_blocks/cheap',
    N: '#c:nuggets/osmium'
  }).id('allthemods:xycraft_machines/foil')
  allthemods.shaped( 'xycraft_machines:extractor', ['KIK','APA','ADA'], {
    A: '#c:ingots/osmium',
    D: 'minecraft:pointed_dripstone',
    I: '#xycraft:port',
    K: 'xycraft_world:kivi',
    P: 'minecraft:piston'
  }).id('allthemods:xycraft_machines/extractor')

})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
