// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMod 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

RecipeViewerEvents.removeEntriesCompletely('item', allthemods =>{
  allthemods.remove('quarryplus:adv_quarry')
  allthemods.remove('allthetweaks:greg_star')
  allthemods.remove('allthetweaks:greg_star_block')

  for(let i=1; i < 10; i++){
      allthemods.remove(`allthecompressed:greg_star_block_${i}x`)}
  
  allthemods.remove('relics:researching_table')
})

RecipeViewerEvents.addInformation('fluid', allthemods =>{
  allthemods.add("advanced_ae:quantum_infusion_source", [
      'In the Reaction Chamber: §e4000mb of Water§f + §e1x Quantum Infused Dust§f = §b1000mb of Quantum Infusion'
  ])
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
