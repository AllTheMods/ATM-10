// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

if (Platform.isLoaded("eternal_starlight")) {
    ServerEvents.generateData("after_mods", allthemods => {
        allthemods.json("hostilenetworks:data_models/aurora_deer", {
            "entity": "eternal_starlight:aurora_deer",
            "name": {
                "translate": "entity.eternal_starlight.aurora_deer",
                "color": "#15413A"
            },
            "display": {},
            "sim_cost": 256,
            "input": {
                "item": "hostilenetworks:prediction_matrix"
            },
            "base_drop": {
                "id": "kubejs:starlight_prediction"
            },
            "trivia": "hostilenetworks.trivia.eternal_starlight.aurora_deer",
            "fabricator_drops": [
                {
                    "id": "eternal_starlight:aurora_deer_steak",
                    "count": 24
                },
                {
                    "id": "minecraft:leather",
                    "count": 16
                },
                {
                    "id": "eternal_starlight:aurora_deer_antler",
                    "count": 1
                }
            ]
        })

        allthemods.json("hostilenetworks:data_models/crystallized_moth", {
            "entity": "eternal_starlight:crystallized_moth",
            "name": {
                "translate": "entity.eternal_starlight.crystallized_moth",
                "color": "#966D81"
            },
            "display": {},
            "sim_cost": 512,
            "input": {
                "item": "hostilenetworks:prediction_matrix"
            },
            "base_drop": {
                "id": "kubejs:starlight_prediction"
            },
            "trivia": "hostilenetworks.trivia.eternal_starlight.crystallized_moth",
            "fabricator_drops": [
                {
                    "id": "eternal_starlight:blue_starlight_crystal_shard",
                    "count": 16
                },
                {
                    "id": "eternal_starlight:red_starlight_crystal_shard",
                    "count": 16
                },
                {
                    "id": "eternal_starlight:shivering_gel",
                    "count": 4
                }
            ]
        })

        allthemods.json("hostilenetworks:data_models/ent", {
            "entity": "eternal_starlight:ent",
            "name": {
                "translate": "entity.eternal_starlight.ent",
                "color": "#618E8E"
            },
            "display": {
                "scale": 2.0
            },
            "sim_cost": 128,
            "input": {
                "item": "hostilenetworks:prediction_matrix"
            },
            "base_drop": {
                "id": "kubejs:starlight_prediction"
            },
            "trivia": "hostilenetworks.trivia.eternal_starlight.ent",
            "fabricator_drops": [
                {
                    "id": "minecraft:stick",
                    "count": 32
                },
                {
                    "id": "eternal_starlight:lunar_berries",
                    "count": 32
                },
                {
                    "id": "eternal_starlight:lunar_leaves",
                    "count": 16
                }
            ]
        })

        allthemods.json("hostilenetworks:data_models/freeze", {
            "entity": "eternal_starlight:freeze",
            "name": {
                "translate": "entity.eternal_starlight.freeze",
                "color": "#7290B6"
            },
            "display": {},
            "sim_cost": 512,
            "input": {
                "item": "hostilenetworks:prediction_matrix"
            },
            "base_drop": {
                "id": "kubejs:starlight_prediction"
            },
            "trivia": "hostilenetworks.trivia.eternal_starlight.freeze",
            "fabricator_drops": [
                {
                    "id": "eternal_starlight:frozen_tube",
                    "count": 12
                }
            ]
        })

        allthemods.json("hostilenetworks:data_models/gleech", {
            "entity": "eternal_starlight:gleech",
            "name": {
                "translate": "entity.eternal_starlight.gleech",
                "color": "#80A2B4"
            },
            "display": {
                "y_offset": 0.2,
                "scale": 2.0
            },
            "sim_cost": 128,
            "input": {
                "item": "hostilenetworks:prediction_matrix"
            },
            "base_drop": {
                "id": "kubejs:starlight_prediction"
            },
            "trivia": "hostilenetworks.trivia.eternal_starlight.gleech",
            "fabricator_drops": [
                {
                    "id": "eternal_starlight:gleech_egg",
                    "count": 8
                }
            ]
        })

        allthemods.json("hostilenetworks:data_models/grimstone_golem", {
            "entity": "eternal_starlight:grimstone_golem",
            "name": {
                "translate": "entity.eternal_starlight.grimstone_golem",
                "color": "#656167"
            },
            "display": {
                "scale": 1.5
            },
            "sim_cost": 256,
            "input": {
                "item": "hostilenetworks:prediction_matrix"
            },
            "base_drop": {
                "id": "kubejs:starlight_prediction"
            },
            "trivia": "hostilenetworks.trivia.eternal_starlight.grimstone_golem",
            "fabricator_drops": [
                {
                    "id": "eternal_starlight:grimstone",
                    "count": 32
                },
                {
                    "id": "eternal_starlight:cobbled_grimstone",
                    "count": 32
                }
            ]
        })

        allthemods.json("hostilenetworks:data_models/lonestar_skeleton", {
            "entity": "eternal_starlight:lonestar_skeleton",
            "variants": [],
            "name": {
                "translate": "entity.eternal_starlight.lonestar_skeleton",
                "color": "#999C99"
            },
            "display": {},
            "sim_cost": 256,
            "input": {
                "item": "hostilenetworks:prediction_matrix"
            },
            "base_drop": {
                "id": "kubejs:starlight_prediction"
            },
            "trivia": "hostilenetworks.trivia.eternal_starlight.lonestar_skeleton",
            "fabricator_drops": [
                {
                    "id": "minecraft:bone",
                    "count": 24
                },
                {
                    "id": "eternal_starlight:swamp_silver_nugget",
                    "count": 16
                }
            ]
        })

        allthemods.json("hostilenetworks:data_models/luminaris", {
            "entity": "eternal_starlight:luminaris",
            "name": {
                "translate": "entity.eternal_starlight.luminaris",
                "color": "#5D5A8F"
            },
            "display": {
                "y_offset": 0.2,
                "scale": 2.0
            },
            "sim_cost": 128,
            "input": {
                "item": "hostilenetworks:prediction_matrix"
            },
            "base_drop": {
                "id": "kubejs:starlight_prediction"
            },
            "trivia": "hostilenetworks.trivia.eternal_starlight.luminaris",
            "fabricator_drops": [
                {
                    "id": "eternal_starlight:luminaris",
                    "count": 32
                }
            ]
        })

        allthemods.json("hostilenetworks:data_models/luminofish", {
            "entity": "eternal_starlight:luminofish",
            "name": {
                "translate": "entity.eternal_starlight.luminofish",
                "color": "#F3E8C3"
            },
            "display": {
                "y_offset": 0.2,
                "scale": 2.0
            },
            "sim_cost": 128,
            "input": {
                "item": "hostilenetworks:prediction_matrix"
            },
            "base_drop": {
                "id": "kubejs:starlight_prediction"
            },
            "trivia": "hostilenetworks.trivia.eternal_starlight.luminofish",
            "fabricator_drops": [
                {
                    "id": "eternal_starlight:luminofish",
                    "count": 32
                }
            ]
        })

        allthemods.json("hostilenetworks:data_models/lunar_monstrosity", {
            "entity": "eternal_starlight:lunar_monstrosity",
            "name": {
                "translate": "entity.eternal_starlight.lunar_monstrosity",
                "color": "#433C7B"
            },
            "display": {
                "y_offset": 0.25,
                "scale": 0.5
            },
            "sim_cost": 8192,
            "input": {
                "item": "hostilenetworks:prediction_matrix"
            },
            "base_drop": {
                "id": "kubejs:starlight_prediction"
            },
            "trivia": "hostilenetworks.trivia.eternal_starlight.lunar_monstrosity",
            "fabricator_drops": [
                {
                    "id": "minecraft:spectral_arrow",
                    "count": 64
                },
                {
                    "id": "minecraft:arrow",
                    "count": 32
                },
                {
                    "id": "eternal_starlight:amaramber_arrow",
                    "count": 32
                },
                {
                    "id": "eternal_starlight:tangled_skull",
                    "count": 24
                },
                {
                    "id": "minecraft:iron_ingot",
                    "count": 16
                },
                {
                    "id": "minecraft:gold_ingot",
                    "count": 12
                },
                {
                    "id": "eternal_starlight:seeking_eye",
                    "count": 16
                },
                {
                    "id": "minecraft:coal",
                    "count": 16
                },
                {
                    "id": "eternal_starlight:glacite_shard",
                    "count": 6
                },
                {
                    "id": "eternal_starlight:trapped_soul",
                    "count": 12
                },
                {
                    "id": "eternal_starlight:lunar_berries",
                    "count": 16
                },
                {
                    "id": "eternal_starlight:tenacious_petal",
                    "count": 16
                },
                {
                    "id": "eternal_starlight:tenacious_vine",
                    "count": 16
                },
                {
                    "id": "eternal_starlight:swamp_silver_ingot",
                    "count": 6
                },
                {
                    "id": "eternal_starlight:aethersent_ingot",
                    "count": 3
                },
                {
                    "id": "eternal_starlight:thermal_springstone_ingot",
                    "count": 6
                },
                {
                    "id": "eternal_starlight:crescent_spear",
                    "count": 1
                },
                {
                    "id": "eternal_starlight:wand_of_teleportation",
                    "count": 1
                },
                {
                    "id": "eternal_starlight:moonring_bow",
                    "count": 1
                }
            ],
            "data_per_kill": {
                "faulty": 3,
                "basic": 12,
                "advanced": 30,
                "superior": 45
            }
        })

        allthemods.json("hostilenetworks:data_models/nightfall_spider", {
            "entity": "eternal_starlight:nightfall_spider",
            "name": {
                "translate": "entity.eternal_starlight.nightfall_spider",
                "color": "#1B363D"
            },
            "display": {},
            "sim_cost": 256,
            "input": {
                "item": "hostilenetworks:prediction_matrix"
            },
            "base_drop": {
                "id": "kubejs:starlight_prediction"
            },
            "trivia": "hostilenetworks.trivia.eternal_starlight.nightfall_spider",
            "fabricator_drops": [
                {
                    "id": "minecraft:string",
                    "count": 32
                },
                {
                    "id": "eternal_starlight:nightfall_spider_eye",
                    "count": 16
                }
            ]
        })

        allthemods.json("hostilenetworks:data_models/ratlin", {
            "entity": "eternal_starlight:ratlin",
            "name": {
                "translate": "entity.eternal_starlight.ratlin",
                "color": "#644856"
            },
            "display": {
                "scale": 1.5
            },
            "sim_cost": 128,
            "input": {
                "item": "hostilenetworks:prediction_matrix"
            },
            "base_drop": {
                "id": "kubejs:starlight_prediction"
            },
            "trivia": "hostilenetworks.trivia.eternal_starlight.ratlin",
            "fabricator_drops": [
                {
                    "id": "eternal_starlight:ratlin_meat",
                    "count": 32
                },
                {
                    "id": "eternal_starlight:cave_moss",
                    "count": 32
                },
                {
                    "id": "minecraft:leather",
                    "count": 16
                }
            ]
        })

        allthemods.json("hostilenetworks:data_models/starlight_golem", {
            "entity": "eternal_starlight:starlight_golem",
            "name": {
                "translate": "entity.eternal_starlight.starlight_golem",
                "color": "#0F8BBF"
            },
            "display": {
                "y_offset": 0.25,
                "scale": 0.5
            },
            "sim_cost": 8192,
            "input": {
                "item": "hostilenetworks:prediction_matrix"
            },
            "base_drop": {
                "id": "kubejs:starlight_prediction"
            },
            "trivia": "hostilenetworks.trivia.eternal_starlight.starlight_golem",
            "fabricator_drops": [
                {
                    "id": "minecraft:spectral_arrow",
                    "count": 64
                },
                {
                    "id": "minecraft:arrow",
                    "count": 32
                },
                {
                    "id": "eternal_starlight:amaramber_arrow",
                    "count": 32
                },
                {
                    "id": "eternal_starlight:oxidized_golem_steel_ingot",
                    "count": 24
                },
                {
                    "id": "minecraft:iron_ingot",
                    "count": 16
                },
                {
                    "id": "minecraft:gold_ingot",
                    "count": 12
                },
                {
                    "id": "eternal_starlight:seeking_eye",
                    "count": 16
                },
                {
                    "id": "minecraft:coal",
                    "count": 16
                },
                {
                    "id": "eternal_starlight:glacite_shard",
                    "count": 6
                },
                {
                    "id": "eternal_starlight:forge_armor_trim_smithing_template",
                    "count": 12
                },
                {
                    "id": "eternal_starlight:lunar_berries",
                    "count": 16
                },
                {
                    "id": "eternal_starlight:swamp_silver_ingot",
                    "count": 6
                },
                {
                    "id": "eternal_starlight:aethersent_ingot",
                    "count": 3
                },
                {
                    "id": "eternal_starlight:thermal_springstone_ingot",
                    "count": 6
                },
                {
                    "id": "eternal_starlight:energy_sword",
                    "count": 1
                }
            ],
            "data_per_kill": {
                "faulty": 3,
                "basic": 12,
                "advanced": 30,
                "superior": 45
            }
        })

        allthemods.json("hostilenetworks:data_models/tangled", {
            "entity": "eternal_starlight:tangled",
            "name": {
                "translate": "entity.eternal_starlight.tangled",
                "color": "#79929C"
            },
            "display": {},
            "sim_cost": 512,
            "input": {
                "item": "hostilenetworks:prediction_matrix"
            },
            "base_drop": {
                "id": "kubejs:starlight_prediction"
            },
            "trivia": "hostilenetworks.trivia.eternal_starlight.tangled",
            "fabricator_drops": [
                {
                    "id": "minecraft:bone",
                    "count": 24
                },
                {
                    "id": "minecraft:vine",
                    "count": 32
                },
                {
                    "id": "eternal_starlight:tangled_skull",
                    "count": 4
                }
            ]
        })

        allthemods.json("hostilenetworks:data_models/thirst_walker", {
            "entity": "eternal_starlight:thirst_walker",
            "name": {
                "translate": "entity.eternal_starlight.thirst_walker",
                "color": "#5E5155"
            },
            "display": {
                "scale": 0.9
            },
            "sim_cost": 512,
            "input": {
                "item": "hostilenetworks:prediction_matrix"
            },
            "base_drop": {
                "id": "kubejs:starlight_prediction"
            },
            "trivia": "hostilenetworks.trivia.eternal_starlight.thirst_walker",
            "fabricator_drops": [
                {
                    "id": "eternal_starlight:tooth_of_hunger",
                    "count": 8
                }
            ]
        })

        allthemods.json("hostilenetworks:data_models/yeti", {
            "entity": "eternal_starlight:yeti",
            "name": {
                "translate": "entity.eternal_starlight.yeti",
                "color": "#CFD0E2"
            },
            "display": {
                "scale": 1.5
            },
            "sim_cost": 128,
            "input": {
                "item": "hostilenetworks:prediction_matrix"
            },
            "base_drop": {
                "id": "kubejs:starlight_prediction"
            },
            "trivia": "hostilenetworks.trivia.eternal_starlight.yeti",
            "fabricator_drops": [
                {
                    "id": "minecraft:string",
                    "count": 32
                },
                {
                    "id": "eternal_starlight:white_yeti_fur",
                    "count": 16
                }
            ]
        })

    })
}

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
