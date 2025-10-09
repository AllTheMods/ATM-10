// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.


ServerEvents.tags('item', allthemods => {
  //Potionsmaster
  global.potions_server.forEach(potion => {
    allthemods.add(`potionsmaster:calcinated/${potion.id}`, `potionsmaster:calcinated_${potion.id}_oresight_powder`)
  })
  
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
