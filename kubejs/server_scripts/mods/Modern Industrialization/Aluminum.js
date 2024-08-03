// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(event => {
    event.remove({id: /.*bauxite.*/})

    event.remove(
        [
            'modern_industrialization:materials/aluminum/macerator/ore_to_raw',
            'modern_industrialization:materials/aluminum/macerator/raw_to_clump',
            'modern_industrialization:materials/aluminum/macerator/clump_to_dirty_dust',
            'modern_industrialization:materials/blast_furnace/dirty_aluminum_dust_to_aluminum_nugget',
            'modern_industrialization:materials/electrolyzer/dirty_aluminum_dust'
        ]
    )

    event.recipes.modern_industrialization.macerator(2, 200)
        .itemIn('#c:ores/aluminum')
        .itemOut('3x alltheores:raw_aluminum')
        .id('atm:macerator/aluminum/ore_to_raw')

    event.recipes.modern_industrialization.macerator(2, 100)
        .itemIn('#c:raw_materials/aluminum')
        .itemOut('alltheores:aluminum_clump')
        .itemOut('alltheores:aluminum_clump', 0.5)
        .id('atm:macerator/aluminum/raw_to_clump')

    event.recipes.modern_industrialization.macerator(2, 50)
        .itemIn('alltheores:aluminum_clump')
        .itemOut('alltheores:dirty_aluminum_dust')
        .itemOut('alltheores:dirty_aluminum_dust', 0.5)
        .id('atm:macerator/aluminum/clump_to_dirty_dust')

    event.recipes.modern_industrialization.blast_furnace(32, 200)
        .itemIn('alltheores:dirty_aluminum_dust')
        .itemOut('alltheores:aluminum_nugget')
        .id('atm:blast_furnace/dirty_aluminum_dust_to_aluminum_nugget')

    event.recipes.modern_industrialization.electrolyzer(32, 1200)
        .itemIn('10x alltheores:dirty_aluminum_dust')
        .itemOut('4x alltheores:aluminum_dust')
        .itemOut('3x modern_industrialization:titanium_tiny_dust')
        .fluidOut('modern_industrialization:oxygen', 2000, 0.5)
        .id('atm:electrolyzer/dirty_aluminum_dust')

})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
