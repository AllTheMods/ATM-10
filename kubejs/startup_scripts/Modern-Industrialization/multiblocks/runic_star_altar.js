let star_altar

MIMachineEvents.registerRecipeTypes(allthemods => {
    star_altar = allthemods.register('star_altar')
        .withItemInputs()
        .withItemOutputs()
})

MIMachineEvents.registerMachines(allthemods => {

    const darkStair = allthemods.memberOfBlock('forbidden_arcanus:polished_darkstone_stairs')
    const darkStone = allthemods.memberOfBlock('forbidden_arcanus:polished_darkstone')
    const darkSlab = allthemods.memberOfBlock('forbidden_arcanus:polished_darkstone_slab')
    const darkGuilded = allthemods.memberOfBlock('forbidden_arcanus:gilded_chiseled_polished_darkstone')
    const darkPedestal = allthemods.memberOfBlock('forbidden_arcanus:darkstone_pedestal')
    const runeBlock = allthemods.memberOfBlock('forbidden_arcanus:rune_block')
    const arcaneBlock = allthemods.memberOfBlock('forbidden_arcanus:arcane_polished_darkstone')
    const arcaneChiseled = allthemods.memberOfBlock('forbidden_arcanus:chiseled_arcane_polished_darkstone')
    const arcaneObelisk = allthemods.memberOfBlock('forbidden_arcanus:arcane_crystal_obelisk')
    const arcanePillar = allthemods.memberOfBlock('forbidden_arcanus:arcane_polished_darkstone_pillar')
    const quantumBlock = allthemods.memberOfBlock('forbidden_arcanus:quantum_injector')
    const crystalBlock = allthemods.memberOfBlock('forbidden_arcanus:arcane_crystal_block')
    const magneticPedestal = allthemods.memberOfBlock('forbidden_arcanus:magnetized_darkstone_pedestal')
    const utremJar = allthemods.memberOfBlock('forbidden_arcanus:essence_utrem_jar')
    const hatchBlock = allthemods.hatchOf('item_input', 'item_output', 'energy_input')

    const altarShape = allthemods.layeredShape('darkstone_casing', [
        ['  ssshahahsss  ', '     sssss     ', '               ', '               ', '               ', '               ', '               ', '               '],
        [' ssdddddddddss ', '   sssdgdsss   ', '       o       ', '               ', '               ', '               ', '               ', '               '],
        ['ssdddddddddddss', '  ssdddddddss  ', '    xsssssx    ', '               ', '               ', '               ', '               ', '               '],
        ['sddddddddddddds', ' ssgdddddddgss ', '   oxrdddrxo   ', '     l   l     ', '     l   l     ', '     l   l     ', '     l   l     ', '     rlklr     '],
        ['sddddddddddddds', ' sddddddddddds ', '  xxxddgddxxx  ', '       p       ', '               ', '               ', '               ', '               '],
        ['hdddddddddddddh', 'ssdddddddddddss', '  srdgdddgdrs  ', '   l p   p l   ', '   l       l   ', '   l       l   ', '   l       l   ', '   r       r   '],
        ['addddddddddddda', 'sddddddddddddds', '  sdddcdcddds  ', '      j j      ', '               ', '               ', '               ', '   l       l   '],
        ['hdddddddddddddh', 'sgdddddddddddgs', ' osdgddgddgdso ', '    p  m  p    ', '               ', '       q       ', '               ', '   k       k   '],
        ['addddddddddddda', 'sddddddddddddds', '  sdddcdcddds  ', '      j j      ', '               ', '               ', '               ', '   l       l   '],
        ['hdddddddddddddh', 'ssdddddddddddss', '  srdgdddgdrs  ', '   l p   p l   ', '   l       l   ', '   l       l   ', '   l       l   ', '   r       r   '],
        ['sddddddddddddds', ' sddddddddddds ', '  xxxddgddxxx  ', '       p       ', '               ', '               ', '               ', '               '],
        ['sddddddddddddds', ' ssgdddddddgss ', '   oxrdddrxo   ', '     l   l     ', '     l   l     ', '     l   l     ', '     l   l     ', '     rlklr     '],
        ['ssdddddddddddss', '  ssdddddddss  ', '    xsssssx    ', '               ', '               ', '               ', '               ', '               '],
        [' ssdddddddddss ', '   sssdgdsss   ', '       o       ', '               ', '               ', '               ', '               ', '               '],
        ['  sssha#ahsss  ', '     sssss     ', '               ', '               ', '               ', '               ', '               ', '               ']
    ])
        .key('s', darkStair, allthemods.noHatch())
        .key('x', darkSlab, allthemods.noHatch())
        .key('d', darkStone, allthemods.noHatch())
        .key('g', darkGuilded, allthemods.noHatch())
        .key('r', runeBlock, allthemods.noHatch())
        .key('p', darkPedestal, allthemods.noHatch())
        .key('l', arcanePillar, allthemods.noHatch())
        .key('k', crystalBlock, allthemods.noHatch())
        .key('a', arcaneBlock, allthemods.noHatch())
        .key('c', arcaneChiseled, allthemods.noHatch())
        .key('m', magneticPedestal, allthemods.noHatch())
        .key('q', quantumBlock, allthemods.noHatch())
        .key('o', arcaneObelisk, allthemods.noHatch())
        .key('j', utremJar, allthemods.noHatch())
        .key('h', darkStone, hatchBlock)
        .build()

    allthemods.simpleElectricCraftingMultiBlock(
        'Runic Star Altar',
        'star_altar',
        star_altar,
        altarShape,
        allthemods.progressBar(104, 22, 'arrow'),
        itemInputs => itemInputs.addSlots(8, 8, 5, 3),
        itemOuputs => itemOuputs.addSlot(140, 24),
        fluidInputs => {},
        fluidOutputs => {},
        'darkstone_casing',
        'runic_multis',
        true,
        false,
        false
    )
})