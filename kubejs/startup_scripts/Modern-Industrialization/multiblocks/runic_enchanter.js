let runic_enchanter

MIMachineEvents.registerRecipeTypes(allthemods => {
    runic_enchanter = allthemods.register('runic_enchanter')
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
    const arcanePillar = allthemods.memberOfBlock('forbidden_arcanus:arcane_polished_darkstone_pillar')
    const arcaneBlock = allthemods.memberOfBlock('forbidden_arcanus:arcane_polished_darkstone')
    const crystalBlock = allthemods.memberOfBlock('forbidden_arcanus:arcane_crystal_block')
    const quantumBlock = allthemods.memberOfBlock('forbidden_arcanus:quantum_injector')
    const soulDeep = allthemods.memberOfBlock('apothic_enchanting:soul_touched_deepshelf')
    const soulSculk = allthemods.memberOfBlock('apothic_enchanting:soul_touched_sculkshelf')
    const echoSculk = allthemods.memberOfBlock('apothic_enchanting:echoing_sculkshelf')
    const soulLantern = allthemods.memberOfBlock('minecraft:soul_lantern')
    const enchantTable = allthemods.memberOfBlock('minecraft:enchanting_table')
    const hatchBlock = allthemods.hatchOf('item_input', 'item_output', 'fluid_input', 'energy_input')

    const enchanterShape = allthemods.layeredShape('darkstone_casing', [
        ['    sssss    ', '             ', '             ', '             ', '             '],
        ['   usrrrsj   ', '     xxx     ', '             ', '             ', '             '],
        ['  jjdddddjj  ', '   uxdddxm   ', '             ', '             ', '             '],
        [' jjrdddddrjm ', '  mjjdgdjju  ', '   j  p  j   ', '   i     i   ', '             '],
        ['ssddhccchddss', '  xjglllgjx  ', '    p   p    ', '             ', '             '],
        ['srddchhhcddrs', ' xddlssslddx ', '             ', '             ', '             '],
        ['srddchhhcddrs', ' xdglsgslgdx ', '   p  t  p   ', '             ', '      q      '],
        ['srddchhhcddrs', ' xddlssslddx ', '             ', '             ', '             '],
        ['ssddhccchddss', '  xjglllgjx  ', '    p   p    ', '             ', '             '],
        [' ujrdddddrju ', '  jjjdgdjjj  ', '   j  p  j   ', '   i     i   ', '             '],
        ['  ujdddddjm  ', '   uxdddxu   ', '             ', '             ', '             '],
        ['   usrrrsu   ', '     xxx     ', '             ', '             ', '             '],
        ['    ss#ss    ', '             ', '             ', '             ', '             ']
    ])
        .key('s', darkStair, allthemods.noHatch())
        .key('x', darkSlab, allthemods.noHatch())
        .key('d', darkStone, allthemods.noHatch())
        .key('g', darkGuilded, allthemods.noHatch())
        .key('r', runeBlock, allthemods.noHatch())
        .key('p', darkPedestal, allthemods.noHatch())
        .key('l', arcanePillar, allthemods.noHatch())
        .key('c', crystalBlock, allthemods.noHatch())
        .key('q', quantumBlock, allthemods.noHatch())
        .key('t', enchantTable, allthemods.noHatch())
        .key('u', soulSculk, allthemods.noHatch())
        .key('j', soulDeep, allthemods.noHatch())
        .key('m', echoSculk, allthemods.noHatch())
        .key('i', soulLantern, allthemods.noHatch())
        .key('h', darkStone, hatchBlock)
        .build()

    allthemods.simpleElectricCraftingMultiBlock(
        'Runic Enchanter',
        'runic_enchanter',
        runic_enchanter,
        enchanterShape,
        allthemods.progressBar(56, 22, 'arrow'),
        itemInputs => itemInputs.addSlots(26, 8, 1, 3),
        itemOuputs => itemOuputs.addSlot(92, 24),
        fluidInputs => fluidInputs.addSlots(8, 16, 1, 2),
        fluidOutputs => {},
        'darkstone_casing',
        'runic_multis',
        true,
        false,
        false
    )
})
