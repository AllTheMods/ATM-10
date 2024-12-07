// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
    allthemods.shaped('minecraft:dragon_head',
        [
            'AAA',
            'BPB',
            'AAA'
        ],{
        A: 'hostilenetworks:end_prediction',
        P: 'hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:wither"]',
        B: 'minecraft:dragon_breath'
    })
})

ServerEvents.generateData('after_mods', allthemods => {
    allthemods.json('hostilenetworks:data_models/enderman.json',
        {
            "entity": "minecraft:enderman",
            "variants": [
                "endermanoverhaul:badlands_enderman",
                "endermanoverhaul:cave_enderman",
                "endermanoverhaul:coral_enderman",
                "endermanoverhaul:crimson_forest_enderman",
                "endermanoverhaul:dark_oak_enderman",
                "endermanoverhaul:desert_enderman",
                "endermanoverhaul:end_enderman",
                "endermanoverhaul:end_islands_enderman",
                "endermanoverhaul:flower_fields_enderman",
                "endermanoverhaul:ice_spikes_enderman",
                "endermanoverhaul:mushroom_fields_enderman",
                "endermanoverhaul:nether_wastes_enderman",
                "endermanoverhaul:savanna_enderman",
                "endermanoverhaul:snowy_enderman",
                "endermanoverhaul:soulsand_valley_enderman",
                "endermanoverhaul:swamp_enderman",
                "endermanoverhaul:nether_wastes_enderman",
                "endermanoverhaul:warped_forest_enderman",
                "endermanoverhaul:windswept_hills_enderman"
            ],
            "name": {
                "translate": "entity.minecraft.enderman",
                "color": "#161616"
            },
            "display": {
                "scale": 0.75
            },
            "sim_cost": 512,
            "input": {
                "item": "hostilenetworks:prediction_matrix"
            },
            "base_drop": {
                "id": "hostilenetworks:end_prediction"
            },
            "trivia": "hostilenetworks.trivia.enderman",
            "fabricator_drops": [
                {
                    "id": "minecraft:ender_pearl",
                    "count": 16
                },
                {
                    "id": "minecraft:end_crystal",
                    "count": 1
                },
                {
                    "id": "evilcraft:ender_tear",
                    "optional": true,
                    "count": 4
                },
                {
                    "id": "reliquary:nebulous_heart",
                    "optional": true,
                    "count": 2
                },
                {
                    "id": "enderio:enderman_head",
                    "optional": true,
                    "count": 4
                }
            ]
        }
    )
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.