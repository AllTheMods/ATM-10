
let auto_enchanting_apparatus

MIMachineEvents.registerRecipeTypes(event => {
    auto_enchanting_apparatus = event.register('auto_enchanting_apparatus')
    .withItemInputs()
    .withItemOutputs()
    .withFluidInputs()
})

MIMachineEvents.registerMachines(event => {

    const hatch = event.hatchOf(
        'item_input',
        'item_output',
        'energy_input',
        'fluid_input'
    )

    const blocks = {
        d: 'forbidden_arcanus:polished_darkstone',
        h: 'forbidden_arcanus:polished_darkstone',
        g: 'forbidden_arcanus:gilded_chiseled_polished_darkstone',
        l: 'forbidden_arcanus:arcane_polished_darkstone_pillar',
        c: 'ars_nouveau:arcane_core',
        a: 'ars_nouveau:enchanting_apparatus',
        p: 'ars_nouveau:arcane_pedestal',
        i: 'ars_nouveau:imbuement_chamber',
        j: 'ars_nouveau:source_jar',
        x: 'ars_nouveau:source_gem_block'
    }
    const builder = event.layeredShape('darkstone_casing', [
        [' hhhhh ', '       ', '       ', '       ', '       '],
        ['hdddddh', ' lgdgl ', ' l i l ', ' j   j ', ' x   x '],
        ['hdddddh', ' gdddg ', '  ppp  ', '       ', '       '],
        ['hddgddh', ' ddcdd ', '  pap  ', '       ', '       '],
        ['hdddddh', ' gdddg ', '  ppp  ', '       ', '       '],
        ['hdddddh', ' lgdgl ', ' l   l ', ' j   j ', ' x   x '],
        [' hh#hh ', '       ', '       ', '       ', '       ']
    ])

    Object.keys(blocks).forEach(key => {
        builder.key(
            key,
            event.memberOfBlock(blocks[key]),
            key === 'h' ? hatch : event.noHatch()
        )
    })

    event.simpleElectricCraftingMultiBlock(
        'Automated Enchanting Apparatus',
        'auto_enchanting_apparatus',
        auto_enchanting_apparatus,
        builder.build(),
        event.progressBar(104, 22, 'arrow'),

        itemInputs => itemInputs.addSlots(8, 8, 4, 3),
        itemOutputs => itemOutputs.addSlot(140, 24),
        fluidInputs => fluidInputs.addSlot(86,8),
        fluidOutputs => {},

        'darkstone_casing',
        'runic_multis',

        true,
        false,
        false)
})
