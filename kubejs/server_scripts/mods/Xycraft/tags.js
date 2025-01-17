// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

const substrates = ['stone', 'deepslate', 'kivi']
//global.xycraftColours = ['light', 'dark', 'red', 'green ', 'blue']


ServerEvents.tags('item', event => {
    event.add('megacells:compression_overrides', /xycraft_world:xychorium_gem_+?/)
    event.add('megacells:compression_overrides', /xycraft_world:xychorium_storage_+?/)
    event.add('megacells:compression_overrides', 'minecraft:pointed_dripstone')
    event.add('functionalstorage:ignore_crafting_check', 'minecraft:pointed_dripstone')

    global.xycraftColours.forEach(colour => {
        substrates.forEach(substrate => {
            event.add(`c:ores/xychorium_${colour}`, `xycraft_world:xychorium_ore_${substrate}_${colour}`)
            console.log(`tag= c:ores/xychorium_${colour} and item= xycraft_world:xychorium_ore_${substrate}_${colour}`)
        })
    })
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
