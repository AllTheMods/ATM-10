// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ItemEvents.modifyTooltips(allthemods => {

    // ##### Gear #####

    //Mekasuit
    allthemods.add(/mekanism:mekasuit_/, [
        Text.red(Text.translate('tooltip.atm.measuit_r')),
        Text.green(Text.translate('tooltip.atm.measuit_g'))
    ])
    //Meka Tool
    allthemods.add('mekanism:meka_tool', [
        Text.red(Text.translate('tooltip.atm.meka_tool_r')),
        Text.green(Text.translate('tooltip.atm.meka_tool_g1')),
        Text.green(Text.translate('tooltip.atm.meka_tool_g2'))
    ])

    // ##### Generators #####

    //Solar Generator
    allthemods.add('mekanismgenerators:solar_generator', [
        Text.green(Text.translate('tooltip.atm.solar_generator_g'))
    ])
    //Advanced Solar Generator
    allthemods.add('mekanismgenerators:advanced_solar_generator', [
        Text.green(Text.translate('tooltip.atm.advanced_solar_generator_g'))
    ])
    //Wind Generator
    allthemods.add('mekanismgenerators:wind_generator', [
        Text.green(Text.translate('tooltip.atm.wind_generator_g'))
    ])
    //Heat Generator
    allthemods.add('mekanismgenerators:heat_generator', [
        Text.green(Text.translate('tooltip.atm.heat_generator_g'))
    ])
    //Gas Burning Generator
    allthemods.add('mekanismgenerators:gas_burning_generator', [
        Text.red(Text.translate('tooltip.atm.gas_burning_generator_r1')),
        Text.red(Text.translate('tooltip.atm.gas_burning_generator_r2'))
    ])
    //Fission Generator
    allthemods.add(/mekanismgenerators:fission_/, [
        Text.red(Text.translate('tooltip.atm.fission_r')),
    ])
    //Fusion Generator
    allthemods.add(/mekanismgenerators:fusion_/, [
        Text.red(Text.translate('tooltip.atm.fusion_r')),
        Text.green(Text.translate('tooltip.atm.fusion_g')),
    ])
    //Turbine
    allthemods.add(/mekanismgenerators:turbine_/, [
        Text.green(Text.translate('tooltip.atm.turbine_g')),
    ])
    //Boiler
    allthemods.add(/mekanism:boiler_/, [
        Text.green(Text.translate('tooltip.atm.boiler_g')),
    ])

    // ##### Machines #####

    //Upgrades
    allthemods.add(/mekanism:upgrade_/, [
        Text.green(Text.translate('tooltip.atm.upgrade_g'))
    ])
    //Waste Barrel
    allthemods.add('mekanism:radioactive_waste_barrel', [
        Text.green(Text.translate('tooltip.atm.radioactive_waste_barrel_g'))
    ])
    //Thermal Evaporation Tower
    allthemods.add(/mekanism:thermal_evaporation_/, [
        Text.green(Text.translate('tooltip.atm.thermal_evaporation_g'))
    ])
    //Solar Neutron Activator
    allthemods.add('mekanism:solar_neutron_activator', [
        Text.green(Text.translate('tooltip.atm.solar_neutron_activator_g1')),
        Text.green(Text.translate('tooltip.atm.solar_neutron_activator_g2'))
    ])
    //Isotopic Centrifuge
    allthemods.add('mekanism:isotopic_centrifuge', [
        Text.green(Text.translate('tooltip.atm.isotopic_centrifuge_g'))
    ])
    //Electric Pump
    allthemods.add('mekanism:electric_pump', [
        Text.green(Text.translate('tooltip.atm.electric_pump_g'))
    ])
    //SPS
    allthemods.add(/mekanism:sps_/, [
        Text.green(Text.translate('tooltip.atm.sps_g'))
    ])
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
