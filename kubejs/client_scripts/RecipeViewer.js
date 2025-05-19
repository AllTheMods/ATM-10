// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMod 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

const runicYEET = [
    'modern_industrialization:runic_energy_output_hatch',
    'extended_industrialization:runic_tesla_receiver_hatch',
    'modern_industrialization:superconductor_runic_transformer',
    'modern_industrialization:runic_superconductor_transformer',
    'modern_industrialization:runic_ev_transformer',
    'modern_industrialization:runic_storage_unit',
    'modern_industrialization:ev_runic_transformer',
    'forbidden_arcanus:corrupted_arcane_crystal_block'
]

RecipeViewerEvents.removeEntriesCompletely('item', allthemods =>{
  allthemods.remove('quarryplus:adv_quarry')
  allthemods.remove('allthetweaks:greg_star')
  allthemods.remove('allthetweaks:greg_star_block')

  for(let i=1; i < 10; i++){
      allthemods.remove(`allthecompressed:greg_star_block_${i}x`)}
  
  allthemods.remove('relics:researching_table')
  allthemods.remove("extradisks:infinite_chemical_storage_block")
  allthemods.remove("extradisks:infinite_chemical_storage_disk")
  allthemods.remove("extradisks:infinite_chemical_storage_part")
  allthemods.remove("extradisks:infinite_fluid_storage_block")
  allthemods.remove("extradisks:infinite_fluid_storage_disk")
  allthemods.remove("extradisks:infinite_fluid_storage_part")
  allthemods.remove("extradisks:infinite_item_storage_block")
  allthemods.remove("extradisks:infinite_item_storage_disk")
  allthemods.remove("extradisks:infinite_item_storage_part")

  let $DyeColor = Java.loadClass("net.minecraft.world.item.DyeColor")
  for (let color of $DyeColor.values()){
    allthemods.remove(`/refinedstorage:${color}_.*/`)
  }
})

RecipeViewerEvents.removeRecipes(event => {
  event.remove(["xycraft_machines:extractor/enderio/grains_of_infinity"])
})

RecipeViewerEvents.removeEntries('item', allthemods => {
    for (let yeet of runicYEET) {
        allthemods.remove(yeet)
    }
})

RecipeViewerEvents.addInformation('fluid', allthemods =>{
  allthemods.add("advanced_ae:quantum_infusion_source", [
      'In the Reaction Chamber: §e4000mb of Water§f + §e1x Quantum Infused Dust§f = §b1000mb of Quantum Infusion'
  ])
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
