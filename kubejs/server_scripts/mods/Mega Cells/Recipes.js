// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {

    allthemods.remove({output: 'megacells:radioactive_cell_component'})
    allthemods.shaped('megacells:radioactive_cell_component',
        [
            'ADA',
            'BCB',
            'ADA'
        ], {
            A: 'megacells:accumulation_processor',
            B: 'mekanism:radioactive_waste_barrel',
            C: 'megacells:cell_component_64m',
            D: '#c:pellets/antimatter',
        })

})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.