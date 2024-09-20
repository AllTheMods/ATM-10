// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
    allthemods.remove({ id: 'allthecompressed:compress/snow_1x'})
    allthemods.remove({ id: 'allthecompressed:decompress/snow_1x'})
    allthemods.shapeless('9x minecraft:snow_block', ['allthecompressed:snow_1x'])
    allthemods.shapeless('allthecompressed:snow_1x', ['9x minecraft:snow_block'])
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
