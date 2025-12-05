// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
    allthemods.custom({
        "type": "modern_industrialization:mixer",
        "eu": 2,
        "duration": 100,
        "item_inputs": {
            "amount": 1,
            "tag": "c:dusts/redstone"
        },
        "fluid_inputs": {
            "tag": "c:creosote",
            "amount": 500
        },
        "fluid_outputs": {
            "fluid": "modern_industrialization:lubricant",
            "amount": 500
        }
    }).id("modern_industrialization:materials/mixer/lubricant")

    allthemods.custom({
        "type": "modern_industrialization:assembler",
        "eu": 8,
        "duration": 200,
        "item_inputs": [
            {
                "tag": "c:rods/gold",
                "amount": 6
            },
            {
                "item": "minecraft:stick",
                "amount": 1
            },
            {
                "amount": 1,
                "tag": "c:dusts/redstone"
            }
        ],
        "fluid_inputs": [
            {
                "tag": "c:creosote",
                "amount": 100
            }
        ],
        "item_outputs": [
            {
                "item": "minecraft:powered_rail",
                "amount": 8
            }
        ]
    }).id("modern_industrialization:vanilla_recipes/assembler/powered_rail")

    allthemods.custom({
        "type": "modern_industrialization:assembler",
        "eu": 8,
        "duration": 200,
        "item_inputs": [
            {
                "tag": "c:rods/steel",
                "amount": 6
            },
            {
                "item": "minecraft:stick",
                "amount": 1
            }
        ],
        "fluid_inputs": [
            {
                "tag": "c:creosote",
                "amount": 100
            }
        ],
        "item_outputs": [
            {
                "item": "minecraft:rail",
                "amount": 16
            }
        ]
    }).id("modern_industrialization:vanilla_recipes/assembler/rail")

    allthemods.custom({
        "neoforge:conditions": [
            {
                "type": "neoforge:mod_loaded",
                "modid": "immersiveengineering"
            }
        ],
        "type": "oritech:centrifuge_fluid",
        "fluidInput": {
            "amount": 125,
            "fluid": "#c:creosote"
        },
        "fluidOutputs": [],
        "ingredients": [
            {
                "tag": "minecraft:planks"
            }
        ],
        "results": [
            {
                "count": 1,
                "id": "immersiveengineering:treated_wood_horizontal"
            }
        ],
        "time": 100
    }).id("oritech:centrifuge/fluid/compat/immersiveengineering/treated_planks")
})

let $Tags = Java.loadClass("dev.latvian.mods.kubejs.util.Tags")
let $FluidFuel = Java.loadClass("aztech.modern_industrialization.api.datamaps.FluidFuel")

ServerEvents.generateData("after_mods", event => {
    let fluidFuels = DataMap.typeOf("minecraft:fluid", "modern_industrialization:fluid_fuels")
    event.dataMap(fluidFuels, mapFile => {
        mapFile.addTag($Tags.fluid("c:creosote"), new $FluidFuel(160))
    })
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.