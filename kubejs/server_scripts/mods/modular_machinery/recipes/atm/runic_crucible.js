// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
    //Liquid Aureal
        allthemods.recipes.modular_machinery_reborn.machine_recipe('atm:runic_crucible', 100)
            .requireItem('2x forbidden_arcanus:arcane_crystal_dust', 46, 8)
            .requireFluid('250x minecraft:water', 8, 8)
            .requireSource(1000, 27, 8)
            .produceFluid('250x kubejs:liquid_aureal', 122, 8)
            .progressX(82)
            .height(49)
            .width(148)

    //Liquid Souls
        allthemods.recipes.modular_machinery_reborn.machine_recipe('atm:runic_crucible', 100)
            .requireItem('forbidden_arcanus:soul', 46, 8)
            .requireFluid('500x kubejs:unrefined_liquid_souls', 8, 8)
            .requireSource(2000, 27, 8)
            .produceFluid('500x kubejs:liquid_souls', 122, 8)
            .progressX(82)
            .height(49)
            .width(148)

    //Enchanted Souls
        allthemods.recipes.modular_machinery_reborn.machine_recipe('atm:runic_crucible', 100)
            .requireSource(2500, 8, 8)
            .requireFluid('1000x kubejs:liquid_aureal', 27, 8)
            .requireItem('forbidden_arcanus:soul', 46, 8)
            .requireItem('reliquary:holy_hand_grenade', 65, 8)
            .progressX(101)
            .progressY(9)
            .produceItem('forbidden_arcanus:enchanted_soul', 141, 8)
            .width(167)
            .height(49)

    //Corrupt Soul
        allthemods.recipes.modular_machinery_reborn.machine_recipe('atm:runic_crucible', 100)
            .requireSource(2500, 8, 8)
            .requireItem('4x forbidden_arcanus:corrupti_dust', 27, 8)
            .requireItem('forbidden_arcanus:soul', 46, 8)
            .requireItem('4x eternal_starlight:trapped_soul', 65, 8)
            .progressX(101)
            .progressY(9)
            .produceItem('forbidden_arcanus:corrupt_soul', 141, 8)
            .width(167)
            .height(49)

    //Obsidian Steel
        allthemods.recipes.modular_machinery_reborn.machine_recipe('atm:runic_crucible', 150)
            .requireSource(2500, 8, 8)
            .requireFluid('500x kubejs:liquid_souls', 27, 8)
            .requireItem('2x mekanism:dust_obsidian', 46, 8)
            .requireItem('alltheores:steel_ingot', 65, 8)
            .progressX(101)
            .progressY(9)
            .produceItem('forbidden_arcanus:obsidiansteel_ingot', 141, 8)
            .width(167)
            .height(49)
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.