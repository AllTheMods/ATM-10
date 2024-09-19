// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
    //Atomic Disassembler
    allthemods.remove({ id: 'mekanism:atomic_disassembler' })
    allthemods.shaped('mekanism:atomic_disassembler', ['ITI', 'IAI', ' P '], {
        I: 'mekanism:alloy_reinforced',
        T: 'mekanism:basic_induction_cell',
        A: 'mekanism:ultimate_control_circuit',
        P: 'allthemodium:allthemodium_pickaxe'
    })
    //Meka Tool
    allthemods.remove({ id: 'mekanism:meka_tool' })
    allthemods.shaped('mekanism:meka_tool', ['UCU', 'TDT', 'PBP'], {
        U: 'mekanism:ultimate_control_circuit',
        C: 'mekanism:configurator',
        T: '#c:plates/unobtainium',
        D: 'mekanism:atomic_disassembler',
        B: 'mekanism:ultimate_induction_cell',
        P: 'mekanism:pellet_polonium'
    })
    //MekaSuit Helmet
    allthemods.remove({ id: 'mekanism:mekasuit_helmet' })
    allthemods.shaped('mekanism:mekasuit_helmet', ['CAC', 'HUH', 'PIP'], {
        A: 'mekanism:pellet_antimatter',
        H: 'mekanism:hdpe_sheet',
        C: 'mekanism:ultimate_control_circuit',
        P: 'mekanism:pellet_polonium',
        I: 'mekanism:ultimate_induction_cell',
        U: 'allthemodium:unobtainium_helmet'
    })
    //MekaSuit Bodyarmor
    allthemods.remove({ id: 'mekanism:mekasuit_bodyarmor' })
    allthemods.shaped('mekanism:mekasuit_bodyarmor', ['CAC', 'HUH', 'PIP'], {
        A: 'mekanism:pellet_antimatter',
        H: 'mekanism:hdpe_sheet',
        C: 'mekanism:ultimate_control_circuit',
        P: 'mekanism:pellet_polonium',
        I: 'mekanism:ultimate_induction_cell',
        U: 'allthemodium:unobtainium_chestplate'
    })
    //MekaSuit Pants
    allthemods.remove({ id: 'mekanism:mekasuit_pants' })
    allthemods.shaped('mekanism:mekasuit_pants', ['CAC', 'HUH', 'PIP'], {
        A: 'mekanism:pellet_antimatter',
        H: 'mekanism:hdpe_sheet',
        C: 'mekanism:ultimate_control_circuit',
        P: 'mekanism:pellet_polonium',
        I: 'mekanism:ultimate_induction_cell',
        U: 'allthemodium:unobtainium_leggings'
    })
    //MekaSuit Boots
    allthemods.remove({ id: 'mekanism:mekasuit_boots' })
    allthemods.shaped('mekanism:mekasuit_boots', ['CAC', 'HUH', 'PIP'], {
        A: 'mekanism:pellet_antimatter',
        H: 'mekanism:hdpe_sheet',
        C: 'mekanism:ultimate_control_circuit',
        P: 'mekanism:pellet_polonium',
        I: 'mekanism:ultimate_induction_cell',
        U: 'allthemodium:unobtainium_boots'
    })
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.