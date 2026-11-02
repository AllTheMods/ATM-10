// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

MIMachineEvents.registerCasings(event => {
    event.registerBlockImitation('black_quartz_casing', 'actuallyadditions:black_quartz_block')
})

let auto_empowerer

let auto_reconstructor

let auto_fermenting_press

MIMachineEvents.registerRecipeTypes(event => {
    auto_empowerer = event.register('auto_empowerer')
        .withItemInputs()
        .withItemOutputs()

    auto_reconstructor = event.register('auto_reconstructor')
        .withItemInputs()
        .withItemOutputs()

    auto_fermenting_press = event.register('auto_fermenting_press')
        .withFluidOutputs()
        .withItemInputs()
})

MIMachineEvents.registerMachines(event => {
    const blackQuartz = event.memberOfBlock('actuallyadditions:black_quartz_block')
    const greenhouseGlass = event.memberOfBlock('actuallyadditions:greenhouse_glass')
    const atomicReconstructor = event.memberOfBlock('actuallyadditions:atomic_reconstructor')
    const empowerer = event.memberOfBlock('actuallyadditions:empowerer')
    const hatchBlock = event.hatchOf('item_input', 'item_output', 'energy_input')

    const empowererShape = event.layeredShape('black_quartz_casing', [
        ['bbb', 'bgb', 'bgb', 'bbb'],
        ['bbb', 'geg', 'g g', 'bab'],
        ['b#b', 'bgb', 'bgb', 'bbb']
    ])
        .key('b', blackQuartz, hatchBlock)
        .key('a', atomicReconstructor, event.noHatch())
        .key('g', greenhouseGlass, event.noHatch())
        .key('e', empowerer, event.noHatch())
        .build()

    event.simpleElectricCraftingMultiBlock(
        'Automatic Empowerer',
        'auto_empowerer',
        auto_empowerer,
        empowererShape,
        event.progressBar(114, 6, 'arrow'),
        itemInputs => itemInputs.addSlots(8, 8, 5, 1),
        itemOutputs => itemOutputs.addSlot(150, 8),
        fluidInputs => {},
        fluidOutputs => {},
        'black_quartz_casing',
        'aa_auto',
        true,
        false,
        false
    )
})

MIMachineEvents.registerMachines(event => {
    const blackQuartz = event.memberOfBlock('actuallyadditions:black_quartz_block')
    const greenhouseGlass = event.memberOfBlock('actuallyadditions:greenhouse_glass')
    const atomicReconstructor = event.memberOfBlock('actuallyadditions:atomic_reconstructor')
    const ironCasing = event.memberOfBlock('actuallyadditions:iron_casing')
    const hatchBlock = event.hatchOf('item_input', 'item_output', 'energy_input')

    const reconstructorShape = event.layeredShape('black_quartz_casing', [
        ['bbb', 'bgb', 'bgb', 'bbb'],
        ['bab', 'g g', 'g g', 'bib'],
        ['b#b', 'bgb', 'bgb', 'bbb']
    ])
        .key('b', blackQuartz, hatchBlock)
        .key('a', atomicReconstructor, event.noHatch())
        .key('g', greenhouseGlass, event.noHatch())
        .key('i', ironCasing, event.noHatch())
        .build()

    event.simpleElectricCraftingMultiBlock(
        'Automatic Reconstructor',
        'auto_reconstructor',
        auto_reconstructor,
        reconstructorShape,
        event.progressBar(42, 6, 'arrow'),
        itemInputs => itemInputs.addSlots(8, 8, 1, 1),
        itemOutputs => itemOutputs.addSlot(78, 8),
        fluidInputs => {},
        fluidOutputs => {},
        'black_quartz_casing',
        'aa_auto',
        true,
        false,
        false
    )
})

MIMachineEvents.registerMachines(event => {
    const blackQuartz = event.memberOfBlock('actuallyadditions:black_quartz_block')
    const greenhouseGlass = event.memberOfBlock('actuallyadditions:greenhouse_glass')
    const canolaPress = event.memberOfBlock('actuallyadditions:canola_press')
    const fermentingBarrel = event.memberOfBlock('actuallyadditions:fermenting_barrel')
    const hatchBlock = event.hatchOf('item_input', 'fluid_output', 'energy_input')

    const pressShape = event.layeredShape('black_quartz_casing', [
        ['bbb', 'bgb', 'bgb', 'bbb'],
        ['bbb', 'gpg', 'gfg', 'bbb'],
        ['b#b', 'bgb', 'bgb', 'bbb']
    ])
        .key('b', blackQuartz, hatchBlock)
        .key('g', greenhouseGlass, event.noHatch())
        .key('p', canolaPress, event.noHatch())
        .key('f', fermentingBarrel, event.noHatch())
        .build()

    event.simpleElectricCraftingMultiBlock(
        'Automatic Fermenting Press',
        'auto_fermenting_press',
        auto_fermenting_press,
        pressShape,
        event.progressBar(42, 6, 'arrow'),
        itemInputs => itemInputs.addSlots(8, 8, 1, 1),
        itemOutputs => {},
        fluidInputs => {},
        fluidOutputs => fluidOutputs.addSlot(78, 8),
        'black_quartz_casing',
        'aa_auto',
        true,
        false,
        false
    )
})

MIRegistrationEvents.registerCableTiers(event => {
    event.register(
        'atomic',
        'Atomic',
        'Atomic',
        64,
        'black_quartz_casing'
    )
})

MIMachineEvents.registerHatches(event => {
    event.energy('atomic')

    event.fluid(
        'Atomic',
        'atomic',
        'black_quartz_casing',
        4096
    )

    event.item(
        'Atomic',
        'atomic',
        'black_quartz_casing',
        3, 5,
        8, 17
    )
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
