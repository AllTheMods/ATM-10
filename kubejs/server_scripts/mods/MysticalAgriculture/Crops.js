// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

const CropRegistry = Java.loadClass('com.blakebr0.mysticalagriculture.registry.CropRegistry')
const $Objects = Java.loadClass('java.util.Objects')

// sets the chance for a seed to drop
const SecondarySeed = 0.01
const TierSecondaryCutoff = 5

ServerEvents.tags('item', allthemods => {
  let CropRegistryInstance = CropRegistry.getInstance()
  let cropTiers = CropRegistryInstance.getTiers()
  let tiers = Array.apply(null, Array(cropTiers.length))
  for (const CropTier of cropTiers) {
    tiers[CropTier.getValue() - 1] = CropTier.getFarmland()
    if (CropTier.getValue() >= TierSecondaryCutoff) {
      CropTier.setSecondarySeedDrop(false)
      CropTier.setBaseSecondaryChance(0)
    } else {
      CropTier.setBaseSecondaryChance(SecondarySeed)
    }
  }
  for (let i = 0; i < tiers.length; i++) {
    let farmA = tiers[i]
    let farmB = null
    if (i + 1 < tiers.length) {
      if (!$Objects.equals(farmA, tiers[i + 1])) {
        farmB = tiers[i + 1]
      }
    }
    let tierA = farmA.getIdLocation().getPath().replace('_farmland', '')
    allthemods.add(`kubejs:farmland/${tierA}`, farmA.getId())
    if (farmB) {
      let tierB = farmB.getIdLocation().getPath().replace('_farmland', '')
      allthemods.add(`kubejs:farmland/${tierA}`, `#kubejs:farmland/${tierB}`)
    } else {
      break
    }
  }
})

ServerEvents.recipes(allthemods => {
  let JsonExport = { enabled: [], disabled: [] }
  let CropRegistryInstance = CropRegistry.getInstance()
  let CropList = CropRegistryInstance.getCrops()
  for (const Crop of CropList) {
    let CropName = Crop.getName()
    if (Crop.isEnabled()) {
      JsonExport.enabled.push(CropName)
    } else {
      JsonExport.disabled.push(CropName)
    }
  }
  JsonIO.write('kubejs/server_scripts/mods/MysticalAgriculture/cropInfo.json', JsonExport)

  // Immersive Engineering Cloche
  if (Platform.isLoaded('immersiveengineering')) {
    JsonExport.enabled.forEach(cropName => {
      let Crop = CropRegistryInstance.getCropByName(cropName)
      allthemods.custom({
        type: 'immersiveengineering:cloche',
        results: [
          {
            basePredicate: {
                item: Crop.getEssenceItem().getId()
            },
            count: 2
          }
        ],
        input: Ingredient.of(Crop.getSeedsItem()).toJson(),
        soil: Ingredient.of(Crop.getCruxBlock() ?? `#kubejs:farmland/${Crop.getTier().getFarmland().getIdLocation().getPath().replace('_farmland', '')}`).toJson(),
        time: 250 + (750 * Crop.getTier().getValue()),
        render: {
          type: 'immersiveengineering:crop',
          block: Crop.getCropBlock().getId()
        }
      }).id(`allthemods:immersiveengineering/cloche/mysticalagriculture/${cropName}`)
    })
  }
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
