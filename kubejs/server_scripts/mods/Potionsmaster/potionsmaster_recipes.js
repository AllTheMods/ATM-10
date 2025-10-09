// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
    
  global.potions_server.forEach(potion => {
      allthemods.shaped(`potionsmaster:${potion.id}_oresight_powder`, [
            'EGR',
            'OPM',
            '   '
            ],{
            E: 'potionsmaster:ender_powder',
            G: 'minecraft:glowstone_dust',
            M: 'potionsmaster:tile_mortar',
            P: 'potionsmaster:pestle',
            R: 'minecraft:redstone',
            O: `${potion.item}`
        })
        allthemods.blasting(`1x potionsmaster:calcinated_${potion.id}_oresight_powder`, `potionsmaster:${potion.id}_oresight_powder`, 5,200)
    })
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
