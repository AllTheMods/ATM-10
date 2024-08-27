/*
  This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
  As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
  Mekanism items for processing stack
  Authored by EnigmaQuip

  if using existing dust, dust must be defined until kjs tag loading fixed
  material at a minimum should have an ore associated with it at #forge:ores/material
*/

global.mekStackAdditions = []

// DO NOT EDIT BELOW THIS LINE

const $Chemical = Java.loadClass('mekanism.api.chemical.Chemical')
const $ChemicalBuilder = Java.loadClass('mekanism.api.chemical.ChemicalBuilder')

StartupEvents.registry('item', allthemods => {
  const mekItems = ['clump', 'crystal', 'dirty_dust', 'shard']
  function mekStack(name, color) {
    mekItems.forEach(type => {
      allthemods.create(`${type}_${name}`)
        .texture('layer0', 'mekanism:item/empty')
        .texture('layer1', `mekanism:item/${type}`)
        .texture('layer2', `mekanism:item/${type}_overlay`)
        .color(1, color)
        .tag(`mekanism:${type}s`)
        .tag(`mekanism:${type}s/${name}`)
    })
  }
  global.mekStackAdditions.forEach(entry => {
    mekStack(entry.material, entry.color)
    if (entry.makeDust) {
      allthemods.create(`dust_${entry.material}`)
        .texture('layer0', 'mekanism:item/empty')
        .texture('layer1', `mekanism:item/dust`)
        .color(1, entry.color)
        .tag(`c:dusts`)
        .tag(`c:dusts/${entry.material}`)
    }
  })
})

StartupEvents.registry('mekanism:chemical', allthemods => {
  global.mekStackAdditions.forEach(entry => {
    allthemods.createCustom(`clean_${entry.material}`, () => $Chemical($ChemicalBuilder.cleanSlurry().ore(`c:ores/${entry.material}`).tint(Color.of(entry.color).getRgbJS())))
    allthemods.createCustom(`dirty_${entry.material}`, () => $Chemical($ChemicalBuilder.dirtySlurry().ore(`c:ores/${entry.material}`).tint(Color.of(entry.color).getRgbJS())))
  })
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
