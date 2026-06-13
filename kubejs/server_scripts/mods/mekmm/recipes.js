// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {

    allthemods.remove({id: 'mekmm:scrap'})
    allthemods.remove({id: 'mekmm:compressing/scrap_box'})
    allthemods.remove({id: 'mekmm:empty_crystal'})
    allthemods.remove({id: 'mekmm:nucleosynthesizing/uu_matter'})
    allthemods.remove({id: 'mekmm:ambient_gas_collector'})

    allthemods.remove({id: 'mekmm:reaction/empty_crystal'})
    allthemods.remove({id: 'mekmm:oxidizing/uu_matter'})
    allthemods.remove({id: 'mekmm:compressing/author_doll'})

    allthemods.remove({id: /mekmm:.*replicat.*/})
    allthemods.remove({id: /mekmm:.*recycl.*/})
    allthemods.remove({id: /mekmm:.*planting.*/})
    allthemods.remove({id: 'mekmm:cnc_lathe'})
    allthemods.remove({id: /mekmm:.*lathing.*/})
    allthemods.remove({id: /mekmm:.*rolling_mill.*/})
    allthemods.remove({type: 'mekmm:recycling'})

    allthemods.remove({id: /mekmm:compat\/appflux.*/})
    allthemods.remove({id: /mekmm:compat\/advanced_ae.*/})
    allthemods.remove({id: /mekmm:compat\/ae2.*/})
    allthemods.remove({id: /mekmm:compat\/extendedae.*/})
    allthemods.remove({id: /mekmm:compat\/megacells.*/})

    // add CNC stamper recipes for gears, plates and rods for ores listed in @alltheores
    const gear_metals = [
        "aluminum",
        "lead",
        "nickel",
        "osmium",
        "platinum",
        "silver",
        "tin",
        "uranium",
        "zinc",
        "iridium",
        "steel",
        "invar",
        "electrum",
        "bronze",
        "brass",
        "enderium",
        "lumium",
        "signalum",
        "constantan",
        "copper",
        "iron",
        "gold",
        "netherite"
    ]
    gear_metals.forEach(metal => {
        allthemods.custom({
            type: "mekmm:stamper",
            input: { tag: `c:ingots/${metal}`, count: 4 },
            mold: { item: "immersiveengineering:mold_gear" },
            output: { id: `alltheores:${metal}_gear`, count: 1 }
        })
    })
    allthemods.custom({
        type: "mekmm:stamper",
        input: { tag: `c:gems/diamond`, count: 4 },
        mold: { item: "immersiveengineering:mold_gear" },
        output: { id: `alltheores:diamond_gear`, count: 1 }
    })

    const plate_metals = [
        "osmium",
        "platinum",
        "tin",
        "zinc",
        "iridium",
        "invar",
        "bronze",
        "brass",
        "enderium",
        "lumium",
        "signalum",
        "netherite"
    ]
    plate_metals.forEach(metal => {
        allthemods.custom({
            type: "mekmm:stamper",
            input: { tag: `c:ingots/${metal}`, count: 1 },
            mold: { item: "immersiveengineering:mold_plate" },
            output: { id: `alltheores:${metal}_plate`, count: 1 }
        })
    })
    allthemods.custom({
        type: "mekmm:stamper",
        input: { tag: `c:gems/diamond`, count: 1 },
        mold: { item: "immersiveengineering:mold_plate" },
        output: { id: `alltheores:diamond_plate`, count: 1 }
    })

    const rod_metals = [
        "lead",
        "nickel",
        "osmium",
        "platinum",
        "silver",
        "tin",
        "uranium",
        "zinc",
        "iridium",
        "invar",
        "electrum",
        "bronze",
        "brass",
        "enderium",
        "lumium",
        "signalum",
        "constantan",
        "copper",
        "gold",
    ]
    rod_metals.forEach(metal => {
        allthemods.custom({
            type: "mekmm:stamper",
            input: { tag: `c:ingots/${metal}`, count: 1 },
            mold: { item: "immersiveengineering:mold_rod" },
            output: { id: `alltheores:${metal}_rod`, count: 2 }
        })
    })
    allthemods.custom({
        type: "mekmm:stamper",
        input: { tag: `c:gems/diamond`, count: 1 },
        mold: { item: "immersiveengineering:mold_rod" },
        output: { id: `alltheores:diamond_rod`, count: 2 }
    })
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.