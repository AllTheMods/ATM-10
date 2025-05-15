let runic_crucible;

MIMachineEvents.registerRecipeTypes(allthemods => {
    runic_crucible = allthemods.register('runic_crucible')
        .withItemInputs()
        .withItemOutputs()
        .withFluidInputs()
        .withFluidOutputs()
})

MIMachineEvents.registerMachines(allthemods => {

    const darkStair = allthemods.memberOfBlock('forbidden_arcanus:polished_darkstone_stairs')
    const darkStone = allthemods.memberOfBlock('forbidden_arcanus:polished_darkstone')
    const darkGuilded = allthemods.memberOfBlock('forbidden_arcanus:gilded_chiseled_polished_darkstone')
    const runeBlock = allthemods.memberOfBlock('forbidden_arcanus:rune_block')
    const arcanePillar = allthemods.memberOfBlock('forbidden_arcanus:arcane_polished_darkstone_pillar')
    const arcaneBlock = allthemods.memberOfBlock('forbidden_arcanus:arcane_polished_darkstone')
    const crystalBlock = allthemods.memberOfBlock('forbidden_arcanus:arcane_crystal_block')
    const quantumBlock = allthemods.memberOfBlock('forbidden_arcanus:quantum_injector')
    const hatchBlock = allthemods.hatchOf('item_input', 'item_output', 'fluid_input', 'fluid_output', 'energy_input')

    const crucibleShape = allthemods.layeredShape('darkstone_casing', [
        ['rsssr', 'phahp', 'c   c', '     '],
        ['sddds', 'hsssh', '     ', '     '],
        ['sdgds', 'ascsa', '     ', '  q  '],
        ['sddds', 'hsssh', '     ', '     '],
        ['rs#sr', 'phahp', 'c   c', '     ']
    ])
        .key('s', darkStair, allthemods.noHatch())
        .key('d', darkStone, allthemods.noHatch())
        .key('g', darkGuilded, allthemods.noHatch())
        .key('r', runeBlock, allthemods.noHatch())
        .key('p', arcanePillar, allthemods.noHatch())
        .key('a', arcaneBlock, allthemods.noHatch())
        .key('c', crystalBlock, allthemods.noHatch())
        .key('q', quantumBlock, allthemods.noHatch())
        .key('h', darkStone, hatchBlock)
        .build();

    allthemods.simpleElectricCraftingMultiBlock(
        'Runic Crucible',
        'runic_crucible',
        runic_crucible,
        crucibleShape,
        allthemods.progressBar(116, 6, 'arrow'),
        itemInputs => itemInputs.addSlots(44, 8, 3, 1),
        itemOuputs => itemOuputs.addSlot(172, 8),
        fluidInputs => fluidInputs.addSlots(8, 8, 2, 1),
        fluidOutputs => fluidOutputs.addSlot(154, 8),
        'darkstone_casing',
        'runic_multis',
        true,
        false,
        false
    )
})