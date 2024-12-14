// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

MMREvents.machines(allthemods => {
    allthemods.create('atm:runic_star_altar')
        .color('#FF1b1625')
        .name('Runic Star Altar')
        .structure(
            MMRStructureBuilder.create()
                .pattern(
                    [
                        [ '  ssszamazsss  ', ' ssdddddddddss ', 'ssdddddddddddss', 'sddddddddddddds', 'sddddddddddddds', 'zdddddddddddddz', 'addddddddddddda', 'zdddddddddddddz', 'addddddddddddda', 'zdddddddddddddz', 'sddddddddddddds', 'sddddddddddddds', 'ssdddddddddddss', ' ssdddddddddss ', '  ssszazazsss  '],
                        [ '     sssss     ', '   sssdgdsss   ', '  ssdddddddss  ', ' ssgdddddddgss ', ' sddddddddddds ', 'ssdddddddddddss', 'sddddddddddddds', 'sgdddddddddddgs', 'sddddddddddddds', 'ssdddddddddddss', ' sddddddddddds ', ' ssgdddddddgss ', '  ssdddddddss  ', '   sssdgdsss   ', '     sssss     '],
                        [ '               ', '       o       ', '    hsssssh    ', '   ohrdddrho   ', '  hhhddgddhhh  ', '  srdgdddgdrs  ', '  sdddededdds  ', ' osdgddgddgdso ', '  sdddededdds  ', '  srdgdddgdrs  ', '  hhhddgddhhh  ', '   ohrdddrho   ', '    hsssssh    ', '       o       ', '               '],
                        [ '               ', '               ', '               ', '     p   p     ', '       b       ', '   p b   b p   ', '      j j      ', '    b  n  b    ', '      j j      ', '   p b   b p   ', '       b       ', '     p   p     ', '               ', '               ', '               '],
                        [ '               ', '               ', '               ', '     p   p     ', '               ', '   p       p   ', '               ', '               ', '               ', '   p       p   ', '               ', '     p   p     ', '               ', '               ', '               '],
                        [ '               ', '               ', '               ', '     p   p     ', '               ', '   p       p   ', '               ', '       q       ', '               ', '   p       p   ', '               ', '     p   p     ', '               ', '               ', '               '],
                        [ '               ', '               ', '               ', '     p   p     ', '               ', '   p       p   ', '               ', '               ', '               ', '   p       p   ', '               ', '     p   p     ', '               ', '               ', '               '],
                        [ '               ', '               ', '               ', '     p   p     ', '               ', '   p       p   ', '               ', '               ', '               ', '   p       p   ', '               ', '     p   p     ', '               ', '               ', '               '],
                        [ '               ', '               ', '               ', '     rpcpr     ', '               ', '   r       r   ', '   p       p   ', '   c       c   ', '   p       p   ', '   r       r   ', '               ', '     rpcpr     ', '               ', '               ', '               '],
                    ]
                )
                .keys(
                    {
                        's': 'forbidden_arcanus:polished_darkstone_stairs',
                        'd': 'forbidden_arcanus:polished_darkstone',
                        'a': 'forbidden_arcanus:arcane_polished_darkstone',
                        'g': 'forbidden_arcanus:gilded_chiseled_polished_darkstone',
                        'h': 'forbidden_arcanus:polished_darkstone_slab',
                        'r': 'forbidden_arcanus:rune_block',
                        'p': 'forbidden_arcanus:arcane_polished_darkstone_pillar',
                        'c': 'forbidden_arcanus:arcane_crystal_block',
                        'b': 'forbidden_arcanus:darkstone_pedestal',
                        'e': 'forbidden_arcanus:chiseled_arcane_polished_darkstone',
                        'j': 'forbidden_arcanus:essence_utrem_jar',
                        'n': 'forbidden_arcanus:magnetized_darkstone_pedestal',
                        'q': 'forbidden_arcanus:quantum_injector',
                        'o': 'forbidden_arcanus:arcane_crystal_obelisk',
                        'z': [
                                'forbidden_arcanus:polished_darkstone',
                                '#modular_machinery_reborn:inputbus',
                                '#modular_machinery_reborn:outputbus',
                                '#modular_machinery_reborn:energyinputhatch'
                        ]
                    }
                )
        );
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.