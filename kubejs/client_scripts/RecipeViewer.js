// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMod 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

const runicYEET = [
    'modern_industrialization:runic_energy_output_hatch',
    'extended_industrialization:runic_tesla_receiver_hatch',
    'modern_industrialization:superconductor_runic_transformer',
    'modern_industrialization:runic_superconductor_transformer',
    'modern_industrialization:runic_ev_transformer',
    'modern_industrialization:runic_storage_unit',
    'modern_industrialization:ev_runic_transformer',
    'forbidden_arcanus:corrupted_arcane_crystal_block'
]

RecipeViewerEvents.removeEntriesCompletely('item', allthemods => {
    allthemods.remove('quarryplus:adv_quarry')
    allthemods.remove('allthetweaks:greg_star')
    allthemods.remove('allthetweaks:greg_star_block')

    for (let i = 1; i < 10; i++) {
        allthemods.remove(`allthecompressed:greg_star_block_${i}x`)
    }

    allthemods.remove('relics:researching_table')
    allthemods.remove("extradisks:infinite_chemical_storage_block")
    allthemods.remove("extradisks:infinite_chemical_storage_disk")
    allthemods.remove("extradisks:infinite_chemical_storage_part")
    allthemods.remove("extradisks:infinite_fluid_storage_block")
    allthemods.remove("extradisks:infinite_fluid_storage_disk")
    allthemods.remove("extradisks:infinite_fluid_storage_part")
    allthemods.remove("extradisks:infinite_item_storage_block")
    allthemods.remove("extradisks:infinite_item_storage_disk")
    allthemods.remove("extradisks:infinite_item_storage_part")

    let $DyeColor = Java.loadClass("net.minecraft.world.item.DyeColor")
    for (let color of $DyeColor.values()) {
        allthemods.remove(`/refinedstorage:${color}_.*/`)
    }

    allthemods.remove('mekmm:scrap')
    allthemods.remove('mekmm:scrap_box')
    allthemods.remove('mekmm:empty_crystal')
    allthemods.remove('mekmm:uu_matter')
    allthemods.remove('mekmm:ambient_gas_collector')
    allthemods.remove(/mekmm:.*replicat.*/)
    allthemods.remove(/mekmm:.*recycl.*/)
    allthemods.remove(/mekmm:.*planting.*/)
    allthemods.remove('mekmm:cnc_lathe')
    allthemods.remove(/mekmm:.*lathing.*/)
    allthemods.remove(/mekmm:.*rolling_mill.*/)

    allthemods.remove("supplementaries:faucet")
})

// RecipeViewerEvents.removeEntriesCompletely('mekanism:chemical', allthemods => {
//
//     allthemods.remove('mekmm:uu_matter')
//     allthemods.remove('mekmm:unstable_dimensional_gas')
// })

RecipeViewerEvents.removeRecipes(event => {
    event.remove(["xycraft_machines:extractor/enderio/grains_of_infinity"])
})

