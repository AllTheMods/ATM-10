// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {

    function easyModuleRecipe(module, alloy, unique, extra) {
        allthemods.shaped(module, [
            'AUA',
            'AMA',
            'HEH'
            ], {
                A: alloy,
                U: unique,
                M: 'mekanism:module_base',
                H: 'mekanism:hdpe_sheet',
                E: extra
            }
        )
    }

    function hardModuleRecipe(module, top, center, bottom, unique, extra) {
        allthemods.shaped(module, [
            'TUT',
            'CMC',
            'BEB'
            ], {
                T: top,
                U: unique,
                C: center,
                M: 'mekanism:module_base',
                B: bottom,
                E: extra
            }
        )
    }



    //########## MEKA UNITS ##########
    //Energy Unit
    allthemods.remove('mekanism:module_energy_unit')
    easyModuleRecipe(
        'mekanism:module_energy_unit',
        'mekanism:alloy_reinforced',
        'mekanism:elite_induction_cell',
        '#c:plates/allthemodium'
    )
    //Laser Dissipation Unit
    allthemods.remove('mekanism:module_laser_dissipation_unit')
    easyModuleRecipe(
        'mekanism:module_laser_dissipation_unit',
        'mekanism:alloy_reinforced',
        'mekanism:laser_amplifier',
        '#c:plates/osmium'
    )
    //Radiation Shielding Unit
    allthemods.remove('mekanism:module_radiation_shielding_unit')
    easyModuleRecipe(
        'mekanism:module_radiation_shielding_unit',
        'mekanism:alloy_atomic',
        '#c:storage_blocks/lead',
        '#c:plates/unobtainium'
    )
    //Excavation Escalation Unit
    allthemods.remove('mekanism:module_excavation_escalation_unit')
    easyModuleRecipe(
        'mekanism:module_excavation_escalation_unit',
        'mekanism:alloy_reinforced',
        'allthemodium:allthemodium_pickaxe',
        'mekanism:ultimate_control_circuit'
    )
    //Attack Amplification Unit
    allthemods.remove('mekanism:module_attack_amplification_unit')
    easyModuleRecipe(
        'mekanism:module_attack_amplification_unit',
        'mekanism:alloy_reinforced',
        'minecraft:netherite_sword',
        'mekanism:ultimate_control_circuit'
    )
    //Farming Unit
    allthemods.remove('mekanism:module_farming_unit')
    easyModuleRecipe(
        'mekanism:module_farming_unit',
        'mekanism:alloy_reinforced',
        'minecraft:diamond_hoe',
        'mekanism:elite_control_circuit'
    )
    //Shearing Unit
    allthemods.remove('mekanism:module_shearing_unit')
    easyModuleRecipe(
        'mekanism:module_shearing_unit',
        'mekanism:alloy_infused',
        'minecraft:shears',
        'mekanism:elite_control_circuit'
    )
    //Silk Touch Unit
    allthemods.remove('mekanism:module_silk_touch_unit')
    hardModuleRecipe(
        'mekanism:module_silk_touch_unit',
        'mekanism:alloy_atomic',
        'allthemodium:allthemodium_pickaxe',
        'mekanism:elite_control_circuit',
        'mekanism:block_refined_glowstone',
        'mekanism:enriched_gold'
    )
    //Ore Refinement Unit
    allthemods.remove('mekanism:module_fortune_unit')
    hardModuleRecipe(
        'mekanism:module_fortune_unit',
        'mekanism:alloy_atomic',
        'allthemodium:vibranium_pickaxe',
        'mekanism:ultimate_control_circuit',
        'mekanism:block_refined_obsidian',
        'mekanism:enriched_diamond'
    )
    //Blasting Unit
    allthemods.remove('mekanism:module_blasting_unit')
    hardModuleRecipe(
        'mekanism:module_blasting_unit',
        'mekanism:alloy_reinforced',
        'minecraft:tnt',
        'mekanism:ultimate_control_circuit',
        'minecraft:tnt',
        'mekanism:enriched_carbon'
    )
    //Vein Mining Unit
    allthemods.replaceInput(
        {output: 'mekanism:module_vein_mining_unit'},
        'mekanism:pellet_polonium',
        'mekanism:enriched_gold'
    )
    //Teleporation Unit
    allthemods.replaceInput(
        {output: 'mekanism:module_teleportation_unit'},
        'mekanism:pellet_antimatter',
        'mekanism:pellet_polonium'
    )
    //Electrolytic Breathing Unit
    allthemods.remove('mekanism:module_electrolytic_breathing_unit')
    easyModuleRecipe(
        'mekanism:module_electrolytic_breathing_unit',
        'mekanism:alloy_reinforced',
        'mekanism:electrolytic_core',
        'mekanism:enriched_tin'
    )
    //Inhalation Purification Unit
    allthemods.replaceInput(
        {output: 'mekanism:module_inhalation_purification_unit'},
        'mekanism:pellet_polonium',
        'mekanism:enriched_carbon'
    )
    //Vision Enhancement Unit
    allthemods.replaceInput(
        {output: 'mekanism:module_vision_enhancement_unit'},
        'mekanism:pellet_polonium',
        'mekanism:enriched_diamond'
    )
    allthemods.replaceInput(
        {output: 'mekanism:module_vision_enhancement_unit'},
        'minecraft:emerald',
        'mekanism:ultimate_control_circuit'
    )
    //Nutritional Injection Unit
    allthemods.replaceInput(
        {output: 'mekanism:module_nutritional_injection_unit'},
        'mekanism:pellet_polonium',
        'mekanism:hdpe_sheet'
    )
    //Dosimeter Unit
    allthemods.replaceInput(
        {output: 'mekanism:module_dosimeter_unit'},
        'mekanism:alloy_infused',
        'mekanism:alloy_reinforced'
    )
    //Geiger Unit
    allthemods.replaceInput(
        {output: 'mekanism:module_geiger_unit'},
        'mekanism:alloy_infused',
        'mekanism:alloy_reinforced'
    )
    //Jetpack Unit
    allthemods.remove('mekanism:module_jetpack_unit')
    hardModuleRecipe(
        'mekanism:module_jetpack_unit',
        'mekanism:alloy_atomic',
        'mekanism:ultimate_control_circuit',
        'mekanism:pellet_polonium',
        'mekanism:jetpack',
        'mekanism:ingot_refined_glowstone'
    )
    //Charge Distribution Unit
    allthemods.remove('mekanism:module_charge_distribution_unit')
    hardModuleRecipe(
        'mekanism:module_charge_distribution_unit',
        'mekanism:alloy_atomic',
        'mekanism:ultimate_control_circuit',
        'mekanism:ultimate_induction_provider',
        'mekanism:ultimate_induction_cell',
        'mekanism:pellet_polonium'
    )
    //Gravitational Modulating Unit
    allthemods.remove('mekanism:module_gravitational_modulating_unit')
    hardModuleRecipe(
        'mekanism:module_gravitational_modulating_unit',
        'mekanism:alloy_atomic',
        'mekanism:module_jetpack_unit',
        'mekanism:ultimate_induction_provider',
        'minecraft:nether_star',
        'allthemodium:unobtainium_block'
    )
    //Elytra Unit
    allthemods.remove('mekanism:module_elytra_unit')
    hardModuleRecipe(
        'mekanism:module_elytra_unit',
        'mekanism:alloy_atomic',
        '#c:plates/allthemodium',
        '#c:ingots/netherite',
        'mekanism:hdpe_elytra',
        'mekanism:ultimate_control_circuit',
    )
    //Locomotive Boosting Unit
    allthemods.remove('mekanism:module_locomotive_boosting_unit')
    hardModuleRecipe(
        'mekanism:module_locomotive_boosting_unit',
        'mekanism:alloy_atomic',
        'mekanism:advanced_induction_provider',
        'mekanism:ingot_refined_glowstone',
        'minecraft:netherite_leggings',
        'mekanism:ultimate_control_circuit',
    )
    //Gyroscopic Stabilization Unit
    allthemods.remove('mekanism:module_gyroscopic_stabilization_unit')
    hardModuleRecipe(
        'mekanism:module_gyroscopic_stabilization_unit',
        'mekanism:alloy_atomic',
        '#c:obsidians',
        '#c:plates/steel',
        '#c:ingots/allthemodium',
        'mekanism:pellet_polonium',
    )
    //Hydrostatic Repulsor Unit
    allthemods.replaceInput(
        {output: 'mekanism:module_hydrostatic_repulsor_unit'},
        'mekanism:pellet_polonium',
        'mekanism:hdpe_sheet'
    )
    //Motorized Servo
    allthemods.remove('mekanism:module_motorized_servo_unit')
    hardModuleRecipe(
        'mekanism:module_motorized_servo_unit',
        'mekanism:alloy_reinforced',
        '#c:ices/blue',
        '#c:plates/osmium',
        '#c:plates/vibranium',
        'mekanism:pellet_polonium',
    )
    //Hydraulic Propulsion
    allthemods.remove('mekanism:module_hydraulic_propulsion_unit')
    hardModuleRecipe(
        'mekanism:module_hydraulic_propulsion_unit',
        'mekanism:alloy_atomic',
        'mekanism:elite_induction_provider',
        '#c:plates/silver',
        'mekanism:free_runners',
        'mekanism:pellet_polonium',
    )
    //Magnetic Attraction
    allthemods.remove('mekanism:module_magnetic_attraction_unit')
    hardModuleRecipe(
        'mekanism:module_magnetic_attraction_unit',
        'mekanism:alloy_reinforced',
        'mekanism:elite_control_circuit',
        '#c:storage_blocks/redstone',
        'simplemagnets:basicmagnet',
        '#c:storage_blocks/allthemodium',
    )
    //Frost Walker
    allthemods.remove('mekanism:module_frost_walker_unit')
    hardModuleRecipe(
        'mekanism:module_frost_walker_unit',
        'mekanism:alloy_reinforced',
        '#c:ices/blue',
        'mekanism:elite_control_circuit',
        'mekanism:hydrogen_bucket',
        'mekanism:oxygen_bucket',
    )
    //Soul Surfer
    allthemods.remove('mekanism:module_soul_surfer_unit')
    hardModuleRecipe(
        'mekanism:module_soul_surfer_unit',
        'mekanism:alloy_atomic',
        'mekanism:free_runners',
        '#c:plates/osmium',
        '#minecraft:soul_fire_base_blocks',
        'mekanism:ultimate_control_circuit',
    )
    //Solar Recharging
    allthemods.remove('mekanismgenerators:module_solar_recharging_unit')
    hardModuleRecipe(
        'mekanismgenerators:module_solar_recharging_unit',
        'mekanismgenerators:solar_generator',
        'mekanism:alloy_reinforced',
        'mekanism:elite_induction_cell',
        'mekanismgenerators:advanced_solar_generator',
        'mekanism:elite_induction_provider',
    )
    //Solar Recharging
    allthemods.remove('mekanismgenerators:module_geothermal_generator_unit')
    hardModuleRecipe(
        'mekanismgenerators:module_geothermal_generator_unit',
        'mekanismgenerators:heat_generator',
        'mekanism:alloy_reinforced',
        'mekanism:elite_induction_cell',
        'mekanism:superheating_element',
        'mekanism:elite_induction_provider',
    )
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.