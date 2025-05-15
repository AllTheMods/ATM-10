MIMachineEvents.registerCasings(allthemods => {
    allthemods.registerBlockImitation('darkstone_casing', 'forbidden_arcanus:polished_darkstone')
})

MIRegistrationEvents.registerCableTiers(allthemods => {
    allthemods.register(
        'runic',
        'Runic',
        'Runic',
        262144,
        'darkstone_casing',
    );
})

MIMachineEvents.registerHatches(allthemods => {
    allthemods.energy('runic')

    allthemods  .fluid(
        'Runic',
        'runic',
        'darkstone_casing',
        4096
    )

    allthemods.item(
        'Runic',
        'runic',
        'darkstone_casing',
        3, 5,
        8, 17
    )
})