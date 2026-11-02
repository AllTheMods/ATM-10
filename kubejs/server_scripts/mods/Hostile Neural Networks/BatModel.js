// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.generateData('after_mods', allthemods => {
    allthemods.json('hostilenetworks:data_models/bat.json', {
        "neoforge:conditions": [
            { "type": "neoforge:mod_loaded", "modid": "reliquary" }
        ],
        "entity": "minecraft:bat",
        "variants": [],
        "name_color": "#964B00",
        "display": {},
        "sim_cost": 64,
        "input": { "item": "hostilenetworks:prediction_matrix" },
        "base_drop": { "id": "hostilenetworks:overworld_prediction", "count": 1 },
        "trivia": "hostilenetworks.trivia.bat",
        "fabricator_drops": [
            { "id": "reliquary:bat_wing", "count": 8 },
            { "id": "forbidden_arcanus:bat_wing", "optional": true, "count": 8 },
            { "id": "actuallyadditions:bats_wing", "optional": true, "count": 8 }
        ]
    })
})
