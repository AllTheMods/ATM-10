// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
if (Platform.isLoaded('minecolonies')) {
    ServerEvents.recipes(event => {
        event.remove({ id: 'minecolonies:supplychestdeployer' })
        event.shaped('minecolonies:supplychestdeployer', [
            ' B ',
            'III',
            'RRR'
        ], {
            B: 'minecraft:white_banner',
            I: 'minecraft:iron_bars',
            R: '#minecraft:chest_boats'
        })

        event.remove({ id: 'minecolonies:supplycampdeployer' })
        event.shaped('minecolonies:supplycampdeployer', [
            '   ',
            'IBI',
            'RRR'
        ], {
            B: 'minecraft:white_banner',
            I: 'minecraft:iron_bars',
            R: '#minecraft:chest_boats'
        })

    })
}

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
