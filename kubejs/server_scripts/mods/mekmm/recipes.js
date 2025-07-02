// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {

    allthemods.remove({input: 'mekmm:scrap'})
    allthemods.remove({output: 'mekmm:scrap'})
    allthemods.remove({input: 'mekmm:scrap_box'})
    allthemods.remove({output: 'mekmm:scrap_box'})
    allthemods.remove({input: 'mekmm:empty_crystal'})
    allthemods.remove({output: 'mekmm:empty_crystal'})
    allthemods.remove({input: 'mekmm:uu_matter'})
    allthemods.remove({output: 'mekmm:uu_matter'})
    allthemods.remove({input: 'mekmm:ambient_gas_collector'})
    allthemods.remove({output: 'mekmm:ambient_gas_collector'})

    allthemods.remove({id: 'mekmm:reaction/empty_crystal'})
    allthemods.remove({id: 'mekmm:oxidizing/uu_matter'})
    allthemods.remove({id: 'mekmm:compressing/author_doll'})

    allthemods.remove(/mekmm:.*replicat.*/)
    allthemods.remove(/mekmm:.*recycl.*/)
    allthemods.remove({type: 'mekmm:recycling'})
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.