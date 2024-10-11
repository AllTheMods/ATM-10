// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

const seedID = [
    'mysticalagriculture:allthemodium_seeds',
    'mysticalagriculture:darkstone_seeds',
    'mysticalagriculture:kivi_seeds',
    'mysticalagriculture:unexplored_wood_seeds',
    'mysticalagriculture:unobtainium_seeds',
    'mysticalagriculture:vibranium_seeds'
]

ServerEvents.tags('item', allthemods => {
    for (let seeds of seedID) {
        allthemods.add('c:seeds', seeds)
        allthemods.add('mysticalagriculture:seeds', seeds)
        allthemods.add('extended_industrialization:farmer_plantable', seeds)
        allthemods.add('ars_nouveau:whirlisprig/denied_drop', seeds)
    }
})

ServerEvents.tags('block', allthemods => {
    for (let seeds of seedID) {
        allthemods.add('cucumber:mineable/sickle', seeds.replace('seeds', 'crop'))
        allthemods.add('silentgear:mineable/sickle', seeds.replace('seeds', 'crop'))
        allthemods.add('minecraft:crops', seeds.replace('seeds', 'crop'))
        allthemods.add('computercraft:turtle_hoe_harvestable', seeds.replace('seeds', 'crop'))
        allthemods.add('the_bumblezone:essence/life/grow_plants', seeds.replace('seeds', 'crop'))
        allthemods.add('minecraft:bee_growables', seeds.replace('seeds', 'crop'))
        allthemods.add('mysticalagriculture:crops', seeds.replace('seeds', 'crop'))
        allthemods.add('pneumaticcraft:crop_support_growable', seeds.replace('seeds', 'crop'))
        allthemods.add('ae2:growth_acceleratable', seeds.replace('seeds', 'crop'))
        allthemods.add('minecraft:sword_efficient', seeds.replace('seeds', 'crop'))
    }
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
