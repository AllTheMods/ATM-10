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

const $Slurry = Java.loadClass('mekanism.api.chemical.slurry.Slurry')
const $SlurryBuilder = Java.loadClass('mekanism.api.chemical.slurry.SlurryBuilder')
const $Gas = Java.loadClass('mekanism.api.chemical.gas.Gas')
const $GasBuilder = Java.loadClass('mekanism.api.chemical.gas.GasBuilder')

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
        .tag(`forge:dusts`)
        .tag(`forge:dusts/${entry.material}`)
    }
  })
})

StartupEvents.registry('mekanism:slurry', allthemods => {
  global.mekStackAdditions.forEach(entry => {
    allthemods.createCustom(`clean_${entry.material}`, () => $Slurry($SlurryBuilder.clean().ore(`forge:ores/${entry.material}`).tint(Color.of(entry.color).getRgbJS())))
    allthemods.createCustom(`dirty_${entry.material}`, () => $Slurry($SlurryBuilder.dirty().ore(`forge:ores/${entry.material}`).tint(Color.of(entry.color).getRgbJS())))
  })
})

StartupEvents.registry('mekanism:gas', allthemods => {
  allthemods.createCustom(`neutron_gas`, () => $Gas($GasBuilder.builder()))
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
