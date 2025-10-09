let auto_forge

MIMachineEvents.registerRecipeTypes(allthemods => {
    auto_forge = allthemods.register('auto_forge')
        .withItemInputs()
        .withItemOutputs()
        .withFluidInputs()
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
    const quantumBlock = allthemods.memberOfBlock('forbidden_arcanus:quantum_injector')
    const hephForge = allthemods.memberOfBlock('forbidden_arcanus:hephaestus_forge_tier_5')
    const hatchBlock = allthemods.hatchOf('item_input', 'item_output', 'fluid_input', 'fluid_output', 'energy_input')

    const forgeShape = allthemods.layeredShape('darkstone_casing', [
        ['ssshahahsss', '   xsssx   ', '           ', '           ', '           '],
        ['sddddddddds', ' oxxdddxxo ', '           ', '           ', '           '],
        ['sdrdddddrds', ' xdddgdddx ', '     p     ', '           ', '           '],
        ['hdddddddddh', 'xxdgdddgdxx', '   p   p   ', '           ', '           '],
        ['addddddddda', 'sddddcdddds', '           ', '           ', '           '],
        ['hdddddddddh', 'sdgdcgcdgds', '  p  f  p  ', '           ', '     q     '],
        ['addddddddda', 'sddddcdddds', '           ', '           ', '           '],
        ['hdddddddddh', 'xxdgdddgdxx', '   p   p   ', '           ', '           '],
        ['sdrdddddrds', ' xdddgdddx ', '     p     ', '           ', '           '],
        ['sddddddddds', ' oxxdddxxo ', '           ', '           ', '           '],
        ['sssha#ahsss', '   xsssx   ', '           ', '           ', '           ']
    ])
        .key('s', darkStair, allthemods.noHatch())
        .key('x', darkSlab, allthemods.noHatch())
        .key('d', darkStone, allthemods.noHatch())
        .key('g', darkGuilded, allthemods.noHatch())
        .key('r', runeBlock, allthemods.noHatch())
        .key('p', darkPedestal, allthemods.noHatch())
        .key('a', arcaneBlock, allthemods.noHatch())
        .key('c', arcaneChiseled, allthemods.noHatch())
        .key('f', hephForge, allthemods.noHatch())
        .key('q', quantumBlock, allthemods.noHatch())
        .key('o', arcaneObelisk, allthemods.noHatch())
        .key('h', darkStone, hatchBlock)
        .build()

    allthemods.simpleElectricCraftingMultiBlock(
        'Automatic Hephaestus Forge',
        'auto_forge',
        auto_forge,
        forgeShape,
        allthemods.progressBar(92, 30, 'arrow'),
        itemInputs => itemInputs.addSlots(28, 16, 3, 3),
        itemOutputs => itemOutputs.addSlot(128, 32),
        fluidInputs => fluidInputs.addSlots(8, 8, 1, 4),
        fluidOutputs => {},
        'darkstone_casing',
        'runic_multis',
        true,
        false,
        false
    )
})