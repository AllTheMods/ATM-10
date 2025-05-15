// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMod 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

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
    let colorString = color.getSerializedName().toLowerCase()
    allthemods.remove(`/refinedstorage:${colorString}_.*/`)
  }
})

RecipeViewerEvents.removeRecipes(event => {
  event.remove(["xycraft_machines:extractor/enderio/grains_of_infinity"])
})

RecipeViewerEvents.addInformation('fluid', allthemods =>{
  allthemods.add("advanced_ae:quantum_infusion_source", [Text.translate("recipe_viewer.atm.quantum_infusion_source")])
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
