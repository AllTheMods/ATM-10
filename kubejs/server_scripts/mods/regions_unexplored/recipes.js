// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
    allthemods.remove({ id: 'regions_unexplored:blackstone_cluster' })
    allthemods.stonecutting('2x regions_unexplored:blackstone_cluster', 'minecraft:blackstone').id('regions_unexplored:blackstone_cluster_stonecutting')
    allthemods.replaceInput({ id: 'regions_unexplored:mossy_stone' }, 'minecraft:vine', 'minecraft:moss_carpet')
    allthemods.replaceInput({ id: 'regions_unexplored:yellow_dye_from_tall_yellow_bioshroom' }, 'regions_unexplored:tall_yellow_bioshroom', 'regions_unexplored:yellow_bioshroom')
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
