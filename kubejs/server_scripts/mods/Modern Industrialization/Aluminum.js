// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(event => {
  event.remove({ id: /alltheores:.*aluminum_ingot_from.*/, not: {id: 'alltheores:aluminum_ingot_from_block'}})
  event.remove({ id: /alltheores:.*aluminum_dust_from.*/})
  event.remove({ id: /alltheores:mek_processing\/aluminum.*/})
  event.remove({id: /xycraft_world:.*aluminum.*/})
  event.remove({id: /.*bauxite.*/})
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