RecipeViewerEvents.removeEntries('item', allthemods => {
    for (let yeet of runicYEET) {
        allthemods.remove(yeet)
    }

    // From JEI blacklist.json
    allthemods.remove(["immersiveengineering:pickaxe_steel",
        "immersiveengineering:shovel_steel",
        "immersiveengineering:axe_steel",
        "immersiveengineering:hoe_steel",
        "immersiveengineering:sword_steel",
        "railcraft:steel_sword",
        "railcraft:steel_hoe",
        "railcraft:steel_axe",
        "railcraft:steel_pickaxe",
        "railcraft:steel_shovel",
        "railcraft:steel_boots",
        "railcraft:steel_chestplate",
        "railcraft:steel_helmet",
        "railcraft:steel_leggings",
        "immersiveengineering:armor_steel_boots",
        "immersiveengineering:armor_steel_leggings",
        "immersiveengineering:armor_steel_chestplate",
        "immersiveengineering:armor_steel_helmet",
        "mekanism:creative_chemical_tank",
        "mekanism:creative_fluid_tank",
        "mekanism:creative_bin",
        "bigreactors:reinforced_reactorcreativewatergenerator",
        "bigreactors:basic_turbinecreativesteamgenerator",
        "bigreactors:reinforced_turbinecreativesteamgenerator",
        "functionalstorage:creative_vending_upgrade",
        "enderio:creative_power",
        "ae2:creative_storage_cell",
        "mysticalagriculture:creative_soulium_dagger",
        "modularrouters:creative_module",
        "modern_industrialization:creative_tank",
        "modern_industrialization:creative_storage_unit",
        "pneumaticcraft:creative_upgrade",
        "quarryplus:creative_generator",
        "rftoolspower:dimensionalcell_creative",
        "xycraft_machines:item_selector",
        "xycraft_machines:fluid_selector",
        "stevescarts:module_creative_engine",
        "stevescarts:module_creative_hull",
        "stevescarts:upgrade_creative_mode",
        "ftbquests:stage_barrier",
        "ftbquests:barrier",
        "forbidden_arcanus:draco_arcanus_boots",
        "forbidden_arcanus:draco_arcanus_leggings",
        "forbidden_arcanus:draco_arcanus_chestplate",
        "forbidden_arcanus:draco_arcanus_helmet",
        "forbidden_arcanus:draco_arcanus_scepter",
        "forbidden_arcanus:draco_arcanus_hoe",
        "forbidden_arcanus:draco_arcanus_axe",
        "forbidden_arcanus:draco_arcanus_pickaxe",
        "forbidden_arcanus:draco_arcanus_shovel",
        "forbidden_arcanus:draco_arcanus_sword",
        "forbidden_arcanus:draco_arcanus_staff",
        "naturesaura:multiblock_maker",
        "modern_industrialization:creative_barrel",
        "mininggadgets:upgrade_battery_creative",
        "immersiveengineering:capacitor_creative",
        "twilightforest:uncrafting_table",
        "mifa:efficiency_addon_5",
        "mifa:efficiency_addon_6",
        "mifa:efficiency_addon_7",
        "mifa:efficiency_addon_8",
        "mifa:processing_addon_5",
        "mifa:processing_addon_6",
        "mifa:processing_addon_7",
        "mifa:processing_addon_8",
        "mifa:speed_addon_5",
        "mifa:speed_addon_6",
        "mifa:speed_addon_7",
        "mifa:speed_addon_8"]
    )

    if (Platform.isLoaded("hyperbox")) {
        allthemods.remove("hyperbox:hyperbox")
    }

    allthemods.remove(stack => {
        if (stack.id == "evilcraft:dark_tank") {
            // console.log("stack is: " + stack.id)
            let component = stack.get("cyclopscore:fluid_content")
            // console.log("component is: " + component)
            if (component) return true
        }
        return false
    })

})

RecipeViewerEvents.addInformation('item', allthemods => {
    allthemods.add('justdirethings:polymorphic_catalyst', [
        '§8Drop a §cPolymorphic Catalyst§8 into §1Water§8 to get Polymorphic Fluid'
    ])
    allthemods.add('justdirethings:portal_fluid_catalyst', [
        '§8Drop a §dPortal Fluid Catalyst§8 into Polymorphic Fluid§8 in t§dThe End§8 to get §5Unstable Portal Fluid'
    ])
})

RecipeViewerEvents.addInformation('fluid', allthemods => {
    allthemods.add("advanced_ae:quantum_infusion_source", [
        '§8In the Reaction Chamber: §e4000mb of Water§8 + §e1x Quantum Infused Dust§8 = §b1000mb of Quantum Infusion'
    ])
    allthemods.add("justdirethings:polymorphic_fluid_source", [
        '§8Drop a §cPolymorphic Catalyst§8 into §bWater§8 to get Polymorphic Fluid'
    ])
    allthemods.add("justdirethings:unstable_portal_fluid_source", [
        '§8Drop a §dPortal Fluid Catalyst§8 into §dPolymorphic Fluid§8 in §5The End§8 to get §5Unstable Portal Fluid'
    ])
})

RecipeViewerEvents.removeCategories(allthemods => {
    allthemods.remove(["minecraft:grindstone"])
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
