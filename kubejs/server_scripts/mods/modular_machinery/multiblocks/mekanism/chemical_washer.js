// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

MMREvents.machines(allthemods => {
    allthemods.create('atm:chemical_washer')
        .color('#FF1b1625')
        .name('Runic Processor - Chemical Washer')
        .structure(
            MMRStructureBuilder.create()
                .pattern(
                    [
                        [ "aaaimiaaa", "acdeeedca", "adffgffda", "befhhhfeb", "beghdhgeb", "befhhhfeb", "adffgffda", "acdeeedca", "aaabbbaaa" ],
                        [ "   jjj   ", "  aaaaa  ", " akiiika ", "jaiaaaiaj", "jaiakaiaj", "jaiaaaiaj", " akiiika ", "  aaaaa  ", "   jjj   " ],
                        [ "         ", "         ", "  l   l  ", "         ", "         ", "         ", "  l   l  ", "         ", "         " ],
                        [ "         ", "         ", "  l   l  ", "         ", "         ", "         ", "  l   l  ", "         ", "         " ],
                        [ "         ", "         ", "  n   n  ", "         ", "    o    ", "         ", "  n   n  ", "         ", "         " ]
                    ]
                )
                .keys(
                    {
                        "a": 'forbidden_arcanus:polished_darkstone_stairs',
                        "b": [
                            '#modular_machinery_reborn:energyhatch',
                            '#modular_machinery_reborn:itembus',
                            '#modular_machinery_reborn:fluidhatch',
                            '#modular_machinery_reborn_ars:sourcehatch',
                            '#modular_machinery_reborn_mekanism:chemicalhatch',
                            'modular_machinery_reborn:time_counter',
                            'forbidden_arcanus:polished_darkstone'
                        ],
                        "c": 'forbidden_arcanus:gilded_chiseled_polished_darkstone',
                        "d": 'modular_machinery_reborn:casing_reinforced',
                        "e": 'modular_machinery_reborn:casing_plain',
                        "f": 'modular_machinery_reborn:casing_firebox',
                        "g": 'modular_machinery_reborn:casing_gearbox',
                        "h": 'modular_machinery_reborn:casing_circuitry',
                        "i": 'forbidden_arcanus:polished_darkstone',
                        "j": 'forbidden_arcanus:polished_darkstone_slab',
                        "k": 'forbidden_arcanus:rune_block',
                        "l": 'forbidden_arcanus:arcane_polished_darkstone_pillar',
                        "n": 'forbidden_arcanus:arcane_crystal_block',
                        "o": 'forbidden_arcanus:quantum_injector'
                    }
                )
        )
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.