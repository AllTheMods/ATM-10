// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

MMREvents.machines(allthemods => {
    allthemods.create('atm:runic_crucible')
        .color('#FF1b1625')
        .name('Runic Crucible')
        .structure(
            MMRStructureBuilder.create()
                .pattern(
                    [
                        [ 'rsmsr', 'sddds', 'sdgds', 'sddds', 'rsssr' ],
                        [ 'pxaxp', 'xsssx', 'ascsa', 'xsssx', 'pxaxp' ],
                        [ 'c   c', '     ', '     ', '     ', 'c   c' ],
                        [ '     ', '     ', '  q  ', '     ', '     ' ]
                    ]
                )
                .keys(
                    {
                        's': 'forbidden_arcanus:polished_darkstone_stairs',
                        'd': 'forbidden_arcanus:polished_darkstone',
                        'a': 'forbidden_arcanus:arcane_polished_darkstone',
                        'g': 'forbidden_arcanus:gilded_chiseled_polished_darkstone',
                        'r': 'forbidden_arcanus:rune_block',
                        'p': 'forbidden_arcanus:arcane_polished_darkstone_pillar',
                        'c': 'forbidden_arcanus:arcane_crystal_block',
                        'q': 'forbidden_arcanus:quantum_injector',
                        'x': [
                            'forbidden_arcanus:polished_darkstone',
                            '#modular_machinery_reborn:fluidinputhatch',
                            '#modular_machinery_reborn:fluidoutputhatch',
                            '#modular_machinery_reborn_ars:sourceinputhatch',
                            '#modular_machinery_reborn:inputbus',
                            '#modular_machinery_reborn:outputbus'
                        ]
                    }
                )
        )
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.